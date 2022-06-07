const { Sequelize, DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define(
    'recipes',
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Cannot be null'
          }
        }
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Cannot be null'
          },
          len: {
            args: [3, 255],
            msg: 'minimum 3 letters'
          }
        }
      },

      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Cannot be null'
          }
        }
      },
      healthScore: {
        type: DataTypes.DECIMAL
      },
      steps: {
        type: DataTypes.TEXT
      }
    },
    {
      timestamps: false
    }
  )
}
