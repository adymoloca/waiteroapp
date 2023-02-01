import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

const PublicIntro = ({navigation}) => {
 

  return(
      <Container>
      <Content contentContainerStyle={theme.layoutDf}>
        <View style={styles.imgBg}>
          <Image source={{ uri: 'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }} style={styles.introImage} resizeMode='cover' />
        </View>
        <View style={styles.introContainer}>
          <Image source={require('@asset/images/logo-white.png')} style={{width: 120, height: 100, marginBottom: 20}} />
          {/* <Text style={styles.introTitle}>{__('Waitero')}</Text> */}
          <Text style={styles.introText}>{__('Mergi la restaurantul tau preferat si comanda fara sa mai astepti!')}</Text>
          <TouchableOpacity style={styles.introIcon} onPress={() => { navigation.navigate('PublicHome') }}>
            <Icon name='arrowright' type='AntDesign' style={[theme.big, theme.light]} />
          </TouchableOpacity>
        </View>
      </Content>
    </Container >
    )
}

export default PublicIntro;
