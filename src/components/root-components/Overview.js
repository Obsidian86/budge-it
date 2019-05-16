import React from 'react';
import Card from '../ui-components/Card';

const Overview = (props) => {
    let {income, bills} = props.data;
    
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
            <Card totalBills={totalBills} totalIncome={totalIncome} bills={bills}/>
            {totalIncome}
            <br /> 
            {totalBills}
            <br />
            <br />
            {incomeList}
            <br />
            <br />
            {billsList}
        </div>
    );
}

export default Overview;