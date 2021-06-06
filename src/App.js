import React, { useEffect } from 'react';
import '/Users/larryh1981/project05/src/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from '/Users/larryh1981/project05/src/components/Navbar.js';
import Home from '/Users/larryh1981/project05/src/components/Pages/Home.js';
import GroupA from './components/Pages/GroupA.js';
import GroupB from '/Users/larryh1981/project05/src/components/Pages/GroupB.js';
import GroupC from '/Users/larryh1981/project05/src/components/Pages/GroupC.js';
import Feedback from '/Users/larryh1981/project05/src/components/Pages/Form/Feedback.js';


function App() {
  return (
    <div className="app">
      
      <Router>     
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/GroupA.js" component={GroupA} />
          <Route path="/GroupB.js" component={GroupB} />
          <Route path="/GroupC.js" component={GroupC} />
          <Route path="/Form/Feedback.js" component={Feedback} />
        </Switch>
        
      </Router>
  
    
    </div>
    
  );
};

export default App;
