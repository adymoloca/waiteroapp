import React from 'react'
import { Text } from 'react-native'
import { View } from 'native-base'

import theme from '@theme/styles'

class BreadCrumb extends React.Component {    
    render() {
        return <View style={theme.breadCrumb}>
            <Text style={theme.breadCrumbTitle}>{this.props.content}</Text>
            <Text style={theme.breadCrumbDesc}>{this.props.desc}</Text>
        </View>
    }
}
export default BreadCrumb