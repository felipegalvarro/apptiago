'use strict';
module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define('Endereco', {
    cep: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logradouro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    localidade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uf: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Endereco.associate = function(models) {
    // associations can be defined here
  };
  return Endereco;
};
