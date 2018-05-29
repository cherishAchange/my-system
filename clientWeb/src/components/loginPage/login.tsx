import * as React from 'react';
import './login.scss';

class Login_Page extends React.Component {

  render() {
    return (
      <div className='login-page'>
        <div className='input-login-info'>
          <ul className='layout'>
            <li>
              <label>用户名：</label><input/>
            </li>
            <li>
              <label>密码：</label><input/>
            </li>
            <li>
              <div>登录</div>
              <div>重置</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Login_Page;