/* eslint-disable require-jsdoc */
const ClientErr = require('./client-Err');

class NotFoundError extends ClientErr {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;
