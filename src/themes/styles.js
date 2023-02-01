import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {

  /* -- SBD Created -- */
  floating: {
    elevation: 10
  },
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: '#111'
  },
  layoutDouble: {
    flexGrow: 1,
    zIndex: 2,
    elevation: 2,
  },

  
  /* Layout */

  layoutDf: {
    flexGrow: 1,
    backgroundColor:COLOR.light,
  },
  layoutFx: {
    flex: 1,
    justifyContent: 'center'
  },
  layoutInner:{

  },

  // *** Header *** //
  navigation: {
    width: '100%',
    backgroundColor:COLOR.red,
    elevation: 0,
    borderBottomWidth: 0
  },
  navigationTransparent: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0
  },

  /* Header */

  nav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    marginHorizontal: -10,
    backgroundColor: COLOR.red,
  },
  navTransparent: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15,
    backgroundColor: 'transparent'
  },
  navLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navMiddle: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigationRight: {
    flex: 3.5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  navRightIcon: {
    padding: 15
  },
  navMiddleText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  navLeftText:{
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.red,
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  navRight: {
    flex:1.5,
    justifyContent: 'center',
  },
  navRight2:{
    flex:1.5,
    justifyContent: 'center',
    marginLeft:10,
    padding:10,
  },

    /* BreadCrumb */
    breadCrumb: {
      backgroundColor: COLOR.red,
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 20
    },
    breadCrumbTitle: {
      fontFamily: FAMILY.bold,
      fontSize: SIZE.huge,
      color:COLOR.light,
      marginBottom: 5
    },
    breadCrumbDesc: {
      fontFamily: FAMILY.regular,
      fontSize: SIZE.small,
      color: COLOR.light2,
    },

     /* Bg */
  crvBg: {
    width: '100%',
    position: 'absolute',
    zIndex: -1000
  },
  shadowLayout: {
    marginHorizontal: 20
  },
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
    padding: 20
  },


  /* Button */
  btnPrimary: {
    backgroundColor: 'rgba(51,51,51,1)',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnPrimaryText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color:COLOR.light,
  },
  btnPrimaryIcon: {
    color:COLOR.light,
  },
  btnDefault: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: COLOR.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderRadius: 5
  },
  btnDefaultText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color:COLOR.light,
  },
  btnDefaultIcon: {
    color: COLOR.light,
    fontSize: SIZE.huge
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: COLOR.light,
    borderWidth: 2,
    borderColor: COLOR.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderRadius: 5
  },
  btnSecondaryText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color:COLOR.red,
  },
  btnSecondaryIcon: {
    color: COLOR.red,
    fontSize: SIZE.huge
  },

 
  /* Colors */
  dark: {
    color: COLOR.dark
  },

  default: {
    color: COLOR.default
  },
  light: {
    color: COLOR.light
  },
  light2:{
    color: COLOR.light2
  },

  greyDark: {
    color: COLOR.greyDark
  },
  greyLight: {
    color: COLOR.greyLight
  },
  grey: {
    color: COLOR.grey
  },
  grey2: {
    color: COLOR.grey2
  },
  smokeDark: {
    color: COLOR.smokeDark
  },
  darkLight: {
    color: COLOR.darkLight
  },
  smoke: {
    color: COLOR.smoke
  },
  smokeGrey: {
    color: COLOR.smokeGrey
  },
  smokeLight: {
    color: COLOR.smokeLight
  },
  smokeLight2: {
    color: COLOR.smokeLight2
  },
  darkGrey: {
    color: COLOR.darkGrey
  },
  lightGrey: {
    color: COLOR.lightGrey
  },

  red:{
    color: COLOR.red
  },

  bgDark: {
    backgroundColor: COLOR.dark
  },
  bgLight: {
    backgroundColor: COLOR.light
  },

  /* Sizes */
  tiny: {
    fontSize: SIZE.tiny
  },
  extraTiny: {
    fontSize: SIZE.extraTiny
  },
  small: {
    fontSize: SIZE.small
  },
  medium: {
    fontSize: SIZE.medium
  },
  compact: {
    fontSize: SIZE.compact
  },
  large: {
    fontSize: SIZE.large
  },
  huge: {
    fontSize: SIZE.huge
  },
  extraLarge: {
    fontSize: SIZE.extraLarge
  },
  higantic: {
    fontSize: SIZE.higantic
  },
  big: {
    fontSize: SIZE.big
  },
  extraHuge: {
    fontSize: SIZE.extraHuge
  },
  littleLarge: {
    fontSize: SIZE.littleLarge
  },

  regular: {
    fontFamily: FAMILY.regular
  },
  bold: {
    fontFamily: FAMILY.bold
  },

   // *** footer *** //
 
fTab: {
   backgroundColor: '#111',
   borderColor: 'rgba(0,0,0,0.1)',
   borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
},
fIcons: {
    backgroundColor: '#111',
},
iconActive: {
    ...Platform.select({
        ios: {
            color: COLOR.red,
            fontSize: SIZE.huge,
          },
        android: {
            color: COLOR.red,
            fontSize: SIZE.huge,
            alignSelf: 'center'
        },
    }),
},
iconInactive: {
    ...Platform.select({
        ios: {
          fontSize: SIZE.huge,
          color: COLOR.light2
        },
        android: {
            fontSize: SIZE.huge,
            alignSelf: 'center',
            color: COLOR.light2
        },
    }),
},
fTabIcon: {
    ...Platform.select({
        ios: {
            fontSize: SIZE.huge,
            color: COLOR.grey,
            marginHorizontal: 5,
        },
        android: {
            fontSize: SIZE.compact,
            alignSelf: 'center',
            color: COLOR.grey,
            marginHorizontal: 5
        },
    }),
},
textActive: {
  fontSize: SIZE.tiny,
  color: COLOR.red,
    fontFamily:FAMILY.bold,
    paddingTop: 2
},
textInactive: {
  fontSize: SIZE.tiny,
  color: COLOR.light2,
    fontFamily: FAMILY.regular,
    paddingTop: 2
},

}
