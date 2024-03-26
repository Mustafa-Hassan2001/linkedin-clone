import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useSelector } from 'react-redux';
import { Widgets } from '@material-ui/icons';

function App() {
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      }else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">
        <Header />
        
        {!user ? (<Login />): (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        )}
   </div>
  );
}

export default App;
