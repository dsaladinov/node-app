/**
 * Uslugi.js
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
      unique: "id_pkey_uslugi",
      allowNull: false
    },
    gos_poshlina  :{
      type: Sequelize.INTEGER,
      field:"gos_poshlina"
    },
    marja: {
      type: Sequelize.INTEGER,
      field:"marja"
    },
    price: {
      type: Sequelize.INTEGER,
      field:"price"
    }
  },
  associations: function () {
    Uslugi.hasMany(Nota_act,{as:"NotactAS",foreignKey:'uslugi_name_id'}),
    Uslugi.hasMany(Settings,{as:"SettingsAS",foreignKey:'uslugi_name_id'})
  },
  options: {
    tableName:  "uslugi" ,
    freezeTableName: false,
    timestamps: true,
    underscored: true,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
