module.exports = (sequelizeConfig, sequelize) => {
    const jenisJab = sequelizeConfig.define("jenis_jabatan", {
        jenis_jab: {
            type: sequelize.STRING(10)
        }
    });
    
    return jenisJab;
}