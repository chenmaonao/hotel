let obj = {
    orderList: [],
    mode: false
}


const reducer = function(state = obj,action) {
    switch(action.type){
        case "ADD_ORDER":
            return {
                ...state,
                orderList: [...state.orderList,action.order]
            }
        default:
            return state
    }
}

export default reducer