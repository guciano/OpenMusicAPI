const InvariantErr = require('../../exceptions/invariant-Err');
const {SongPayloadSchema} = require('./schema');

const SongsValidator = {
  validateSongPayload: (payload) => {
    const validationResult = SongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantErr(validationResult.error.message);
    }
  },
};

module.exports = SongsValidator;
