const defaultState = {
    totalBills: 0,
    bills: [],
    income: []
}

const budgetReducer = (state= defaultState, action) =>{
    switch(action.type){
        case "UPDATE_DATA": 
            let totalBills = action.payload.bills.reduce((a,b) =>{
                return (parseInt(a) + parseInt(b.amount))
            }, [0]); 
            let totalIncome = action.payload.income.reduce((a,b) =>{
                return (parseInt(a) + parseInt(b.amount))
            }, [0]);  
            return {...state, totalBills, totalIncome: (totalIncome * 52 /12), ...action.payload};
        default:
            return state;
    }
}

export default budgetReducer;