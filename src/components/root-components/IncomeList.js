import React from 'react';
import {connect} from 'react-redux'; 
import FloatingActionButtons from '../ui-components/FloatingButton';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import Typography from '@material-ui/core/Typography';
import '../../styles/listStyles.scss';
import {money} from '../../helpers/format';


const IncomeList = ({income, totalIncome}) =>{ 
    
    const s = {
        fontSize: "1rem",
        color: "black",
        width: "100%"
    };
    const b = {
        fontSize: "1.3rem",
        color: "green",
        width: "100%"
    };

    const sh = {
        display: "flex",
        justifyContent: "space-around"
    }

     return(
        <div className='mainList'>
            <h2>Income sources</h2>
            <div style={sh} className='statHeader'>
                <div>
                    <p style={s}> Week </p>
                    <p style={b}>{ money(totalIncome * 12 /52)}</p>
                </div>
                <div>
                    <p style={s}>Month</p>
                    <p style={b}>{ money(totalIncome) }</p>
                </div>
                <div>
                    <p style={s}>Year</p>
                    <p style={b}>{money(totalIncome * 12)}</p>
                </div>
            </div>
            { income.map((source, index) => {
                return( 
                        <Card key={index} className="display-list-item">
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {source.name}
                            </Typography>  
                            <p><strong>${source.amount}</strong></p> 
                            <p><i>{source.frequency}</i></p> 
                            <p><i>Next date: {source.date}</i></p>  
                            </CardContent> 
                        </Card> 
                      
                    );
            })}
            <FloatingActionButtons />
        </div>
    );
}

const mapStateToProps = (state) =>({
    income: state.income,
    totalIncome: state.totalIncome
});

export default connect(mapStateToProps)(IncomeList);