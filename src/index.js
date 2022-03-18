import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style.css';

import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { store } from './Redux/Store';

import Home from './Components/Home'
import Tab1 from './Components/Tab1'
import Tab2 from './Components/Tab2'
import LoginPage from './Components/LoginPage'
import LogoutPage from './Components/LogoutPage'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='tab1' element={<Tab1 />} />
            <Route path='tab2' element={<Tab2 />} />
          </Route>
          <Route path='login' element={<LoginPage />} />
          <Route path='logout' element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
