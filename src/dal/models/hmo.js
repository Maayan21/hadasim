const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hmo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hmo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      hmo_name:{ 
        type: DataTypes.STRING,
    },

    },
    {
      // options
      sequelize,
      modelName: 'Hmo',
      tableName: 'hmo',
      createdAt: 'date_created',
      underscore: true,
      timestamps: false,
    },
  );
  return Hmo;
};