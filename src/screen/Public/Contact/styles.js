import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
    contactDetail: {
        marginTop: 20
    },
    formText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color:COLOR.darkGrey,
        marginBottom: 5
    },
    formRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.smoke,
        padding: 15,
        borderRadius: 5,
    },
    formInput: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.darkLight,
        flex: 1,
        padding: 10
    },
    formMsg: {
        alignSelf: 'flex-start'
    },
    contactBtn: {
        marginVertical: 20
    },
    contactInfo:{
        marginHorizontal:20,
        marginVertical:40
    },
    smnTitle: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.grey,   
    },
    iconInfo: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    smnBtnHalf: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(59, 89, 153, 1)',
        borderRadius: 5,
        padding: 10,
        marginRight: 15
    },
    smnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color:COLOR.light,
        paddingLeft: 10
    },
    smnBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(29, 161, 242, 1)',
        borderRadius: 5,
        padding: 10
    },
      /*--Modal--*/
      mNewBox: {
        width: '95%',
        height: '55%',
        borderWidth: 1,
        borderColor: COLOR.smoke,
        borderRadius: 5
    },
    closeIcon: {
        alignSelf: 'flex-end',
        paddingRight: 20,
        paddingVertical: 15
    },
    orderCheck: {
        marginVertical: 20
    },
    deliveryImg: {
        width: 90,
        height: 90,
        alignSelf:'center'
    }, 
    confirmThank: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.compact,
        color: COLOR.darkLight,
        textAlign: 'center',
        marginVertical: 10
    },
    confirmDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.greyLight,
        textAlign: 'center',
        marginBottom: 30,
        lineHeight:16,
        marginHorizontal:20
    },

}
