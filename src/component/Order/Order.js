import OrderUI from "./OrderUI"
import {connect} from 'react-redux'

const mapStateToProps = (state,ownProps)=>({
   orderlist: state.orderList
})

const mapDispatchToProps = {
   
}


const Order = connect(mapStateToProps,mapDispatchToProps)(OrderUI)

export default Order