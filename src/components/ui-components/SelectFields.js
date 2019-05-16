import React from 'react';
import PropTypes from 'prop-types'; 
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'Weekly',
    label: 'Weekly',
  },
  {
    value: 'Monthly',
    label: 'Monthly',
  },
  {
    value: 'Yearly',
    label: 'Yearly',
  }
];

class SelectFields extends React.Component {
  state = { 
    period: 'Monthly',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return ( 
        <TextField
          id="standard-select-period"
          select
          label="Select"
          className={classes.textField}
          value={this.state.period}
          onChange={this.handleChange('period')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select time to view by"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>  
    );
  }
}

SelectFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectFields);