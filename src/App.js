import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Job from './components/Job';
import Listing from './components/Listing';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/" component={Job} />
          <Route path="/jobs/:id" component={Listing} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
