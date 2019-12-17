import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import TabBarControl from './component/All/TabBarExample';
import MapView from './component/Map/MapView';
import SelectRoom from './component/SelectRoom/SelectRoom';

const BMap = window.BMap;

class App extends Component {
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


    changePositon = (posi)=>{
        this.setState(()=>({
            position:{
                ...this.state.position,
                ...posi
            } 
        }))
        setTimeout(()=>{
            this.getaddress.call(this)
        },500)
        
    }

    componentDidMount() {

        const BMAP_STATUS_SUCCESS = window.BMAP_STATUS_SUCCESS
        let that = this;
        let geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition(function (r) {

            if (this.getStatus() === BMAP_STATUS_SUCCESS) {
                that.setState(()=>({
                    position: {
                        ...that.state.position,
                        city: r.address.city.replace("市",""),
                        lat: r.latitude,
                        lng: r.longitude
                    }
                }))
            }
            else {

                function myFun(result) {
                    // var cityName = result.name;
                    // map.setCenter(cityName);
                    console.log(result)
                    that.setState({
                        position: {
                            ...that.state.position,
                            city: result.name.replace("市",""),
                            ...result.center
                        }
                    })
                }
                var myCity = new BMap.LocalCity();
                myCity.get(myFun);
            }
        });

    }
    render() {
        return (<div className="App">
            <Router>
                <Route path="/" render={(props) => (<TabBarControl {...props} position={this.state.position} getaddress={this.getaddress.bind(this)} />)} exact />
                <Route path="/map" render={(props) => (<MapView {...props} position={this.state.position} changePositon={this.changePositon}/>)} />
                <Route path="/select" render={(props) => (<SelectRoom {...props} />)} />
               
            </Router>

        </div>);
    }
    getaddress() {
        let that = this;
        let position = this.state.position
        let myGeo = new BMap.Geocoder();
        myGeo.getLocation(new BMap.Point(position.lng, position.lat), function (result) {
            if (result) {
                console.log(result)
                that.setState(()=>({
                    position: {
                        ...that.state.position,
                        address: result.address,
                        city: result.addressComponents.city.replace("市","")
                    }
                }))
            }
        });

    }

}



export default App;
