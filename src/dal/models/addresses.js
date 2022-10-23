const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Addresses.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      street: DataTypes.STRING,
      city: {
        type: DataTypes.STRING,
      }, 
      number_house: {
        type: DataTypes.INTEGER,
      },

    },
    {
      // options
      sequelize,
      modelName: 'Addresses',
      tableName: 'addresses',
      createdAt: 'date_created',
      underscore: true,
      timestamps: false,
    },
  );
  return Addresses;
};
