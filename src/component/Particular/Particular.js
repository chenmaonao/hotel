import React, { Component } from 'react';
import {WhiteSpace} from "antd-mobile"
import "./index.scss"
import backupData from './errData'
import RoomTittle from '../titCompent/RoomTittle/RoomTittle';

class Particular extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            particularData: null
         }
    }
    render() { 
        let locationState = this.props.location.state
        let particularData = this.state.particularData
        let baseIdList = []

        console.log(particularData)
        return ( <div className="particular-box">
            {particularData ? (
                <>
                <div className="top-img">
                     <img src={particularData.coverUrl} alt="" className="auto-img"/> 
                    <div className="hotel-title">{particularData.title}</div>
                </div>
                <div  className="rating-count">
                    <b className="rating">{locationState.rating}<span className="fensss">分</span></b>
                    <span className="comentCount">查看共{locationState.commentCount}条评论 ></span>         
                </div>
                <div  className="address">
                     <span>{particularData.address}</span>
                </div>

                <WhiteSpace size="xl" style={{backgroundColor: "#f6f6f6"}}/>
                <div>
                    {
                        particularData.flatOptions[0].elong ? particularData.flatOptions[0].elong.map((item,index)=>{
                            if(baseIdList.indexOf(item.baseId) === -1){
                                baseIdList.push(item.baseId)
                                return  <RoomTittle room={item} hotelname={particularData.title} key={index}/>
                            }
                            return false
                            
                          
                        }) : false
                    }

                    
                </div>

                </>
            ): false}
        </div> );
    }
    componentDidMount(){

        let url = `/hotel/flatoption/idataapi?unifiedId=${this.props.location.state.unifiedId}&apikey=JvYO1m6IDi6M1ASGpiGrVtOIxHV7E0PkSXa87nPT7fGSJgMTmFk7QvitUUQDPC7c`
        
        console.log(url)
        fetch(url, { method: 'GET' })
        .then((res) => res.json())
        .then((res) => {
            if(res.data){
                this.setState(()=>({
                    particularData: res.data[0]
                }))
            }
            
        }).catch((err)=>{
            this.setState(()=>({
                particularData: backupData.data[0]
            }))

           
            
        })
    }
}
 
export default Particular;