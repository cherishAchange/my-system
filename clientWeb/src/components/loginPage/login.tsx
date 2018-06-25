import * as React from 'react';
import './login_style.scss';
import { loginInfo, initProps } from './login_IF';

class Login_Page extends React.Component {
  state: loginInfo
  constructor(props:initProps) {
    super(props);
    this.state = {
      username: '哈哈',
      password: 123456
    };
  }
  render() {
    const { username, password } = this.state;
    return (
      <div className='login-page'>
        <div className='input-login-info'>
          <ul className='layout'>
            <li>
              <label>用户名：</label><input defaultValue={username}/>
            </li>
            <li>
              <label>密码：</label><input defaultValue={password}/>
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