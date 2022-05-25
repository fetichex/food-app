const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define('recipes', {
    id: {
      type: DataTypes.UUID,
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
        isAlpha: {
          args: true,
          msg: 'can only contain letterss'
        },
        len: {
          args: [4, 255],
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
    health: {
      type: DataTypes.DECIMAL
    },
    steps: {
      type: DataTypes.TEXT
    }
  })
}
