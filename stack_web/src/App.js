import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Push from './components/push.component';
import StackList from './components/stack.component';

class App extends Component { 
  render() {
    return (
      <Router>
        <div className="container">          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">            
            <Link to="/" className="navbar-brand">My Stack</Link>           
          </nav>
          <Route path="/" exact component={StackList} />         
          <Route path="/push" component={Push} />          
        </div>
      </Router>
    );
  }
}

export default App;
