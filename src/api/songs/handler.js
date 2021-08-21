/* eslint-disable require-jsdoc */
const ClientErr = require('../../exceptions/client-Err');
const {
  successRsp, failRsp, errorRsp, statusMessageRsp,
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
    try {
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
    } catch (error) {
      if (error instanceof ClientErr) {
        const response = h.response({
          status: failRsp,
          message: error.message,
        }).code(error.statusCode);
        return response;
      }

      const response = h.response({
        status: errorRsp,
        message: statusMessageRsp.serverFailMessage,
      }).code(500);
      return response;
    }
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

  async getSongByIdHandler(request, h) {
    try {
      const {songId} = request.params;
      const song = await this._service.getSongById(songId);
      return {
        status: successRsp,
        data: {
          song,
        },
      };
    } catch (error) {
      if (error instanceof ClientErr) {
        const response = h.response({
          status: failRsp,
          message: error.message,
        }).code(error.statusCode);
        return response;
      }

      const response = h.response({
        status: errorRsp,
        message: statusMessageRsp.serverFailMessage,
      }).code(500);
      return response;
    }
  }

  async putSongByIdHandler(request, h) {
    try {
      this._validator.validateSongPayload(request.payload);
      const {songId} = request.params;
      await this._service.editSongById(songId, request.payload);

      return {
        status: successRsp,
        message: statusMessageRsp.updateSuccessfulMessage,
      };
    } catch (error) {
      if (error instanceof ClientErr) {
        const response = h.response({
          status: failRsp,
          message: error.message,
        }).code(error.statusCode);
        return response;
      }

      const response = h.response({
        status: errorRsp,
        message: statusMessageRsp.serverFailMessage,
      }).code(500);
      return response;
    }
  }

  async deleteSongByIdHandler(request, h) {
    try {
      const {songId} = request.params;
      await this._service.deleteSongById(songId);
      return {
        status: successRsp,
        message: statusMessageRsp.deleteSuccessfulMessage,
      };
    } catch (error) {
      if (error instanceof ClientErr) {
        const response = h.response({
          status: failRsp,
          message: error.message,
        }).code(error.statusCode);
        return response;
      }

      const response = h.response({
        status: errorRsp,
        message: statusMessageRsp.serverFailMessage,
      }).code(500);
      return response;
    }
  }
}

module.exports = SongsHandler;
