/* eslint-disable require-jsdoc */
const {nanoid} = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class SongService {
  constructor() {
    this._songs = [];
  }

  /* Adding CRUD Function */
  addSong({title, year, performer, genre, duration}) {
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const newSong = {
      title,
      year,
      performer,
      genre,
      duration,
      id,
      insertedAt,
      updatedAt,
    };

    this._songs.push(newSong);

    const accomplish = this._songs.fliter((song) => song.id === id).length > 0;

    if (!accomplish) {
      throw new InvariantError('Lagu gagal ditambahkan');
    }

    return id;
  }

  getSongs() {
    const songs = this._songs.map((b) => ({
      id: b.id,
      title: b.title,
      performer: b.performer,
    }));
    return songs;
  }

  getSongById(songId) {
    const song = this._songs.filter((n) => n.id === songId)[0];

    if (!song) {
      throw new NotFoundError('Lagu tidak ditemukan');
    }
    return song;
  }

  editSongById(songId, {title, year, performer, genre, duration}) {
    const index = this._songs.findIndex((song) => song.id === songId);

    if (index === -1) {
      throw new NotFoundError('Gagal memperbarui lagu. Id tidak ditemukan');
    }

    const updatedAt = new Date().toISOString();

    this._songs[index] = {
      ...this._songs[index],
      title,
      year,
      performer,
      genre,
      duration,
      updatedAt,
    };
  }

  deleteSongById(songId) {
    const index = this._songs.findIndex((song) => song.id === songId);

    if (index === -1) {
      throw new NotFoundError('Lagu gagal dihapus, Id tidak ditemukan');
    }
    this._songs.splice(index, 1);
  }
}

module.exports = SongService;
