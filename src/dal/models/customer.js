const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      first_name:{ 
        type: DataTypes.STRING,
    },
     last_name: DataTypes.STRING,
     born_date: DataTypes.DATE,
     own_phone: DataTypes.STRING,
     mobile_phone: DataTypes.STRING,
     street: DataTypes.STRING,
     city: DataTypes.STRING,
     number: DataTypes.INTEGER,
    },
    {
      // options
      sequelize,
      modelName: 'Member',
      tableName: 'member',
      createdAt: 'date_created',
      underscore: true,
      timestamps: false,
    },
  );
  return Member;
};