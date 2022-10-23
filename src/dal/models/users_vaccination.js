const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_vaccination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_vaccination.init(
    {
        user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      vaccination_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      }
    },
    {
      // options
      sequelize,
      modelName: 'Users_vaccination',
      tableName: 'users_vaccination',
      createdAt: 'date_created',
      underscore: true,
      timestamps: false,
    },
  );
  return Users_vaccination;
};