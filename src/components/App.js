import React, {Component} from 'react'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './ui-components/AppBar'; 
import {connect} from 'react-redux';
import Overview from './root-components/Overview'; 

class App extends Component{   
  componentWillMount(){
    this.props.dispatch({
      type: "TEST_DISPATCH"
    });
  }
  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <AppBar />  
          </header>
          <Overview />
        </div>
      </React.Fragment>
    );
  }
}
 
export default connect()(App);
