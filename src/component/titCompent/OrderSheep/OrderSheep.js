import React, { Component } from 'react';
import './index.scss'
import { Carousel } from 'antd-mobile'

class OrderSheep extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
       let room = this.props.room;
       console.log(room)
        return (<div className = "order-sheep">
            
            <Carousel
                autoplay='true'
                infinite
                dots={false}
            >
               {
                  this.props.room.imageUrls?(room.imageUrls.map((item,index)=>{
                       if(index>10){
                           return false
                       }
                       return (<img src={item} alt="dd" style={{
                        height: '180px',
                        width: '100%'
                    }} key={index}/>)
                   })):<img src="http://pavo.elongstatic.com/i/mobile750_448/nw_000g6AyX.jpg" alt="dd" style={{
                    height: '180px',
                    width: '100%'
                }} />
               }

            </Carousel>

            <div>
                <ul>
                {room?(room.description.split(";").map((item,index)=>{
                    let inde = item.split(":")
                    return <li key={index} className="title-list"><span>{inde[0]}:</span> {inde[0]}</li>
                })):false}
                </ul>
            </div>
        </div>);
    }
}

export default OrderSheep;