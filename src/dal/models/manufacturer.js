const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Manufacturer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      manufacturer_name:{ 
        type: DataTypes.STRING,
    },

    },
    {
      // options
      sequelize,
      modelName: 'Manufacturer',
      tableName: 'manufacturer',
      createdAt: 'date_created',
      underscore: true,
      timestamps: false,
    },
  );
  return Manufacturer;
};