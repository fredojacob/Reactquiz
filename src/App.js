import React, { Component } from 'react';
import './assets/App.css';
import Nav from './components/Nav';
import About from './components/About';
import quiz from './components/quiz';
import questionOne from './components/questionOne';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import QuestionOne from './components/questionOne';

class App extends Component{

  render(){

    return(
      <Router>
        <div className="App">
          <Nav />
          <Route path="/About" component={About}  /> 
          <Route path="/quiz" component={quiz} />
          <Route path="/questionOne" component={QuestionOne} />

        </div>
      </Router>
      
    );
  }
}

export default App;
