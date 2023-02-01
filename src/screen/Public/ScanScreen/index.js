import * as React from 'react';
import { Text, SafeAreaView, ActivityIndicator, StyleSheet, View, BackHandler } from 'react-native';
import { Camera, useCameraDevices, useFrameProcessor } from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as REA from 'react-native-reanimated';
import { navigate } from '@utility/navigation'
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import styles from './styles';
import Button from '../../../component/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getTableInfo } from '../../../redux/actions/userActions';
import axios from 'axios';

export default function ScanScreen({navigation}) {
  const mounted = REA.useSharedValue(true);
  const regionEnabledShared = REA.useSharedValue(false);
  const continuous = true;
  const [hasPermission, setHasPermission] = React.useState(false);
  const [barcodeResults, setBarcodeResults] = React.useState([]);
  const [buttonText, setButtonText] = React.useState("Pause");
  const [isActive, setIsActive] = React.useState(true);
  const [searching, setSearching] = React.useState(true);
  const [regionEnabled, setRegionEnabled] = React.useState(false);
  const [torchEnabled, setTorchEnabled] = React.useState(false);
  const [useFront, setUseFront] = React.useState(false);
  const useFrontShared = REA.useSharedValue(false);
  const [restaurantAndTableInfo, setRestaurantAndTableInfo] = React.useState();
  const userId = useSelector(state => state.userReducer.user?._id);
  const token = useSelector(state => state.userReducer.token);
  const tableNumber = useSelector(state => state.userReducer.actualTable?.tableNumber);
  const dispatch = useDispatch();

  const devices = useCameraDevices();
  const frontCam = devices.front;
  const backCam = devices.back;

  let isScreenMounted = React.useRef();
  let scanned = false;

  React.useEffect(() => {
    isScreenMounted.current = true;
    if (!(userId && token)) {
      navigation.navigate('PublicSignIn');
    }
    if (tableNumber) {
      navigation.navigate('PublicHome');
    }
    return () => isScreenMounted.current = false;
  }, [])

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();

    const backAction = () => {
      setIsActive(false);
      navigation.popToTop();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  React.useEffect(()=>{
    mounted.value = true; // to avoid the error: Can’t perform a React state update on an unmounted component.
    return () => { mounted.value = false };
  });

  const onBarCodeDetected = (results) => {
    if (continuous == false && scanned== false){
      setIsActive(false);
      scanned = true;
    }
  };

  const toggleCameraStatus = () => {
    if (buttonText=="Pause"){
      setButtonText("Resume");
      setIsActive(false);
    }else{
      setButtonText("Pause");
      setIsActive(true);
    }
  };

  // const isTableBusy = (tableNumber, restaurantId) => {
  //   axios.get()
  // }


  // const generatePassword = () => {

  // }

  const onBarcodeScanned = (results) => {
    if (mounted.value) {
      if (results) {
        toggleCameraStatus();
        setSearching(false);
        const parsedData = JSON.parse(results[0].content.data);
        if (parsedData && parsedData?.clientId && parsedData?.restaurantId && parsedData?.tableNumber) {
          setRestaurantAndTableInfo({ clientId: parsedData.clientId, restaurantId: parsedData.restaurantId, tableNumber: parsedData.tableNumber });
        }
      }
    }
  }

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  React.useEffect(() => {
    if(barcodes?.length > 0)
    onBarcodeScanned(barcodes);
  },[barcodes])


  const goToYourRestaurant = () => {
    if (userId && token && restaurantAndTableInfo?.clientId && restaurantAndTableInfo?.restaurantId && restaurantAndTableInfo?.tableNumber) {
      dispatch(getTableInfo(userId, token, restaurantAndTableInfo.clientId, restaurantAndTableInfo.restaurantId, restaurantAndTableInfo.tableNumber))
      navigate('RestaurantScreen')
    }
  }
  
  return (
      <SafeAreaView style={styles.container}>
        { backCam != null &&
        hasPermission && (
        <>
          <View style={styles.topMaskScanner}>
              <Text style={styles.navDesc}>
                  WAITERO
              </Text>
              <Text style={styles.navDetails}>
                  Incadreaza un cod prentru a incepe a comanda
              </Text>
          </View>
          <Camera
            style={[StyleSheet.absoluteFill]}
            device={useFront ? frontCam : backCam}
            isActive={isActive}
           /*  preset= 'inputPriority' */
           /*  format= { useFront ? frontCam.formats[0] : backCam.formats[0] } */
            torch={torchEnabled ? "on" : "off"}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
          <View style={styles.bottomMaskScanner}>
            {searching ? <ActivityIndicator size={80} color={'#fff'} style={{ marginTop: 45 }} /> : (
              <React.Fragment>
                  <Icon name='check-circle' size={80} color={'#fff'} style={{ marginTop: 45, marginBottom: 25 }} />
                <Button
                  disabled={restaurantAndTableInfo ? false : true }
                  onPress={() => { goToYourRestaurant()}}
                      content='INCEPE ACUM   '
                      type='default'
                      icon={{ name: 'angle-right', type: 'FontAwesome5', size: 10 }}
                  />
              </React.Fragment>
            )}
          </View>
        </>)}
      </SafeAreaView>
  );
}