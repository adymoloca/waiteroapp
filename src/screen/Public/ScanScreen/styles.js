import { FAMILY, SIZE, COLOR } from "../../../themes/typography"

export default {
    scannerContainer:  {
        display: 'flex',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        overflow:"hidden",
        backgroundColor: "transparent",
    },
    topMaskScanner: {
        backgroundColor: '#00000075',
        width: '100%',
        height: '27%',
        position: 'absolute',
        top: 0,
        zIndex: 10
    },
    bottomMaskScanner: {
        backgroundColor: '#00000075',
        width: '100%',
        height: '37%',
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center'

    },
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      barcodeText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    navDesc: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.higantic,
        color:COLOR.light,
        textAlign: 'center',
        elevation: 20,
        top: '20%'
    },
    navDetails: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.huge,
        color:COLOR.light,
        textAlign: 'center',
        elevation: 20,
        paddingHorizontal: 15,
        top: '25%'
      },
}