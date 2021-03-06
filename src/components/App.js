import React, {Component} from 'react'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import {connect} from 'react-redux';
import AppBar from './ui-components/AppBar'; 
import * as actions from '../store/actions';
import Overview from './root-components/Overview'; 
import IncomeList from './root-components/IncomeList';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Drawer from '../components/ui-components/Drawer';
import billsList from './root-components/billsList';
import accountsList from './root-components/accountsList';

class App extends Component{   
  componentWillMount(){
    this.props.dispatch({
      type: actions.INITIAL_APP_LOAD
    });
  }
  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <div className="App">
            <Drawer visible={true} />
            <header className="App-header">
              <AppBar />  
            </header>
            <Route exact path="/" component={Overview}></Route> 
            <Route path="/dash" component={Overview}></Route> 
            <Route path="/bills" component={billsList}></Route> 
            <Route path="/income" component={IncomeList}></Route> 
            <Route path="/accounts" component={accountsList}></Route> 
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
 
export default connect()(App);
