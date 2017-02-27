/**
 * Urclient.js
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
      unique: "id_pkey_ur_clients",
      allowNull: false
    },
    clientsId: {
      type: Sequelize.INTEGER,
      field: "clients_id"
    },
     name_company :{
      type:Sequelize.STRING,
      required:true
    },
     ur_inn : {
      type:Sequelize.INTEGER,
      required: true
    },
     registration_num : {
      type:Sequelize.INTEGER,
      required: true
    },
     ur_address : {
      type: Sequelize.TEXT,
      required:true
    },
     cod_okpo : {
      type:Sequelize.TEXT,
      required: true
    },
     position : {
      type:Sequelize.TEXT,
      required: true
    },
     surname : {
      type: Sequelize.TEXT,
      required: true
    },
     name : {
      type: Sequelize.TEXT,
      required: true
    },
     otchestvo : {
      type:Sequelize.TEXT,
      required: true
    },
     phone : {
      type:Sequelize.TEXT,
      required: true
    },
     bank_name : {
      type:Sequelize.TEXT,
      required: true
    },
     bik : {
      type:Sequelize.TEXT,
      required: true
    },
     num_chet_poluchatelya : {
      type: Sequelize.TEXT,
      required:true
    }
  },
  associations: function () {
    Ur_clients.belongsTo(Clients,{as:"ClientsAS",foreignKey:'clients_id'})
  },
  options: {
    tableName:  "ur_clients" ,
    freezeTableName: false,
    timestamps: true,
    underscored: true,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
