const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      hmo_id: {
        type: DataTypes.INTEGER,
      },
      first_name:{ 
        type: DataTypes.STRING,
    },
     last_name: DataTypes.STRING,
     born_date: DataTypes.DATE,
     phone: DataTypes.STRING,
     per_phone: DataTypes.STRING,

    },
    {
      // options
      sequelize,
      modelName: 'Users',
      tableName: 'users',
      createdAt: 'date_created',
      underscore: true,
      timestamps: false,
    },
  );
  return Users;
};