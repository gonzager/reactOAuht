// App.js
import React from 'react';
import Navigation from './components/Navigation';
import './App.css';
import SearchComponent from './components/SearchComponent';
import { useKeycloak } from '@react-keycloak/web';
const App = () => {

  const {keycloak, initialized} = useKeycloak()

  if (!initialized) {
    return <div>Loading...</div>
  } 

  return (
    <div className="container">
      <Navigation />
      <SearchComponent />
    </div>
  );
};

export default App;
