import React from 'react';
import { Navigation } from './pages/navigation';
import { AppContainer } from './style';
import { SideBar } from './components';

function App() {
  return (
    <AppContainer>
      <SideBar />
      <Navigation />
    </AppContainer>
  );
}

export default App;
