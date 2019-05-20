import React from 'react';
import {connect} from 'react-redux'; 
import FloatingActionButtons from '../ui-components/FloatingButton';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import Typography from '@material-ui/core/Typography';
import '../../styles/listStyles.scss';

const IncomeList = ({income}) =>{  
     return(
        <div className='mainList'>
            <h2>Stats</h2>
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
    income: state.income
});

export default connect(mapStateToProps)(IncomeList);