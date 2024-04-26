import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
// PAGES
import Home from './pages/Home';
import Rooms from './pages/Rooms';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={Rooms} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
