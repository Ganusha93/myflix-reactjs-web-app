import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from "./screens/LoginScreen"
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';
import ErrorScreen from './screens/ErrorScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (<LoginScreen />) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route   path="/profile">
              <ProfileScreen />
            </Route>
            <Route  >
              <ErrorScreen />
            </Route >
          </Switch>
        )}

      </Router>

    </div>
  );
}

export default App;
