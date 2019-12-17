import React, { Component } from 'react';
import {Route} from "react-router-dom"
import { NavBar, Icon, ListView } from 'antd-mobile'
import SingleHotel from '../titCompent/SingleHotel/SingleHotel';
import './index.scss'
import Particular from '../Particular/Particular';


class SelectRoom extends Component {
    constructor(props) {
        super(props);

        let hotelData = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
            data:[],
            hotelData: hotelData.cloneWithRows([])
        }
        this.getHotelD = this.getHotelD.bind(this)
    }

    getHotelD(){
        let url = '/hotel/idataapi?apikey=JvYO1m6IDi6M1ASGpiGrVtOIxHV7E0PkSXa87nPT7fGSJgMTmFk7QvitUUQDPC7c'
        let selectData = this.props.location.state.selectD;   
        for (let key in selectData) {
            if (selectData[key] !== "") {
                url = url + "&" + key + "=" + selectData[key]
            }
        }
        if(this.pageToken){
            url = url + "&pageToken=" + this.pageToken
        }
        console.log(url)
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((res) => {
                if(res.data){
                    this.setState((state) => ({
                        data: [...state.data,...res.data]
                    }))
                    this.setState((state) => ({
                        hotelData: state.hotelData.cloneWithRows(state.data)
                    }))
                    this.pageToken = res.pageToken;
                }
            }).catch((err) => {
                console.log(err)
            })
    }



    render() {
        return (<div>
            <NavBar
                mode="dark"
                icon={<Icon type="left" style={{ height: '30px', width: '30px' }} />}
                onLeftClick={() => { this.props.history.go(-1) }}
                rightContent={
                    <Icon key="0" type="search" />
                }
                style={{ backgroundColor: '#fb9829' }}
            ></NavBar>

            <Route path="/select/particular" render={(props) => (<Particular {...props} />)} />

            <ListView 
            dataSource={this.state.hotelData}
            renderRow={data=><SingleHotel hotelItem={data} key={data.unifiedId} />}
            style={{
                height: ' calc( 100vh - 45px ) ',
                overflow: "auto",
                width: '100vw'
            }}
            onEndReached={(event)=>{
                console.log(event)
                this.getHotelD()
            }}
            />

                {/* <ul>
                    {
                        this.state.data.map((item, index) => {
                            return <SingleHotel hotelItem={item} key={item.unifiedId} />
                        })
                    }
                </ul> */}
        </div>);
    }


    componentDidMount() {
       
        this.getHotelD()
    }
}

export default SelectRoom;


