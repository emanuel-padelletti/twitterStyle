import React from 'react';
import './App.css';
import Home from './Home';
import Perfil from './MenuComponents/Perfil';
import Login from './Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          {
            //</Switch><Redirect from='/' exact to='/home' />
          }
          <Route path='/perfil' component={Perfil} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
