import React from 'react';
import Card from '../ui-components/Card';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Overview = (props) => {
    let { bills, totalBills, totalIncome} = props; 
    return(
        <div className='overview'>
            <Card 
                totalBills={totalBills} 
                totalIncome={totalIncome} 
                bills={bills}
            />
            <div>
                <Link to="/income">Accounts</Link>
                <Link to="/income">Income</Link>
                <Link to="/bills">Bills</Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    bills: state.bills,
    income: state.income,
    totalBills: state.totalBills,
    totalIncome: state.totalIncome
});

export default connect(mapStateToProps)(Overview);