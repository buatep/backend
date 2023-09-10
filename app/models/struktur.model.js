module.exports = (sequelizeConfig, sequelize) => {
    const struktur = sequelizeConfig.define("struktur_org", {
        nama_jabatan: {
            type: sequelize.STRING(100)
        },
        id_induk_jabatan: {
            type: sequelize.INTEGER
        },
        induk_jabatan: {
            type: sequelize.STRING(100)
        },
        id_jenis_jabatan: {
            type: sequelize.INTEGER
        }
    });

    return struktur;
}