/**
 * Fizclient.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type:Sequelize.INTEGER,
      field:"id",
      primaryKey: true,
      autoIncrement:true,
      unique: "id_pkey_fiz_client",
      allowNull: false
    },
    clientsId: {
      type: Sequelize.INTEGER,
      field: "clients_id"
    },
    surname:{
      type: Sequelize.TEXT,
      field: "surname"
    },
    name:{
      type: Sequelize.TEXT,
      field: "name"
    },
    otchestvo: {
      type: Sequelize.TEXT,
      field: "otchestvo"
    },
    passport_serial: {
      type:Sequelize.TEXT,
      field: "passport_serial"
    },
    passport_num: {
      type:Sequelize.INTEGER,
      field: "passport_num"
    },
    organ_vydachi_passport: {
      type: Sequelize.TEXT,
      field: "organ_vydachi_passport"
    },
    fiz_inn: {
      type:Sequelize.INTEGER,
      field: "fiz_inn"
    },
    date_vydachi_passport: {
      type: Sequelize.DATE,
      field: "data_vydachi_passport"
    },
    srok_deistviya_passport: {
      type:Sequelize.DATE,
      field: "srok_deistviya_passport"
    },
    nike: {
      type:Sequelize.TEXT,
      field: "nike"
    },
    address_propiski: {
      type: Sequelize.TEXT,
      field: "address_propiski"
    },
    fact_propiski: {
      type:Sequelize.TEXT,
      field: "fact_propiski"
    }
  },
  associations: function () {
    Fiz_clients.belongsTo(Clients,{as:"ClientsAS",foreignKey:'clients_id'})
  },
  options: {
    tableName: "fiz_clients",
    freezeTableName: false,
    timestamps: true,
    underscored: true,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
