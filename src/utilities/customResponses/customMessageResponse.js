const successRsp = 'success';
const failRsp = 'fail';
const errorRsp = 'error';
const statusMessageRsp = {
  saveSuccessfulMessage: 'Lagu berhasil ditambahkan',
  saveUnsuccessfulMessage: 'Lagu gagal ditambahkan',
  songNotFoundMessage: 'Lagu tidak ditemukan',
  serverFailMessage: 'Maaf, server sedang error',
  updateSuccessfulMessage: 'Lagu berhasil diperbarui',
  updateIdNotFoundMessage: 'Gagal memperbarui lagu. Id lagu tidak ditemukan',
  deleteSuccessfulMessage: 'Lagu berhasil dihapus',
  deleteIdNotFoundMessage: 'Lagu gagal dihapus. Id tidak ditemukan',
};

module.exports = {
  successRsp, failRsp, errorRsp, statusMessageRsp,
};
