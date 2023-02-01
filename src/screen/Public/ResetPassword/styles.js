import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
    resetDetail: {
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
        paddingHorizontal: 10,
    },
    formInput: {
        flex: 1,
        fontFamily: FAMILY.regular,
        fontSize: SIZE.compact,
        color: COLOR.darkLight,
        padding: 10,
    },
    resetBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:COLOR.red,
        padding: 15,
        borderRadius: 5
    },
    resetBtnText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light,
    },
    forgotText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color:  COLOR.grey,
        alignSelf: 'flex-end'
    },
    resetInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    accountText: {
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
    /*--Modal--*/
    mNewBox: {
        width: '95%',
        height: '60%',
        borderWidth: 1,
        borderColor: COLOR.smoke,
        borderRadius: 5
    },
    orderCheck: {
        marginVertical: 30
    },
    deliveryImg: {
        width: 90,
        height: 90,
        alignSelf:'center'
    },
    confirmThank: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.compact,
        color: COLOR.greyDark,
        textAlign: 'center',
        marginVertical: 10
    },
    confirmText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.greyLight,
        textAlign: 'center',
        marginBottom: 10,
        lineHeight:16,
        marginHorizontal:20
    },
    confirmBtn:{
        margin:20,
    }
}

