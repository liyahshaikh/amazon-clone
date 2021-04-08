
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CheckOut from './CheckOut';
import Login from './Login';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
function App() {
  const [{basket}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app loads.
    auth.onAuthStateChanged(authUser =>{
      console.log("The user is >>>>>>", authUser)
      if(authUser){
        // There is a user and he will be kept logged in even if you refresh if
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //user is logged out!
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }  
    })

  }, [])
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
