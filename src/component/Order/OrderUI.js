import React, { Component } from 'react';
import { NavBar } from 'antd-mobile'
import OrderTitle from '../titCompent/OrderTitle/OrderTitle';
import "./index.scss"

class OrderUI extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <NavBar
                mode="dark"
                style={{ backgroundColor: '#fb9829' }}
            ></NavBar>
            <div className="order-title-list">
                {this.props.orderlist.map((item, index) => (
                    <OrderTitle order={item} key={index} />
                ))}
            </div>

        </div>);
    }
}

export default OrderUI;