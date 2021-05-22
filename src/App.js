import './App.css';
import '/Users/larryh1981/project05/src/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "/Users/larryh1981/project05/src/components/Navbar";
import Home from '/Users/larryh1981/project05/src/components/Pages/Home';
import GroupA from './components/Pages/GroupA';
import GroupB from '/Users/larryh1981/project05/src/components/Pages/GroupB';
import GroupC from '/Users/larryh1981/project05/src/components/Pages/GroupC';


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
      </Switch>
    </Router>
  
    
    </div>
    
  );
};

export default App;
