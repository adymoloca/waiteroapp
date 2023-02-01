export const RESTAURANT_GET_ALL = {
    REQUEST_ALL: "REQUEST_ALL",
    SUCCESS_ALL: "SUCCESS_ALL",
    FAILURE_ALL: "FAILURE_ALL"
};

export const RESTAURANT_GET = {
    REQUEST: "REQUEST",
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE"
}

export const fetchAllRestaurantsRequest = () => {
    return {
        type: RESTAURANT_GET_ALL.REQUEST_ALL
    }
}

export const fetchAllRestaurantsSuccess = (restaurants) => {
    return {
        type: RESTAURANT_GET_ALL.SUCCESS_ALL,
        payload: restaurants
    }
}

export const fetchAllRestaurantsFailure = (error) => {
    return {
        type: RESTAURANT_GET_ALL.FAILURE_ALL,
        payload: error
    }
}

export const fetchRestaurantRequest = () => {
    return {
        type: RESTAURANT_GET.REQUEST
    }
}

export const fetchRestaurantSuccess = (restaurant) => {
    return {
        type: RESTAURANT_GET.SUCCESS,
        payload: restaurant
    }
}

export const fetchRestaurantFailure = (error) => {
    return {
        type: RESTAURANT_GET.FAILURE,
        payload: error
    }
}