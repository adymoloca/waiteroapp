import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
    bgShadow: {
        width: '100%',
        minHeight: 50,
        backgroundColor:COLOR.light,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderRadius: 10,
        padding: 20,
        marginBottom: 30
    },
    settingsContainer: {
        marginVertical: 20
    },
    settingsDetail: {
        marginTop: 20
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
    },
    formText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color:COLOR.darkGrey,
        marginBottom: 5
    },
    settingsBtn: {
        marginTop: 30

    }
}
