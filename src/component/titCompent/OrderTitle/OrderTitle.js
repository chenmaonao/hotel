import React, { Component } from 'react';
import "./index.scss"

class OrderTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="orderbox">
            <div className="hotelname">{this.props.order.hotelname}</div>
            <div>
                <div className="order-img" style={this.props.order.imageUrls?{backgroundImage: `url('${this.props.order.imageUrls[0]}')`}:false}>
                    
                </div>
                <div className="order-info">
                    <div>1间 {this.props.order.unitName}</div>
                    <div>享住无忧 ✔</div>
                    <div>总价：￥{this.props.order.price}</div>
                </div>
            </div>
        </div>);
    }
}

export default OrderTitle;