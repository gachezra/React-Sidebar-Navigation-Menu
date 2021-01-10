import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
// PAGES
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Reports from './pages/Reports';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/reports" exact component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
