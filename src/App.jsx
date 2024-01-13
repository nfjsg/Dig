
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';
import Error from './components/Error';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Your Website Name</h1>
        </header>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Project} />
          <Route path="/resume" component={Resume} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
