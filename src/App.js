import React, {Component} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Landing from './components/landing';
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Navigation from "./components/navigation";

import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {
  render(){
      return (
      <div className="App">
        <Header/>
          <Router>
            <div>
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/home" component={Home} />
            </div>
          </Router>
        <Footer/>
      </div>
    );
  }

}

export default App;
