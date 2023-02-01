import * as React from 'react'
import { CommonActions, DrawerActions, StackActions, createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

const drawerScreens = ['MemberHome']
const resetScreens = ['PublicHome']

export const navigate = (routeName, params = []) => {
  if (navigationRef.isReady()){
    // if (resetScreens.includes(routeName)) {
    //   navigateReset(routeName, params)
    //   return
    // }

    let args = []
    if (drawerScreens.includes(routeName)) {
      args = ['Drawer', { screen: routeName, params }]
    } else {
      args = [routeName, params]
    }
    let action = StackActions.push(...args)
    navigationRef.dispatch(action)
  }
}

export const navigateReset = (routeName, params = []) => {
  if (navigationRef.isReady()){
  let args = []
  if (drawerScreens.includes(routeName)) {
    args = [{ name: 'Drawer', params }]
  } else {
    args = [{ name: routeName, params }]
  }
  navigationRef.dispatch(state => {
    // Remove the home route from the stack
    // const routes = state.routes.filter(r => r.name !== 'Home');
  
    return CommonActions.reset({
      routes: args,
      index: 1,
    });
  });
}
}

export const openDrawer = () => {
  if (navigationRef.isReady())
  navigationRef.dispatch(DrawerActions.openDrawer())
}
export const closeDrawer = () => {
  if (navigationRef.isReady())
  navigationRef.dispatch(DrawerActions.closeDrawer())
}

export const back = () => {
  if (navigationRef.isReady())
  navigationRef.dispatch(CommonActions.goBack())
}
