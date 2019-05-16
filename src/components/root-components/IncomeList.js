import React from 'react';
import {connect} from 'react-redux'; 
import FloatingActionButtons from '../ui-components/FloatingButton';
import '../../styles/listStyles.scss';

const IncomeList = ({income}) =>{  
     return(
        <div>
            <h2>Stats</h2>
            { income.map((source, index) => {
                return(
                    <div key={index} className="mainList">
                        {
                            <React.Fragment>
                                <p><strong>{source.name}</strong></p> 
                                <p><strong>${source.amount}</strong></p> 
                                <p><i>{source.frequency}</i></p> 
                                <p><i>Next date: {source.date}</i></p> 
                            </React.Fragment>
                        }
                    </div>);
            })}
            <FloatingActionButtons />
        </div>
    );
}

const mapStateToProps = (state) =>({
    income: state.income
});

export default connect(mapStateToProps)(IncomeList);