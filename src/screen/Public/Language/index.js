import React from 'react'
import { } from 'react-native'
import { Container, Content, Text, View } from 'native-base'
import RNRestart from 'react-native-restart'

import styles from './styles'
import Header from '@component/Header'
import Footer from '@component/Footer'
import theme from '@theme/styles'
import Languages from '@config/language'
import { setLocale, __ } from '@utility/translation'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      language: ''
    }

    this.changeLanguage = this.changeLanguage.bind(this)
  }

  async componentDidMount () {
    const language = 'en'
    this.setState({
      language
    })
  }

  async changeLanguage (code) {
    if (this.state.language !== code) {
      const l = Languages.find(item => (item.code === code))
      if (l) {
        setLocale(code, l.direction)
        RNRestart.Restart()
      }
    }
  }

  render () {
    return (
      <Container style={theme.layoutDf}>
        <Header statusBarType='dark' navLeftType='back' title={__('Language')} />
        <Content contentContainerStyle={theme.layout}>

          <View style={styles.langContainer}>
            <Text style={styles.langLabel}>{__('Languages')}</Text>
            <View style={styles.langPicker}>
            </View>
          </View>

        </Content>
      </Container>
    )
  }
}
