/* eslint-disable require-jsdoc */
const {
  successRsp,
  statusMessageRsp,
} =require('../../utilities/customResponses/customMessageResponse');

class SongsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postSongHandler = this.postSongHandler.bind(this);
    this.getSongsHandler = this.getSongsHandler.bind(this);
    this.getSongByIdHandler = this.getSongByIdHandler.bind(this);
    this.putSongByIdHandler = this.putSongByIdHandler.bind(this);
    this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
  }

  async postSongHandler(request, h) {
    this._validator.validateSongPayload(request.payload);
    const {
      title = untitled, year, performer, genre, duration,
    } = request.payload;

    const songId = await this._service.addSong({
      title, year, performer, genre, duration,
    });

    const response = h.response({
      status: successRsp,
      message: statusMessageRsp.saveSuccessfulMessage,
      data: {
        songId,
      },
    }).code(201);
    return response;
  }

  async getSongsHandler() {
    const songs = await this._service.getSongs();
    return {
      status: successRsp,
      data: {
        songs,
      },
    };
  }

  async getSongByIdHandler(request) {
    const {songId} = request.params;
    const song = await this._service.getSongById(songId);
    return {
      status: successRsp,
      data: {
        song,
      },
    };
  }

  async putSongByIdHandler(request) {
    this._validator.validateSongPayload(request.payload);
    const {songId} = request.params;
    await this._service.editSongById(songId, request.payload);

    return {
      status: successRsp,
      message: statusMessageRsp.updateSuccessfulMessage,
    };
  }

  async deleteSongByIdHandler(request) {
    const {songId} = request.params;
    await this._service.deleteSongById(songId);
    return {
      status: successRsp,
      message: statusMessageRsp.deleteSuccessfulMessage,
    };
  }
}

module.exports = SongsHandler;
