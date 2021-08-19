const successRsp = 'success';
const failRsp = 'fail';
const errorRsp = 'error';
const statusMessageRsp = {
  saveSuccessful: 'Lagu berhasil ditambahkan',
  saveUnsuccessful: 'Lagu gagal ditambahkan',
  songNotFound: 'Lagu tidak ditemukan',
  serverFail: 'Maaf, server sedang error',
  updateSuccessful: 'Lagu berhasil diperbarui',
  updateIdNotFound: 'Gagal memperbarui lagu. Id lagu tidak ditemukan',
  deleteSuccessful: 'Lagu berhasil dihapus',
  deleteIdNotFound: 'Lagu gagal dihapus. Id tidak ditemukan',
};

module.exports = {
  successRsp, failRsp, errorRsp, statusMessageRsp,
};
