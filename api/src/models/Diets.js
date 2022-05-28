const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define(
    'diets',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  )
}
