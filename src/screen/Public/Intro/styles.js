import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  imgBg: {
    height: 400    
  },
  introImage: {
    width: '100%',
    height: 400
  },
  introContainer: {
    flex: 1,
    backgroundColor: COLOR.red,
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  introTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color:COLOR.light,
    marginVertical: 10
  },
  introText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.extraLarge,
    color:COLOR.light,
  },
  introIcon: {
    paddingVertical: 20
  }
}
