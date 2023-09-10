const db = require("../models");
const struktur = db.struktur;
const op = db.sequelize.Op;

exports.add = (req, res) => {
  if (!req.body.nama_jabatan) {
    res.status(400).send({
      message: "!",
    });
    return;
  }

  const jab = {
    nama_jabatan: req.body.nama_jabatan,
    induk_jabatan: req.body.induk_jabatan,
    id_jenis_jabatan: req.body.id_jenis_jabatan
  }

  struktur.create(jab)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
        message: err.message || "Error"
    })
  })
};
