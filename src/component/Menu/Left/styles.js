import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  nav: {
    flex: 1,
    width: '100%'
  },
  /* Profile */
  navProfile: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 90, 95, 1)',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  navCol: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  navAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  navName: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(255,255,255,1)',
    marginBottom: 5
  },
  navDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 5
  },
  /* Menu Item */
  navMenu: {
    flex: 1,
    backgroundColor: 'rgba(255, 90, 95, 1)',
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 5,
    justifyContent: 'center'
  },
  navHeader: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'rgba(255,255,255,1)',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
    paddingTop: 20
  },
  navBtn: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'row'
  },
  navBtnLeft: {
    width: 30,
    alignItems: 'center',
    marginRight: 20
  },
  navBtnIcon: {
    fontSize: 24,
    color: 'rgba(255,255,255,1)',
  },
  navBtnText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,1)',
  }
}
