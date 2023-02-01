import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar, View, TouchableOpacity } from 'react-native'
import { Header as HeaderNB, Icon, Text } from 'native-base'

import theme from '@theme/styles'
import { openDrawer, back, navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: ''
    }

    this.renderStatusBar = this.renderStatusBar.bind(this)
    this.renderNavLeft = this.renderNavLeft.bind(this)
    this.renderNavMiddle = this.renderNavMiddle.bind(this)
    this.renderNavRight = this.renderNavRight.bind(this)
  }

  renderStatusBar () {
    if (this.props.showStatusBar) {
      if (this.props.statusBarType === 'light') {
        return <StatusBar backgroundColor='rgba(255, 90, 95, 1)' barStyle='light-content' />
      } else if (this.props.statusBarType === 'dark') {
        return <StatusBar backgroundColor='rgba(255, 90, 95, 1)' barStyle='dark-content' />
      }
    }

    return null
  }

  renderNavLeft () {
    if (!this.props.showNavLeft) {
      return null
    }

    let icon
    if (this.props.navLeftContent) {
      icon = this.props.navLeftContent
    } else if (this.props.navLeftType === 'back') {
      icon = <TouchableOpacity onPress={back}>
        <Icon name='arrow-left' type='Feather' style={[theme.huge, theme.light]} />
      </TouchableOpacity>
    } else if (this.props.navLeftType === 'menu') {
      icon = <TouchableOpacity onPress={openDrawer}>
        <Icon name='menu' type='Entypo' style={[theme.huge, theme.light]} />
      </TouchableOpacity>
    } else if (this.props.navLeftType === 'close') {
      icon = <TouchableOpacity onPress={back}>
        <Icon name='close' type='MaterialIcons' style={[theme.huge, theme.light]} />
      </TouchableOpacity>
    } 

    return (
      <View style={this.props.navLeftStyle}>
        {icon}
      </View>
    )
  }

  renderNavMiddle () {
    if (!this.props.showNavMiddle) {
      return null
    }

    const titleStyle = []
    if (this.props.navMiddleType === 'tiny') {
      titleStyle.push(theme.tiny)
    } else if (this.props.navMiddleType === 'small') {
      titleStyle.push(theme.small)
    } else if (this.props.navMiddleType === 'medium') {
      titleStyle.push(theme.medium)
    } else if (this.props.navMiddleType === 'large') {
      titleStyle.push(theme.large)
    } else if (this.props.navMiddleType === 'huge') {
      titleStyle.push(theme.huge)
    }

    if (this.props.theme === 'light') {
      titleStyle.push(theme.light)
    } else if (this.props.theme === 'dark') {
      titleStyle.push(theme.dark)
    }

    if (this.props.navTextColor) {
      titleStyle.push({
        color: this.props.navTextColor
      })
    }

    if (this.props.navTextWeight) {
      titleStyle.push({
        weight: this.props.navTextWeight.fontFamily
      })
    }

    return (
      <View style={this.props.navMiddleStyle}>
        {
          this.props.navMiddleContent
            ? this.props.navMiddleContent
            : <Text style={theme.navMiddleText}>{this.props.title}</Text>
        }
      </View>
    )
  }

  renderNavRight () {
    if (!this.props.showNavRight) {
      return null
    }

    let icon
    if (this.props.navRightContent) {
      icon = this.props.navRightContent
    } else if (this.props.navRightType === 'edit') {
      icon = <View style={theme.navRight}>
        <TouchableOpacity style={theme.saveBtn} onPress={() => { navigate('PublicProfile') }}>
          <Text style={theme.navLeftText}>{__('Done')}</Text>
        </TouchableOpacity>
      </View>
    } 
    else if (this.props.navRightType === 'next') {
      icon = <View style={theme.navRight}>
        <TouchableOpacity style={theme.saveBtn} onPress={() => { navigate('') }}>
          <Text style={theme.navLeftText}>{__('Next')}</Text>
        </TouchableOpacity>
      </View>
    }  else if (this.props.navRightType === 'edit2') {
      icon = <View >
        <TouchableOpacity style={theme.navRight2} onPress={() => { navigate('PublicEditProfile') }}>
           <Icon name='dots-three-vertical' type="Entypo" style={[theme.littleLarge, theme.light]}  />
        </TouchableOpacity>
      </View>
    } else if (this.props.navRightType === 'ride') {
      icon = <View >
        <TouchableOpacity style={theme.navRight2} onPress={() => { navigate('PublicLiveBroadCast') }}>
           <Icon name='dots-three-vertical' type="Entypo" style={[theme.littleLarge, theme.light]}  />
        </TouchableOpacity>
      </View>
    } else if (this.props.navRightType === 'ride2') {
      icon = <View >
        <TouchableOpacity style={theme.navRight2} onPress={() => { navigate('PublicRiderFollow') }}>
           <Icon name='dots-three-vertical' type="Entypo" style={[theme.littleLarge, theme.light]}  />
        </TouchableOpacity>
      </View>
    } 
    return (
      <View style={this.props.navRightStyle}>
        {icon}
      </View>
    )
  }

  render () {
    let headerStyle
    if (this.props.theme === 'light') {
      headerStyle = theme.headerLight
    } else if (this.props.theme === 'dark') {
      headerStyle = theme.headerDark
    } else {
      headerStyle = theme.headerTransparent
    }

    return (
      <HeaderNB style={headerStyle}>
        {this.renderStatusBar()}
        <View style={this.props.navStyle}>
          {this.renderNavLeft()}
          {this.renderNavMiddle()}
          {this.renderNavRight()}
        </View>
      </HeaderNB>
    )
  }
}

Header.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),

  showStatusBar: PropTypes.bool,
  statusBarType: PropTypes.oneOf(['light', 'dark']),

  navStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),

  showNavLeft: PropTypes.bool,
  navLeftStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  navLeftType: PropTypes.oneOf(['home', 'back']),
  navLeftContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),

  showNavMiddle: PropTypes.bool,
  navMiddleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  navMiddleType: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  title: PropTypes.string,
  navMiddleContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),
  navTextColor: PropTypes.string,
  navTextWeight: PropTypes.string,

  showNavRight: PropTypes.bool,
  navRightStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  navRightType: PropTypes.oneOf(['share']),
  navRightContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ])

}

Header.defaultProps = {
  theme: 'light',

  showStatusBar: true,
  statusBarType: 'light',
  navStyle: theme.nav,

  showNavLeft: true,
  navLeftStyle: theme.navLeft,
  navLeftType: 'back',
  navLeftContent: null,

  showNavMiddle: true,
  navMiddleStyle: theme.navMiddle,
  navMiddleType: 'small',
  title: '',
  navMiddleContent: null,
  navTextColor: null,
  navTextWeight: theme.bold.fontFamily,

  showNavRight: true,
  navRightStyle: theme.navRight,
  navRightContent: null
}

export default Header
