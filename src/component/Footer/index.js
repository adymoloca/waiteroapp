// import React from 'react'
// import { TouchableOpacity, Text } from 'react-native'
// import { Icon, View } from 'native-base'

// import { navigate } from '@utility/navigation'
// import { __ } from '@utility/translation'

// import theme from '@theme/styles'

// export default class extends React.Component {
//   render () {
//     return (
    
//       <View style={theme.fTab}>
//         <TouchableOpacity style={this.props.currentScreen === 'Home' ? theme.fIcons : theme.fIcons} onPress={() => { navigate('PublicHome') }}>
//           <Icon name="home" type="Octicons" style={this.props.currentScreen === 'Home' ? theme.iconActive : theme.iconInactive} />
//           <Text style={this.props.currentScreen === 'Home' ? theme.textActive : theme.textInactive}>{__('Home')}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={this.props.currentScreen === 'Stream' ? theme.fIcons : theme.fIcons} onPress={() => { navigate('PublicStream') }}>
//           <Icon name='live-tv' type='MaterialIcons' style={this.props.currentScreen === 'Stream' ? theme.iconActive : theme.iconInactive} />
//           <Text style={this.props.currentScreen === 'Stream' ? theme.textActive : theme.textInactive}>{__('Stream')}s</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={this.props.currentScreen === 'Messages' ? theme.fIcons : theme.fIcons} onPress={() => { navigate('PublicMessages') }}>
//           <Icon name="chat-bubble-outline" type="MaterialIcons" style={this.props.currentScreen === 'Messages' ? theme.iconActive : theme.iconInactive} />
//           <Text style={this.props.currentScreen === 'Messages' ? theme.textActive : theme.textInactive}>{__('Messages')}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={this.props.currentScreen === 'Notifications' ? theme.fIcons : theme.fIcons} onPress={() => { navigate('PublicNotification') }}>
//           <Icon name="notification" type="Entypo" style={this.props.currentScreen === 'Notifications' ? theme.iconActive : theme.iconInactive} />
//           <Text style={this.props.currentScreen === 'Notifications' ? theme.textActive : theme.textInactive}>{__('Comments')}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={this.props.currentScreen === 'Profiles' ? theme.fIcons : theme.fIcons} onPress={() => { navigate('PublicProfile') }}>
//           <Icon name="user-circle-o" type="FontAwesome" style={this.props.currentScreen === 'Profiles' ? theme.iconActive : theme.iconInactive} />
//           <Text style={this.props.currentScreen === 'Profiles' ? theme.textActive : theme.textInactive}>{__('Profiles')}</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }
