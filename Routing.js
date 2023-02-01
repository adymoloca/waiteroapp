import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import store from './src/redux/store.js';
/* Drawer Menu */

import DrawerContent from '@component/Menu/Left'

/** Public **/

import PublicHome from '@screen/Public/Home'
import PublicIntro from '@screen/Public/Intro'
import PublicSignUp from '@screen/Public/SignUp'
import PublicSignIn from '@screen/Public/SignIn'
import PublicForgotPassword from '@screen/Public/ForgotPassword'
import PublicForgotPasswordOtp from '@screen/Public/ForgotPasswordOtp'
import PublicResetPassword from '@screen/Public/ResetPassword'
import PublicPayment from '@screen/Public/Payment'
import PublicContact from '@screen/Public/Contact'
import ScanScreen from '@screen/Public/ScanScreen'
import ActualOrder from '@screen/Public/ActualOrder'
import RestaurantScreen from '@screen/Public/RestaurantScreen'
import WaiterMode from '@screen/Public/WaiterMode'

/** Public **/

import Orders from '@screen/Customer/Orders'
import CustomerProfile from '@screen/Customer/Profile'
import CustomerPayment from '@screen/Customer/Payment'
import CustomerSettings from '@screen/Customer/Settings'

/* Navigation */

import { navigationRef } from '@utility/navigation'
import { useSelector } from 'react-redux'

const RoutingParent = ({navigation, route}) => {

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  
    
    const forFade = ({ current, closing }) => ({
      cardStyle: {
        opacity: current.progress
      }
    })
    
    const options = {
      cardStyleInterpolator: forFade
    }

  const DrawerRoot = ({route, navigation}) => {
        return (
          <Drawer.Navigator
            initialRouteName='PublicIntro'
            drawerContent={({ navigation, props }) => { return <DrawerContent navigation={navigation} route={route} />}}
            drawerStyle={{ width: 250 }}
            screenOptions={{ headerShown: false }}
          >
            <Drawer.Screen name='PublicIntro' component={PublicIntro} options={options} />
            <Drawer.Screen name='PublicHome' initialParams={{ params: route.params}} component={PublicHome} options={options} />
          </Drawer.Navigator>
        )
  }

  return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName='DrawerRoot' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='DrawerRoot' component={DrawerRoot} options={options} />
            {/* <Stack.Screen name='PublicLanguage' component={PublicLanguage} options={options} /> */}
            <Stack.Screen name='PublicSignUp' component={PublicSignUp} options={options} />
            <Stack.Screen name='PublicSignIn' component={PublicSignIn} options={options} />
            <Stack.Screen name='PublicForgotPassword' component={PublicForgotPassword} options={options} />
            <Stack.Screen name='PublicForgotPasswordOtp' component={PublicForgotPasswordOtp} options={options} />
            <Stack.Screen name='PublicPayment' component={PublicPayment} options={options} />
            <Stack.Screen name='PublicContact' component={PublicContact} options={options} />
            <Stack.Screen name='ScanScreen' component={ScanScreen} options={options} />
            <Stack.Screen name='RestaurantScreen' component={RestaurantScreen} initialParams={{route: route}} options={options} />
            <Stack.Screen name='ActualOrder' component={ActualOrder} options={options} />
            <Stack.Screen name='CustomerProfile' component={CustomerProfile} options={options} />
            <Stack.Screen name='CustomerPayment' component={CustomerPayment} options={options} />
            <Stack.Screen name='CustomerSettings' component={CustomerSettings} options={options} />
            {/* <Stack.Screen name='WaiterMode' component={WaiterMode} options={options} /> */}
            <Stack.Screen name='Orders' component={Orders} options={options} />
            <Stack.Screen name='PublicResetPassword' component={PublicResetPassword} options={options} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default RoutingParent;