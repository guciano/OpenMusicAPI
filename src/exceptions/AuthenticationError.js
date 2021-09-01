/* eslint-disable require-jsdoc */
const ClientErr = require('./client-Err');

class AuthenticationError extends ClientErr {
  constructor(message) {
    super(message, 401);
    this.name = 'AuthenticationError';
  }
}

module.exports = AuthenticationError;
