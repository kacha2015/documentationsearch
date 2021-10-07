import './App.css';
import { useState, useEffect } from 'react';

import { supabase } from './client';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import { Container, Divider } from '@mui/material';
import InformationForm from './components/InformationForm';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();

    window.addEventListener('hashchange', function() {
      checkUser();
    });
  }, [])
  async function checkUser() {
    const user = supabase.auth.user();
    console.log(user);
    setUser(user);
  }
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: 'github'
    });
  }
  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  if (user) {
    return (
      <div>
        <PrimarySearchAppBar currentUser={user} handleSesionClose={signOut}/>

      </div>
    )
  }

  
  return (
    <div>
      <h1>Hello, please sign in!</h1>
      <button onClick={signInWithGithub}>Sign In</button>
    </div>
  );
}

export default App;