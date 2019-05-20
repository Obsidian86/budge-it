import React from 'react';
import {connect} from 'react-redux'; 
import FloatingActionButtons from '../ui-components/FloatingButton';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import Typography from '@material-ui/core/Typography';
import '../../styles/listStyles.scss';
import {money} from '../../helpers/format';


const accountsList = ({accounts}) =>{ 
    
    const s = {
        fontSize: "1rem",
        color: "black",
        width: "100%"
    }; 
    const sh = {
        display: "flex",
        justifyContent: "space-around"
    }

     return(
        <div className='mainList'>
            <h2>Active accounts</h2>
            <div style={sh} className='statHeader'>
                <div>
                    <p style={s}> To </p>  
                </div> 
            </div>
            { accounts.map((source, index) => {
                return( 
                        <Card key={index} className="display-list-item">
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {source.name}
                            </Typography>  
                            <p><strong>{money(source.balance)}</strong></p>
                            </CardContent> 
                        </Card> 
                      
                    );
            })}
            <FloatingActionButtons />
        </div>
    );
}

const mapStateToProps = (state) =>({
    accounts: state.accounts
});

export default connect(mapStateToProps)(accountsList);