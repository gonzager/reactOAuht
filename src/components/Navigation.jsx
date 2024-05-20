// components/Navigation.js
import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import './Navigation.css'; // Import the CSS file

const Navigation = () => {
  const {keycloak} = useKeycloak()

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <nav className="navbar">
      <span className="navbar-brand">Keycloack React</span>
      <div className="nav-items">
        <span className="username">{keycloak.idTokenParsed.preferred_username}</span>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navigation;
