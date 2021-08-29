/* eslint-disable require-jsdoc */
const ClientError = require('./client-Err');

class AuthenticationError extends ClientError {
  constructor(message) {
    super(message, 401);
    this.name = 'AuthenticationError';
  }
}

module.exports = AuthenticationError;
