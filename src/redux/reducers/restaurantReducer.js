import { RESTAURANT_GET_ALL, RESTAURANT_GET } from '../types/restaurantTypes.js';

let initialState = {
    restaurants: [],
    actualRestaurant: '',
    error: '',
    loading: false,
    hasError: false,
}

const restaurantReducer = (state = initialState, action) => {

    switch (action.type) {

    //GET ALL
    case RESTAURANT_GET_ALL.REQUEST_ALL:
        return {
            ...state,
            loading: true,
        }
    case RESTAURANT_GET_ALL.SUCCESS_ALL:
        return {
            ...state,
            restaurants: action.payload.restaurants,
            loading: false,
        }
    case RESTAURANT_GET_ALL.FAILURE_ALL:
        return{
            ...state,
            loading: false,
            error: action.payload,
            hasError: true
        }
   
    //GET ONE
    case RESTAURANT_GET.REQUEST:
        return {
            ...state,
            loading: true,
            }
    case RESTAURANT_GET.SUCCESS:
        return{
            ...state,
            actualRestaurant: action.payload.restaurant,
            loading: false,
        }
    case RESTAURANT_GET.FAILURE:
        return{
            ...state,
            error: action.payload,
            loading: false,
            hasError: true
        }
    default: 
        return state
    }
}

export default restaurantReducer;