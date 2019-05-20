import * as actions from '../actions';

const defaultState = {
    totalBills: 0,
    totalIncome: 0,
    accounts: [],
    bills: [],
    income: [],
    drawer: false
}

const budgetReducer = (state= defaultState, action) =>{
    switch(action.type){
        case actions.SET_UPDATE_DATA: 
            let totalBills = action.payload.bills.reduce((a,b) =>{
                return (parseInt(a) + parseInt(b.amount))
            }, [0]); 
            let totalIncome = action.payload.income.reduce((a,b) =>{
                return (parseInt(a) + parseInt(b.amount))
            }, [0]);  
            return {...state, totalBills, totalIncome: (totalIncome * 52 /12), ...action.payload};
        case actions.SET_TOGGLE_DRAWER:
            return {...state, drawer: !state.drawer}
        default:
            return state;
    }
}

export default budgetReducer;