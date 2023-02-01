import { SIZE, COLOR, FAMILY } from '../../../themes/typography';

export default {
    bookingContainer: {
        paddingHorizontal: 20,
        marginTop: 30
    },
    payBtn: {
        margin: 20
    },
    accordionHeader: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLOR.lightGrey,
        padding: 15
    },
    accordionHeaderText: {
        fontSize: SIZE.large,
        fontFamily: FAMILY.bold
    },
    accordionDetails: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    DetailsItemHeader: {
        fontSize: SIZE.compact,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 3
    },
    NameColumnDt: {
        alignItems: 'flex-start',
        width: "70%"
    },
    QuantityColumnDt: {
        alignItems: 'flex-end',
        width: "7%"
    },
    PriceColumnDt: {
        alignItems: 'flex-end',
        width: "23%"
    },
    extraPlateContainer: {
        paddingHorizontal: 5,
        flexDirection: 'row'
    },
    extraText: {
        color: COLOR.greyLight
    },
    flexEnd: {
        alignItems: 'flex-end'
    },
    checkoutColumn: {
        alignItems: 'flex-end',
        width:'37%'
    },
    buttonColumn: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
        backgroundColor: COLOR.red,
        paddingHorizontal: '2%',
        paddingVertical: '1%',
        marginTop: '3%',
        borderRadius: 5
    },
    alignCenter: {
        width: '100%',
        alignItems: 'center'
    },
    titleText: {
        fontSize: SIZE.large,
        width: '100%',
        textAlign: 'center'
    },
    addProductsButtonText: {
        fontSize: SIZE.small,
        color: COLOR.light
    },
    menuItenDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.grey,
      },



}