import React, { Component } from 'react';
import "./index.scss"
import CardSelect from '../titCompent/CardSelect/CardSelect';

//let BMap = window.BMap

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {
                city: "",
                lat: 1,
                lng: 1,
                address: "广州"
            }
        }
    }
    render() {
        return (
            <div className="homebox">
                <CardSelect
                    position={this.props.position}
                    getaddress={this.props.getaddress} />
            </div>
        );
    }


    componentDidMount() {

    }



}

export default Home;

