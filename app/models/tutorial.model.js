module.exports = (sequelizeConfig, sequelize) => {
    const Tutorial = sequelizeConfig.define("tutorial", {
      title: {
        type: sequelize.STRING
      },
      description: {
        type: sequelize.STRING
      },
      published: {
        type: sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
  };