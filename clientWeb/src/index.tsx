import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';
import Login_Page from './components/loginPage/login';
import './index.scss';

ReactDOM.render(
  <Login_Page/>,
  document.getElementById('example')
);