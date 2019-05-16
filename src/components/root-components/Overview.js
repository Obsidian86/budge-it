import React from 'react';
import Card from '../ui-components/Card';
import {connect } from 'react-redux';


const Overview = (props) => {
    let {income, bills} = props;
    
    let totalIncome = 0;

    const incomeList = income.map((source, index) =>{
        totalIncome = totalIncome + source.amount;
        return (
            <div key={index}>
                {source.name}
                {source.amount}
            </div>
        )
    });

    totalIncome = (totalIncome * 52)/12;

    let totalBills = 0;
    const billsList = bills.map((source, index) =>{
        totalBills = totalBills + source.amount;
        return (
            <div key={index}>
                {source.name}
                {source.amount}
            </div>
        )
    });

    return(
        <div>
            <Card 
                totalBills={totalBills} 
                totalIncome={totalIncome} 
                bills={bills}
            />
            {totalIncome} 
            {totalBills} 
            {incomeList} 
            {billsList}
        </div>
    );
}

const mapStateToProps = (state) => ({
    bills: state.bills,
    income: state.income
});

export default connect(mapStateToProps)(Overview);