import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/helloPage/Hello';
import Login_Page from './components/loginPage/login';
import './index.scss';
import { Init } from './index';

// require.ensure([], (require:NodeRequire) => {
//   require('./components/helloPage/Hello');
//   require('./components/loginPage/login')
// }, 'app');

// ReactDOM.render(
//   <Login_Page/>,
//   document.getElementById('example')
// );