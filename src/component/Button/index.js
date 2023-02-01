import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View, Icon } from 'native-base'
import PropTypes from 'prop-types'

import theme from '@theme/styles'

const classes = {
  primary: {
    button: theme.btnPrimary,
    content: theme.btnPrimaryText,
    icon: theme.btnPrimaryIcon
  },
  default: {
    button: theme.btnDefault,
    content: theme.btnDefaultText,
    icon: theme.btnDefaultIcon
  },
  secondary: {
    button: theme.btnSecondary,
    content: theme.btnSecondaryText,
    icon: theme.btnSecondaryIcon
  }
}

class Button extends React.Component {
  render () {
    return <TouchableOpacity style={classes[this.props.type].button} onPress={this.props.onPress}>
      <Text style={classes[this.props.type].content}>{this.props.content}</Text>
      {
        this.props.icon
          ? <Icon name={this.props.icon.name} type={this.props.icon.type} style={classes[this.props.type].icon} />
          : null
      }
    </TouchableOpacity>
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'secondary']),
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }),
  onPress: PropTypes.func
}

Button.defaultProps = {
  type: 'primary',
  onPress: () => {}
}

export default Button
