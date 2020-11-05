import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//REDUX
import { createStore } from 'redux';
import rootReducer from './store/reducers/cartManipulation';
import { Provider } from 'react-redux';

//REDUX PERSIT
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'root',
    storage : storageSession,
}

const persistedReducer = persistReducer(persistConfig, rootReducer); 

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let persistor = persistStore(store);

ReactDOM.render(<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
