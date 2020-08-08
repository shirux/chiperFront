import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Profile from '../Profile/Profile'
import Footer from '../Footer/Footer'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/search' component={Search}></Route>
          <Route path='/profile' component={Profile}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
