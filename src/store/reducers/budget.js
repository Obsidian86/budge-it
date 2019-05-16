const defaultState = {}

const budgetReducer = (state= defaultState, action) =>{
    switch(action.type){
        case "UPDATE_DATA":
            console.log(action);
            return state;
        default:
            return state;
    }
}

export default budgetReducer;