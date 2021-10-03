import './App.css';
import { useState, useEffect } from 'react';

import { supabase } from './client';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import { Container } from '@mui/material';

function App() {
  const [user, setUser] = useState(null);
  const [contents, setContents] = useState([])

  useEffect(() => {
    checkUser();

    window.addEventListener('hashchange', function() {
      checkUser();
    });
  }, [])
  async function checkUser() {
    const user = supabase.auth.user();
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
      <Container>
        <PrimarySearchAppBar username={user?.user_metadata.user_name} handleSesionClose={signOut}/>
      </Container>
    )
  }

  
  return (
    <Container>
      <h1>Hello, please sign in!</h1>
      <button onClick={signInWithGithub}>Sign In</button>
    </Container>
  );
}

export default App;