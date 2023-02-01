import {
    USER,
} from '../types/userTypes.js';

let initialState = {
    user: '',
    token: '',
    loading: false,
    hasError: false,
    loggedIn: false,
    actualTable: '',
    actualRestaurant: '',
    restaurants: [],
    actualOrder: '',
    historyOrders:'',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        //Login user
        case USER.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case USER.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
                loggedIn: true,
            };

        case USER.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                hasError: true,
            };
        case USER.LOGOUT:
            return {
                ...state,
                user: '',
                token: '',
                loading: false,
                hasError: false,
                loggedIn: false,
                actualTable: '',
                actualRestaurant: '',
                actualOrder: '',
                historyOrders:'',
            }
        case USER.EXIT:
            return {
                ...state,
                loading: false,
                hasError: false,
                actualTable: '',
                actualRestaurant: '',
                actualOrder: ''
            }

        //Create New User
        case USER.NEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USER.NEW_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
                loggedIn: true,
            };
        case USER.NEW_FAILURE:
            return {
                ...state,
                loading: false,
                hasError: true,
            };
        //Update user details
        case USER.UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USER.UPDATE_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
                loggedIn: true,
            };
        case USER.UPDATE_FAILURE:
            return {
                ...state,
                loading: false,
                hasError: true,
            };

        //Update user password
        case USER.UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USER.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                loading: false,
                loggedIn: true,
            };
        case USER.UPDATE_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                hasError: true,
            };
        
        // Get all restaurants
        case USER.GET_RESTAURANTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER.GET_RESTAURANTS_SUCCESS:
            return {
                ...state,
                restaurants: action.payload.restaurants,
                loading: false
            }
        case USER.GET_RESTAURANTS_FAILURE: 
            return {
                ...state,
                loading: false,
                hasError: true
            }
        
        //Get Actual restaurant
        case USER.GET_ACTUAL_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case USER.GET_ACTUAL_SUCCESS:
            return {
                ...state,
                actualRestaurant: action.payload.restaurant,
                loading: false
            }
        case USER.GET_ACTUAL_FAILURE:
            return {
                ...state,
                loading: false,
                hasError: true
            }
        
        //Table Info
        case USER.GET_TABLE_INFO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER.GET_TABLE_INFO_SUCCESS:
            return {
                ...state,
                actualTable: action.payload,
                loading: false
            }
        case USER.GET_TABLE_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                hasError: true
            }
        
        case USER.CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                actualOrder: action.payload.order
            }
        case USER.CREATE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                hasError: true
            }
        
        //Get History Order
        case USER.GET_OLD_ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER.GET_OLD_ORDERS_SUCCESS:
            return {
                ...state,
                historyOrders: action.payload.historyOrders,
                loading: false
            }
        case USER.GET_OLD_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                hasError: true
            }
            
        default:
            return state;
    }
};

export default userReducer;
