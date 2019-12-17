import React, { Component } from 'react';
// import { PositionData, UPDATA_POSITION } from "../../context/position"
import "./index.scss"

const BMap = window.BMap;
// const {position} = useContext(PositionData)

class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    sureAddress(){
        this.props.changePositon(this.mk.getPosition())
        this.props.history.go(-1)
    }

    render() {
        return (
            <div>
                <div className="mapback" onClick={() => { this.props.history.go(-1) }}>

                </div>

                <div id="container">

                </div>

                <button className="sure-point" onClick={this.sureAddress.bind(this)}>
                    确定定位
                </button>

            </div>);
    }
    componentDidMount() {
        let position = this.props.position
        let map = new BMap.Map("container");
        let point = new BMap.Point(position.lng, position.lat);
        map.centerAndZoom(point, 15);
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());


        this.mk = new BMap.Marker(point);
        map.addOverlay(this.mk);
        map.panTo(point);

        this.mk.enableDragging();
        // mk.addEventListener("dragend", function (e) {
        //     alert("当前位置：" + e.point.lng + ", " + e.point.lat);
        // })

        map.addEventListener("click", (e)=>{
            this.mk.setPosition(e.point)
        }
        );
    }
}

export default MapView;