const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_sick_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_sick_details.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      sick_date: DataTypes.DATE,
      recover_date: {
        type: DataTypes.DATE,
      }, 

    },
    {
      // options
      sequelize,
      modelName: 'User_sick_details',
      tableName: 'user_sick_details',
      createdAt: 'date_created',
      underscore: true,
      timestamps: false,
    },
  );
  return User_sick_details;
};