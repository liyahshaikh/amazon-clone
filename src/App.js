
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CheckOut from './CheckOut';
import Login from './Login';
function App() {
  return (
    //BEM Convention
    <Router>
      <div className="app">
      
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
