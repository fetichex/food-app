const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define(
    'diets',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: true
    }
  )
}
