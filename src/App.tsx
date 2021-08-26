import React from 'react';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import GlobalStyle from './styles/global'
import { AuthProvider } from './context/AuthContext';



function App() {
  return (
    <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    </>
  );
}

export default App;
