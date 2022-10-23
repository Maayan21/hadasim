const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaccination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vaccination.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      manufacturer_id: {
        type: DataTypes.INTEGER,
      },
      vacc_date: DataTypes.DATE,

    },
    {
      // options
      sequelize,
      modelName: 'Vaccination',
      tableName: 'vaccination',
      createdAt: 'date_created',
      underscore: true,
      timestamps: false,
    },
  );
  return Vaccination;
};