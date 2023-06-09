const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mensaje', {
    id_mensaje: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario_mensaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    },
    id_usuario2_mensaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'mensaje',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mensaje" },
        ]
      },
      {
        name: "id_usuario_mensaje",
        using: "BTREE",
        fields: [
          { name: "id_usuario_mensaje" },
        ]
      },
      {
        name: "id_usuario2_mensaje",
        using: "BTREE",
        fields: [
          { name: "id_usuario2_mensaje" },
        ]
      },
    ]
  });
};
