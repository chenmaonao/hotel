import React, { Component } from 'react';
import { Calendar, Picker, Button} from "antd-mobile";
import { withRouter } from "react-router-dom"
import "./index.scss"

//初始化日期表
const extra = {
    '2017/07/15': { info: 'Disable', disable: true },
};
const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };


//酒店星级选择数据
const hotelLevel = [{
    label: "请选择酒店星级",
    value: ""
}, {
    label: "五星级/豪华",
    value: "五星级/豪华"
}, {
    label: "四星级/高档",
    value: "四星级/高档"
}, {
    label: "三星级/舒适",
    value: "三星级/舒适"
}, {
    label: "二星级/舒适",
    value: "二星级/舒适"
}, {
    label: "客栈/公寓",
    value: "客栈/公寓"
}, {
    label: "其他",
    value: "其他"
}]
//酒店距离数据列表
const distanceList = [{
    label: "请选择酒店距离",
    value: ""
}, {
    label: "1km",
    value: "1km"
}, {
    label: "3km",
    value: "3km"
}, {
    label: "5km",
    value: "5km"
}, {
    label: "10km",
    value: "10km"
}]



class CardSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataShow: false,
            startTime: new Date(),
            endTime: new Date(),
            levelValue: [""],
            distance: [""],
            hotelname: ""

        }
    }

    componentDidMount() {
        //Tue Nov 12 2019 00:00:00 GMT+0800 (中国标准时间)
        let startTime = new Date();
        let secondT = startTime.getTime() + 86400 * 1000;
        let endTime = new Date(secondT);
        this.setState({
            startTime,
            endTime
        })
        this.onChangeValue = this.onChangeValue.bind(this)
    }

    weekday(date) {
        let day = date.getDay()
        switch (day) {
            case 0:
                day = "周日"
                break
            case 1:
                day = "周一"
                break
            case 2:
                day = "周二"
                break
            case 3:
                day = "周三"
                break
            case 4:
                day = "周四"
                break
            case 5:
                day = "周五"
                break
            case 6:
                day = "周六"
                break
            default:
                break
        }
        return day;

    }

    liveHotelTime() {
        let time = (this.state.endTime.getTime() - this.state.startTime.getTime()) / 1000;
        time = parseInt(time / 60 / 60 / 24);
        return time === 0 ? 1 : time;
    }


    onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            dataShow: false
        });
    }

    onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            dataShow: false,
            startTime,
            endTime,
        });
    }

    toMaplocation = () => {
        this.props.history.push({
            pathname: "/map",
            state: {
                position: this.props.position
            }
        })
    }

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    selectRoom = ()=>{
        console.log("搜索房间");
        let distance = this.state.distance[0];
        let level = this.state.levelValue[0];
        let kw = this.state.hotelname;
        let address;
        if(distance === ""){
            address = {
                city: this.props.position.city
            }
        }else{
            address = {
                lon: this.props.position.lng,
                lat: this.props.position.lat,
                distance
            }
        }
        
        let selectD = {
            ...address,
            kw,
            level

        }
        this.props.history.push({
            pathname: "/select",
            state: {
                selectD
            }
        })
    }

    // DisableDate(data){
    //     console.log("==========----------------",data);
    //     return false;
    // }
    render() {
        return (
            <div className="card-select">
                <ul>
                    <li>
                        <div className="location" onClick={this.toMaplocation}>{this.props.position.address}</div>
                        <div className="now-position" onClick={this.props.getaddress}>
                            <i className="focus-address"></i><span>当前位置</span>
                        </div>
                    </li>
                    <li>
                        <div className="in-hotel" onClick={() => { this.setState({ dataShow: true }) }}>

                            <div>
                                <b className="in-day">{this.state.startTime.getMonth() + 1}月{this.state.startTime.getDate()}日</b>
                                {this.weekday(this.state.startTime)}
                            </div>
                            <div>入住</div>
                        </div>
                        <div className="hotel-time">{this.liveHotelTime()}晚</div>
                        <div className="out-hotel" onClick={() => { this.setState({ dataShow: true }) }}>

                            <div>
                                <b className="out-day">{this.state.endTime.getMonth() + 1}月{this.state.endTime.getDate()}日</b>
                                {this.weekday(this.state.endTime)}
                            </div>
                            <div>离店</div>
                        </div>
                    </li>
                    <li>
                        <input type="text" className="hotel-name" placeholder="酒店名称" value={this.setState.hotelname} name="hotelname" onChange={this.onChangeValue} />
                    </li>
                    <li>
                        <Picker
                            data={hotelLevel}
                            value={this.state.levelValue}
                            cols={1}
                            onChange={(v) => { this.setState({ levelValue: v }) }}
                        >
                            <div className="starlevel">星级

                            <span>{this.state.levelValue}</span>
                            </div>
                        </Picker>

                    </li>
                    <li>
                        <Picker
                            data={distanceList}
                        value={this.state.levelValue}
                        cols={1}
                        onChange={(v) => { this.setState({ distance: v }) }}
                        >
                            <div className="starlevel">距离

                            <span>{this.state.distance}</span>
                        </div>
                        </Picker>
                    </li>
                    <li>
                        <Button type="primary" size="large" onClick={this.selectRoom} style={{width: '80%', margin: 'auto',backgroundColor: '#fb9829'}}>查询</Button>
                    </li>
                </ul>

            <Calendar
                {...this.state.config}
                visible={this.state.dataShow}
                onCancel={this.onCancel}
                onConfirm={this.onConfirm}
                // onSelectHasDisableDate={this.DisableDate()}
                getDateExtra={this.getDateExtra}
                defaultDate={now}
                minDate={new Date(+now)}
                maxDate={new Date(+now + 31536000000)}
            />

            </div >
        );
    }
}

export default withRouter(CardSelect);