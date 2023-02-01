import React from 'react'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store.js';
import RoutingParent from './Routing.js';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <RoutingParent />
      </PersistGate>
    </Provider>
    )
}

export default App;