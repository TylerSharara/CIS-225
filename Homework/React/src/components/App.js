import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <br />
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                  <Route path="/contact" exact component={Contact} />
              </Switch>
              <br />
              <Footer />
          </div>
      </Router>
  );
}

export default App;
