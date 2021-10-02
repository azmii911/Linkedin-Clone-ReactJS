import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  const  user = useSelector(selectUser) 
  const dispatch = useDispatch()

    useEffect(() => { 
      auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          //Logged inn
          dispatch(login({
            email:userAuth.email,
            uid:userAuth.id,
            photoURL:userAuth.photoURL,
            displayName:userAuth.displayName,
          }))
        }
        else{
          // LOG OUT
          dispatch(logout())
          
        }
      })
    }, [dispatch])
    return (  

      <div className="app">
        <Header />
      {
        !user?(
            <Login />
        )
        :
        (
          <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
          {/* Widget -Left */}
        </div>
        )
      }
       
      </div>
       
    );
}

export default App;
