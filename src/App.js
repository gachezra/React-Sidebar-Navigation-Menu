import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
// PAGES
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/room" exact component={Room} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
