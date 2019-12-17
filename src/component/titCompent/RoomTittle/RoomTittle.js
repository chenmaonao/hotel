import RoomTittleUI from "./RoomTittleUI"
import {connect} from 'react-redux'

const mapStateToProps = (state,ownProps)=>({
   orderlist: state.orderList
})

const mapDispatchToProps = {
    addorder: (order)=>({type: "ADD_ORDER",order})
}


const RoomTittle = connect(mapStateToProps,mapDispatchToProps)(RoomTittleUI)

export default RoomTittle