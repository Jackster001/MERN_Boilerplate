import React, {Component} from 'react';
import Header from './components/header';
import Footer from './components/footer';
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

          <BrowserRouter>
            <div>
              <Route path="/" component={Tacos} />
            </div>
          </BrowserRouter>

        <Header/>
        <h1>hello world</h1>
        <Footer/>
      </div>
    );
  }

}

export default App;
