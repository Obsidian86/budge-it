import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'; 
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem'; 
import ListItemText from '@material-ui/core/ListItemText'; 
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  render() {
    const { classes, drawer } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {["income", "bills", "accounts"].map((text, index) => (
            <ListItem button key={text}> 
             
              <Link to={"/" + text} ><ListItemText>{text}</ListItemText></Link>
            </ListItem>
          ))}
        </List>
        <Divider /> 
      </div>
    ); 

    return (
      <div> 
        <Drawer open={drawer} onClose={() =>this.props.dispatch({type: actions.TOGGLE_DRAWER})}>
          <div
            tabIndex={0}
            role="button"
            onClick={() =>this.props.dispatch({type: actions.TOGGLE_DRAWER})}
            onKeyDown={() =>this.props.dispatch({type: actions.TOGGLE_DRAWER})}
          >
            {sideList}
          </div>
        </Drawer> 
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    drawer: state.drawer
});

export default connect(mapStateToProps)(withStyles(styles)(TemporaryDrawer));