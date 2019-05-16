import React from 'react'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './ui-components/AppBar'; 
 
import Overview from './root-components/Overview';

import * as data from '../data';

const App = () => { 



  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <AppBar /> 
          <Overview data={data} />
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
