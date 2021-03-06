import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const store = createStore(
   rootReducer,
   {},
   applyMiddleware(thunk)
)

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>   
, document.getElementById('root'));
registerServiceWorker();
