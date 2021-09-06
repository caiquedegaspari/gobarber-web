import React from 'react';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import GlobalStyle from './styles/global'
import AppProvider from './hooks';



function App() {
  return (
    <>
      <GlobalStyle />
        <AppProvider>
          <SignIn />
        </AppProvider>
    </>
  );
}

export default App;
