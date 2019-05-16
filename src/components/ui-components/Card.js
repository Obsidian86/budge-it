import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'; 
import CardContent from '@material-ui/core/CardContent'; 
import Typography from '@material-ui/core/Typography';

import SelectFields from '../ui-components/SelectFields';
import PieChart from './PieChart';

const styles = { 
};

 
function MediaCard(props) {
  const { classes, totalBills, totalIncome,bills } = props;

  let chartData = [];
  bills.forEach(bill => {
    let b = {
      title: bill.name,
      value: bill.amount,
      color: "red"
    };
    chartData.push(b);
  }); 
  
  return (
    <Card className={classes.card}>
      <CardActionArea> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
             Your Accounts 
          </Typography> 
            <SelectFields />
            {"$" + totalBills + " $" + totalIncome}
            <div style={{width: "500px", margin: "0 auto"}}>
              <PieChart chartData={chartData} />
            </div>
            
          
        </CardContent>
      </CardActionArea> 
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);