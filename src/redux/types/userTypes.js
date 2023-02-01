export const USER = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT',
    EXIT: 'EXIT',
    NEW_REQUEST: 'NEW_REQUEST',
    NEW_SUCCESS: 'NEW_SUCCESS',
    NEW_FAILURE: 'NEW_FAILURE',
    UPDATE_REQUEST: 'UPDATE_REQUEST',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS',
    UPDATE_FAILURE: 'UPDATE_FAILURE',
    UPDATE_PASSWORD_REQUEST: 'UPDATE_PASSWORD_REQUEST',
    UPDATE_PASSWORD_SUCCESS: 'UPDATE_PASSWORD_SUCCESS',
    UPDATE_PASSWORD_FAILURE: 'UPDATE_PASSWORD_FAILURE',
    GET_RESTAURANTS_REQUEST: 'GET_RESTAURANTS_REQUEST',
    GET_RESTAURANTS_SUCCESS: 'GET_RESTAURANTS_SUCCESS',
    GET_RESTAURANTS_FAILURE: 'GET_RESTAURANTS_FAILURE',
    GET_ACTUAL_REQUEST: 'GET_ACTUAL_REQUEST',
    GET_ACTUAL_SUCCESS: 'GET_ACTUAL_SUCCESS',
    GET_ACTUAL_FAILURE: 'GET_ACTUAL_FAILURE',
    CREATE_ORDER_REQUEST: 'CREATE_ORDER_REQUEST',
    CREATE_ORDER_SUCCESS: 'CREATE_ORDER_SUCCESS',
    CREATE_ORDER_FAILURE: 'CREATE_ORDER_FAILURE',
    GET_TABLE_INFO_REQUEST: 'GET_TABLE_INFO_REQUEST',
    GET_TABLE_INFO_SUCCESS: 'GET_TABLE_INFO_SUCCESS',
    GET_TABLE_INFO_FAILURE: 'GET_TABLE_INFO_FAILURE',
    GET_OLD_ORDERS_REQUEST: 'GET_OLD_ORDERS_REQUEST',
    GET_OLD_ORDERS_SUCCESS: 'GET_OLD_ORDERS_SUCCESS',
    GET_OLD_ORDERS_FAILURE: 'GET_OLD_ORDERS_FAILURE'
}

// User Login functions
export const fetchLoginRequest = () => {
    return {
        type: USER.LOGIN_REQUEST,
    }
}

export const fetchLoginSuccess = user => {
    return {
        type: USER.LOGIN_SUCCESS,
        payload: user
    }
}

export const fetchLoginFailure = () => {
    return {
        type: USER.LOGIN_FAILURE,
    }
}

// User create new User functions
export const createNewUserRequest = () => {
    return {
        type: USER.NEW_REQUEST,
    }
}

export const createNewUserSuccess = (user) => {
    return {

        type: USER.NEW_SUCCESS,
        payload: user
    }
}

export const createNewUserFailure = () => {
    return {
        type: USER.NEW_FAILURE,
    }
}

// Update User details
export const updateUsersRequest = () => {
    return {
        type: USER.UPDATE_REQUEST,
    }
}

export const updateUsersSuccess = user => {
    return {

        type: USER.UPDATE_SUCCESS,
        payload: user
    }
}

export const updateUsersFailure = () => {
    return {
        type: USER.UPDATE_FAILURE,
    }
}

// Update User password
export const updatePasswordRequest = () => {
    return {

        type: USER.UPDATE_PASSWORD_REQUEST,
    }
}

export const updatePasswordSuccess = user => {
    return {
        type: USER.UPDATE_PASSWORD_SUCCESS,
        payload: user
    }
}

export const updatePasswordFailure = () => {
    return {
        type: USER.UPDATE_PASSWORD_FAILURE,
    }
};

export const fetchAllRestaurantsRequest = () => {
    return {
        type: USER.GET_RESTAURANTS_REQUEST
    }
}

export const fetchAllRestaurantsSuccess = (restaurants) => {
    return {
        type: USER.GET_RESTAURANTS_SUCCESS,
        payload: restaurants
    }
}

export const fetchAllRestaurantsFailure = () => {
    return {
        type: USER.GET_RESTAURANTS_FAILURE
    }
}

export const fetchRestaurantRequest = () => {
    return {
        type: USER.GET_ACTUAL_REQUEST
    }
}

export const fetchRestaurantSuccess = (restaurant) => {
    return {
        type: USER.GET_ACTUAL_SUCCESS,
        payload: restaurant
    }
}

export const fetchRestaurantFailure = () => {
    return {
        type: USER.GET_ACTUAL_FAILURE,
    }
}

export const getTableInfoRequest = () => {
    return {
        type: USER.GET_TABLE_INFO_REQUEST,
    }
}

export const getTableInfoSuccess = (response) => {
    return {
        type: USER.GET_TABLE_INFO_SUCCESS,
        payload: response?.actualTable
    }
}

export const getTableInfoFailure = () => {
    return {
        type: USER.GET_TABLE_INFO_FAILURE,
    }
}

export const createOrderRequest = () => {
    return {
        type: USER.CREATE_ORDER_REQUEST,
    }
}

export const createOrderSuccess = (order) => {
    return {
        type: USER.CREATE_ORDER_SUCCESS,
        payload: order
    }
}

export const createOrderFailure = () => {
    return {
        type: USER.CREATE_ORDER_FAILURE,
    }
}


export const getHistoryOrderRequest = () => {
    return {
        type: USER.GET_OLD_ORDERS_REQUEST,
    }
}

export const getHistoryOrderSuccess = (orders) => {
    return {
        type: USER.GET_OLD_ORDERS_SUCCESS,
        payload: orders
    }
}

export const getHistoryOrderFailure = () => {
    return {
        type: USER.GET_OLD_ORDERS_FAILURE,
    }
}

export const logoutSuccess = () => {
    return {
        type: USER.LOGOUT
    }
}

export const exitSucces = () => {
    return {
        type: USER.EXIT
    }
}