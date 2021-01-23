import React, { useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from './components/Login'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import { actionTypes } from './reducer'

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(_user => {
      if (_user) {
        dispatch({
          type: actionTypes.SET_USER,
          user: _user,
        })
      }
    });
  }, [user, dispatch]);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header/>
            <div className='app__body'>
              <Sidebar />
              <Switch>
                <Route path='/room/:roomId' component={Chat} />
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
