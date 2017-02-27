/**
 * Spravochnik.js
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
      unique: "id_pkey_spravochnik",
      allowNull: false
    },
    title: {
      type: Sequelize.TEXT,
      field: "title_doc"
    }

  },
  associations: function () {
    Spravochnik.hasMany(Nota_act,{as:"NotactAS",foreignKey:'spr_name_id'})
  },
  options: {
    tableName: "spravochnik",
    freezeTableName: false,
    timestamps: true,
    underscored: true,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
// //Spravochnik.hasMany(Doc_otchujdenya,{as:"DocOtchujdenyaAS",foreignKey:'id_spr'}),
// Spravochnik.hasMany(Doc_Prochie,{as:"DocProchieAS",foreignKey:'doc_name_id'}),
// Spravochnik.hasMany(Doverennosti,{as:"DoverennostiAS",foreignKey:'doc_name_id'}),
// Spravochnik.hasMany(Nasledstva,{as:"NasledstvaAS",foreignKey:'doc_name_id'}),
// Spravochnik.hasMany(Prochie_dogovora,{as:"ProchieDogovoraAS",foreignKey:'doc_name_id'}),
// Spravochnik.hasMany(Zaveshaniya,{as:"ZaveshaniyaAS",foreignKey:'doc_name_id'}),
// Spravochnik.hasMany(Zayavleniya,{as:"ZayavleniyaAS",foreignKey:'doc_name_id'}),
