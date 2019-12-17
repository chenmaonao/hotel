import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import "./TabBar.scss"
import Home from '../Home/Home';
import Order from '../Order/Order';
import Mine from '../Mine/Mine';

const public_url = process.env.PUBLIC_URL

class TabBarControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }


  render() {
    return (
      <div style={ { position: 'fixed', height: '100vh', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#999"
          tintColor="#fb9829"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${public_url}/img/tarbar/home.png) center center /  21px 21px no-repeat` ,}}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${public_url}/img/tarbar/home_select.png) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
           // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <Home position={this.props.position} getaddress={this.props.getaddress}/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${public_url}/img/tarbar/order.png) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${public_url}/img/tarbar/order_select.png) center center /  21px 21px no-repeat` }}
              />
            }
            title="订单"
            key="Koubei"
          //  badge={'new'}   // 自定义文字
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <Order/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${public_url}/img/tarbar/mine.png) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${public_url}/img/tarbar/mine_select.png) center center /  21px 21px no-repeat` }}
              />
            }
            title="我的"
            key="Friend"
            // dot    小红点
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Mine/>
          </TabBar.Item>
         </TabBar>
      </div>
    );
  }
}


export default TabBarControl