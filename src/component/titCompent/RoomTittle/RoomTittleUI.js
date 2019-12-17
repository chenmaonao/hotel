import React, { Component } from 'react';
import { Button, Modal,List } from 'antd-mobile'
import "./index.scss"
import OrderSheep from '../OrderSheep/OrderSheep';

class RoomTittleUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal2: false
        }
    }

    render() {
        let room = this.props.room;
        return (<div className="room-title">
            <Button type="primary" 
            inline 
            size="small" 
            style={{ backgroundColor: '#fb9829', position: 'absolute', right: '20px', top: '50%', transform: "translateY(-50%)" }} 
             onClick={this.showModal('modal2')}>预定</Button>
            
            <Modal
                popup
                visible={this.state.modal2}
                onClose={this.onClose('modal2')}
                animationType="slide-up"
                // afterClose={() => { alert('afterClose'); }}
            >
                <List renderHeader={() => <div>确认订单</div>} className="popup-list">
                  
                        <List.Item>
                            <OrderSheep room={room} />
                        </List.Item>
                
                    <List.Item
                    >
                        <div className="cancle-control" onClick={this.onClose('modal2')}>
                            取消
                        </div>
                        <div className="sure-control" onClick={this.addorder}>
                            预定
                        </div>
                    </List.Item>
                </List>
            </Modal>
            <div className="unitName">{room.unitName}</div>
            <div className='title'>不含早</div>

            <div className="price">{room.price}元</div>

        </div>);
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        console.log("--------------------")
        this.setState({
          [key]: true,
        });
      }
      onClose = key => () => {
        this.setState({
          [key]: false,
        });
        
      }
      addorder = ()=>{
        this.setState({
            modal2: false,
          });
        this.props.addorder({...this.props.room,hotelname: this.props.hotelname})
        console.log(this.props.orderlist)
      }
}

export default RoomTittleUI;