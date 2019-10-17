import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PlayerInfo from './components/playerInfo';
import OverwatchInfo from './components/overwatchInfo';
import ThankYou from './components/thankYou';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/overwatch-info'>
          <OverwatchInfo />
        </Route>
        <Route path='/thank-you'>
          <ThankYou />
        </Route>
        <Route path='/'>
          <PlayerInfo />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
