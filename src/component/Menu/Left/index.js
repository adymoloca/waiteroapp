import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, ScrollView } from 'react-native'
import { Text, Icon, View } from 'native-base'

import * as MENU from './Menu'

import { __ } from '@utility/translation'

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles'
import store from '../../../redux/store.js';
import { USER } from '../../../redux/types/userTypes'
import { userExit, userLogout } from '../../../redux/actions/userActions'
import { useDispatch } from 'react-redux'

const DrawerContent = ({ navigation, route }) => {
  
  const dispatch = useDispatch()

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('persist:root').then(() => {
        dispatch(userLogout(route?.params?.userId, route?.params?.token))
        navigation.navigate('DrawerRoot', { screen: 'PublicHome', loggedIn: false , userId: '', token: ''});
        return true;
      })
    } catch(e) {
      console.log(e)
      return false;
    }
  }

  const exit = () => {
    dispatch(userExit())
    navigation.navigate('DrawerRoot', { screen: 'PublicHome', loggedIn: true});
    
    return true;
  }

  useEffect(() => {
    // console.log("route ----> ", route)
  }, [route])

  const renderMenuList = (menus) => {
    return <>{menus.map((menu, index) => {
        if ((menu.role === 'guest') || (menu.role === 'user' && route?.params?.loggedIn) || (menu.role === 'denied-logged' && !route?.params?.loggedIn)) {
          return (<TouchableOpacity key={index} style={styles.navBtn} underlayColor='transparent' onPress={() => {
            if (menu.iconName === 'logout')
              logout();
            if (menu.iconName === 'close')
              exit();
              navigation.closeDrawer()
              navigation.navigate(menu.route);
          }} disabled={menu.route === 'PublicAbousUs'}>
            <View style={styles.navBtnLeft}>
              <Icon name={menu.iconName} type={menu.iconType || 'FontAwesome'} style={styles.navBtnIcon} />
            </View>
            <Text style={styles.navBtnText}>{menu.name}</Text>
          </TouchableOpacity>)
        }
      })}</>
  }


  return (
    <View style={styles.nav}>
      {route?.params?.loggedIn ? (<View style={styles.navProfile}>
          <View style={styles.navCol}>
          <Image source={require('@asset/images/avatar.png')} style={styles.navAvatar}/>
            <View>
              <Text style={styles.navName}>{route?.params?.name}</Text>
              {/* <Text style={styles.navDesc}>{route?.params?.orders || 0} comenzi</Text> */}
            </View>
          </View>
        </View>) : (<View style={styles.navProfile}>
            <Image source={require('@asset/images/logo-white.png')} style={{width: 220, height: 120}} />
          <View style={styles.navCol}>
        </View></View>)}
      <View style={styles.navMenu}>
        <ScrollView>
            {renderMenuList(MENU.Data1)}
            {route?.params?.loggedIn && <Text style={styles.navHeader}>Client</Text>}
            {renderMenuList(MENU.Data2)}
            <Text style={styles.navHeader}>Info</Text>
          {renderMenuList(MENU.Data3)}
          </ScrollView>
      </View>
    </View>
  )
}

export default DrawerContent
