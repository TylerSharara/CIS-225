import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
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
                </Switch>
                <br />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
