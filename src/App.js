import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './webpages/Home';
import Services from './webpages/Services';
import About from './webpages/About';
import Contact from './webpages/Contact';
import Multimedia from './webpages/Multimedia';
import Donate from './webpages/Donate';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/donate' component={Donate} />
          <Route path='/multimedia' component={Multimedia} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;