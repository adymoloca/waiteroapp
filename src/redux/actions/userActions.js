import axios from 'axios';
import { data } from '../baseUrl';
import { fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure, createNewUserRequest, createNewUserSuccess, createNewUserFailure, updateUsersRequest, updateUsersSuccess, updateUsersFailure, updatePasswordRequest, updatePasswordSuccess, updatePasswordFailure, fetchAllRestaurantsRequest, fetchAllRestaurantsSuccess, fetchAllRestaurantsFailure, fetchRestaurantFailure, fetchRestaurantRequest, fetchRestaurantSuccess, getTableInfoRequest, getTableInfoSuccess, getTableInfoFailure, createOrderRequest, createOrderSuccess, createOrderFailure, getHistoryOrderRequest, getHistoryOrderSuccess, getHistoryOrderFailure, logoutSuccess, exitSucces } from '../types/userTypes.js';

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(fetchLoginRequest());
    axios
      .post(`${data.baseUrl}/login`, { email: email, password: password })
      .then((response) => {
        const data = response.data;
        dispatch(fetchLoginSuccess(data));
      })
      .catch((error) => {
        console.log(error)
        dispatch(fetchLoginFailure());
        alert('Eroare - Ceva nu a functionat corect!');
      })
  }
};

export const updateUserDetails = (token, userId, name = null, email = null, phone = null) => {
  return async (dispatch) => {
    dispatch(updateUsersRequest());
    axios
      .patch(`${data.baseUrl}/${userId}/update-user`,{
        name: name,
        email: email,
        phone: phone
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        dispatch(updateUsersSuccess(response.data));
        // console.log('USER UPDATE CORRECTLY')
      })
      .catch((error) => {
        dispatch(updateUsersFailure());
        console.log('ERROR IN UPDATE USER', error);
        alert('Eroare - Ceva nu a functionat corect!');
      });
  };
};

export const getRestaurant = (restaurantId) => {
  return async (dispatch) => {
    dispatch(fetchRestaurantRequest());
    axios
      .get(`${data.baseUrl}/restaurant/${restaurantId}/get-restaurant-for-users`)
      .then((response) => {
        const data = response.data;
        // console.log(data)
        dispatch(fetchRestaurantSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchRestaurantFailure());
        alert('Eroare - Ceva nu a functionat corect!');
      });
  };
};

export const getAllRestaurants = () => {
  return async (dispatch) => {
    dispatch(fetchAllRestaurantsRequest());
    axios
      .get(`${data.baseUrl}/get-restaurants`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchAllRestaurantsSuccess(data));
        // console.log('ALL RESTAURANTS LOADED')
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchAllRestaurantsFailure());
        alert('Eroare - Ceva nu a functionat corect!');
      });
  };
};

export const updateUserPassword = (token, userId, oldPassword, newPassword) => {
  return async (dispatch) => {
    dispatch(updatePasswordRequest());
    axios
      .patch(`${data.baseUrl}/${userId}/update-user-password`, {
        oldPassword: oldPassword,
        newPassword: newPassword,
      },
      {
          headers: {
            Authorization: `Bearer ${token}`
          }
      })
        .then((response) => {
          const user = response.data;
        dispatch(updatePasswordSuccess(user));
      })
      .catch((error) => {
        console.log(error);
        dispatch(updatePasswordFailure());
        alert('Eroare - Ceva nu a functionat corect!');
      });
  }
};

export const createUser = (name, email, password, phone) => {
  return async (dispatch) => {
    dispatch(createNewUserRequest());
    axios
      .post(`${data.baseUrl}/register`, {
          name: name,
          email: email,
          phone: phone,
          password: password
      })
      .then((response) => {
        const data = response.data;
        dispatch(createNewUserSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(createNewUserFailure());
        alert('Eroare - Ceva nu a functionat corect!');
      })
  }
};

export const getTableInfo = (userId, token, clientId, restaurantId, tableNumber) => {
  return async (dispatch) => {
    dispatch(getTableInfoRequest());
    axios.patch(`${data.baseUrl}/${userId}/client/${clientId}/restaurant/${restaurantId}/table/${tableNumber}/update-actual-table`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        const data = response.data;
        // console.log('RESPONSE', data)
        dispatch(getTableInfoSuccess(data));
      })
      .catch(err => {
        console.log(err);
        dispatch(getTableInfoFailure());
        alert('Eroare - Ceva nu a functionat corect!');
    })
  }
}

export const createOrder = (userId, token, clientId, restaurantId, tableNumber, cartCheckout) => {
  return async (dispatch) => {
    dispatch(createOrderRequest());
    axios.post(`${data.baseUrl}/${userId}/client/${clientId}/restaurant/${restaurantId}/add-user-order`, {
      tableNumber: tableNumber,
      myCart: {
        plates: cartCheckout.plates,
        drinks: cartCheckout.drinks,
        extras: cartCheckout.extras
      }
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        const data = response.data;
        alert('Comanda primita! Va servim imediat!')
        dispatch(createOrderSuccess(data));
      })
      .catch(err => {
        console.log(err);
        console.log("error...");
        alert('Eroare - Ceva nu a functionat corect!');
        dispatch(createOrderFailure());
    })
  }
}

export const userLogout = (userId, token) => {
  return async (dispatch) => {
    axios.patch(`${data.baseUrl}/${userId}/user-logout`, {
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => { 
        dispatch(logoutSuccess());
      })
      .catch(err => {
        console.log(err);
        alert('Eroare - Ceva nu a functionat corect!');
    })
  }
}

export const userExit = () => {
  return async (dispatch) => {
    try {
      dispatch(exitSucces());
    }catch(err) {
      console.log(err);
      alert('Eroare - Ceva nu a functionat corect!');
    }
  }
}