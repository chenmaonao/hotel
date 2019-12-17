import React, { Component } from 'react';
import './index.scss'

class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="login">
            <img className="auto-img" src="/img/landing.jpg" alt="login" />
            <div className="login-box">
                <input type="text" placeholder="请输入手机号/邮箱地址" />
                <input type="text" placeholder="请输入密码" />
                <button>登录</button>
            </div>
        </div>);
    }
}

export default Mine;