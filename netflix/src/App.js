import React, { useEffect } from 'react';

import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // logged Out
        dispatch(logout())
      }
    });

    return unsubscribe;
} , [dispatch] )



  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>

    </div>
  );
}

export default App;
