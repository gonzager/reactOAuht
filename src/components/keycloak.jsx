// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'unahur',
  clientId: 'front'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
