import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  signUpRow: {
    marginVertical: 15
  },
  formText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:  COLOR.grey,
    marginBottom: 5
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.smokeLight,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  formInput: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.darkLight,
    padding:10,
  },
  accountBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:COLOR.red,
    padding: 15,
    borderRadius: 5
  },

  accountBtnDisabled: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:COLOR.grey,
    padding: 15,
    borderRadius: 5
  },

  accountBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
  },
  smnInfo: {
    marginTop: 40,
    marginBottom: 20
  },
  smnTitle: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey2,
    alignSelf: 'center',
    marginTop: 10
  },
  smnDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  smnBtn:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  fbBtn: {
    backgroundColor: 'rgba(59, 89, 153, 1)',
  },
  twitterBtn: {
    backgroundColor: 'rgba(0, 172, 238, 1)',
    marginLeft: 10
  },
  smnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:COLOR.light,
    paddingLeft:10
  },
  signupText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color:  COLOR.grey,
    alignSelf: 'center',
    marginTop: 20
  }
}
