import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
    otpContent: {
        marginVertical: 15
    },
    formRow: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 30,
        justifyContent: 'space-between'
      },
      formInput: {
        flex: 1,
        textAlign:'center',
        fontFamily: FAMILY.regular,
        fontSize: SIZE.huge,
          color: COLOR.darkLight,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: COLOR.smokeLight2,
        borderRadius: 5
      },
    verifyBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.red,
        padding: 15,
        borderRadius: 5
    },
    verifyBtnText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light,
    },
    otpInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    codeText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color:  COLOR.grey,
        alignSelf: 'center'
    },
    signUpText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.darkLight,
        marginLeft: 5
    },
}