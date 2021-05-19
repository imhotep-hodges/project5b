import logo from './logo.svg';
import './App.css';
import '/Users/larryh1981/project05/src/index.css';
import Navbar from "/Users/larryh1981/project05/src/components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GroupA from './components/Pages/GroupA';
import Question1 from './components/Pages/QnAs/Question1';
import Answer1 from './components/Pages/QnAs/Answer1';

function App() {
  return (
    <Router>     
      <Navbar />
      <GroupA total="3" current="1" /> 
      <Question1 question="Is this a Test?" />
      <Answer1 letter="A" answer="I don't know" />

    </Router>
  );
};

export default App;
