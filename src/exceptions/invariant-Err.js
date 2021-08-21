/* eslint-disable require-jsdoc */
const ClientErr = require('./client-Err');

class InvariantError extends ClientErr {
  constructor(message) {
    super(message);
    this.name = 'InvariantError';
  }
}

module.exports = InvariantError;
