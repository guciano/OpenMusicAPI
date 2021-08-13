const Hapi = require('@hapi/hapi');
const songs = require('./api/songs');
const SongsService = require('./services/inMemory/SongsService');

const init = async () => {
  const SongsService = new SongsService();
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
};

init();
