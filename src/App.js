import React from 'react';
import Global from './assets/styles/GlobalStyle';
import Home from './pages/Home';
import PageRecipe from './pages/PageRecipe';

function App() {
  return (
    <>
      <Home />
      <PageRecipe />
      <Global />
    </>
  );
}

export default App;