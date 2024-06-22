//
//import logo from './logo.svg';
import './App.css';
import Navibar from './components/navbar';

import React, { Component } from 'react'
import Newscomponent from './components/newscomponent';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <div>

      <Router>
        <Navibar/>
        
         {/* <Newscomponent pageSize={16} country="us" category="Science"/> */}

         <Routes>
          <Route path="/"> <Newscomponent pageSize={16} country="in" category="general"/>  </Route>
          <Route path="/business"> <Newscomponent pageSize={16} country="in" category="business"/>  </Route>
          <Route path="/entertainment"> <Newscomponent pageSize={16} country="in" category="entertainment"/>  </Route>
          <Route path="/general"> <Newscomponent pageSize={16} country="in" category="general"/>  </Route>
          <Route path="/health"> <Newscomponent pageSize={16} country="in" category="health"/>  </Route>
          <Route path="/science"> <Newscomponent pageSize={16} country="in" category="science"/>  </Route>
          <Route path="/sports"> <Newscomponent pageSize={16} country="in" category="sports"/>  </Route>
          <Route path="/technology"> <Newscomponent pageSize={16} country="in" category="technology"/>  </Route>
          
        </Routes>

      </Router>
            
      </div>
    )
  }
}

export default App
