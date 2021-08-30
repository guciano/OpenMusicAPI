/* eslint-disable require-jsdoc */
const ClientErr = require('./client-Err');

class AuthorizationError extends ClientErr {
  constructor(message) {
    super(message, 403);
    this.name = 'AuthorizationError';
  }
}

module.exports = AuthorizationError;
