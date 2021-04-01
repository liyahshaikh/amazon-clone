
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CheckOut from './CheckOut';
function App() {
  return (
    //BEM Convention
    <Router>
      <div className="app">
      <Header />
        <Switch>
        <Route path="/checkout">
            <CheckOut />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
