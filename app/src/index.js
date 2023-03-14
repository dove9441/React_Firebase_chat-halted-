import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//redux 사용을 위한 import 
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";

//합친 Reducer import
import Reducer from "./redux/reducers"; //이름 안 써도 알아서 가져옴
// react-bootstrap import 
import 'bootstrap/dist/css/bootstrap.min.css';


const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Provider store={createStoreWithMiddleWare(Reducer,
	//크롬 extention 사용하기 위해서
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__)}>
		    <App />
		</Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
