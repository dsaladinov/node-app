/**
 * Settings.js
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
      unique: "id_pkey_settings",
      allowNull: false
    },
    doc_name_id: {
      type: Sequelize.INTEGER,
      unique:true,
      field: "doc_name_id"
    },
    spr_name_id:{
      type: Sequelize.INTEGER,
      field:"spr_name_id"
    },
    uslugi_name_id:{
     type: Sequelize.INTEGER,
     field:"uslugi_name_id"
   }
 },
 associations: function () {
   Doc_otchujdenya.belongsTo(Doc_otchujdenya,{as:"DocOtchujdenyaAS",foreignKey:'doc_name_id'}),
   Settings.belongsTo(Doc_otchujdenya,{as:"DocOtchujdenyaAS",foreignKey:'doc_name_id'}),

   Doc_Prochie.belongsTo(Doc_Prochie,{as:"DocProchieAS",foreignKey:'doc_name_id'}),
   Settings.belongsTo(Doc_Prochie,{as:"DocProchieAS",foreignKey:'doc_name_id'}),

   Doverennosti.belongsTo(Doverennosti,{as:"DoverennostiAS",foreignKey:'doc_name_id'}),
   Settings.belongsTo(Doverennosti,{as:"DoverennostiAS",foreignKey:'doc_name_id'}),

   Nasledstva.belongsTo(Nasledstva,{as:"NasledstvaAS",foreignKey:'doc_name_id'}),
   Settings.belongsTo(Nasledstva,{as:"NasledstvaAS",foreignKey:'doc_name_id'}),

   Prochie_dogovora.belongsTo(Prochie_dogovora,{as:"ProchieDogovorAS",foreignKey:'doc_name_id'}),
   Settings.belongsTo(Prochie_dogovora,{as:"ProchieDogovorAS",foreignKey:'doc_name_id'}),

   Zaveshaniya.belongsTo(Zaveshaniya,{as:"ZaveshaniyAS",foreignKey:'doc_name_id'}),
   Settings.belongsTo(Zaveshaniya,{as:"ZaveshaniyAS",foreignKey:'doc_name_id'}),

   Zayavleniya.belongsTo(Zayavleniya,{as:"ZayavleniyAS",foreignKey:'doc_name_id'}),
   Settings.belongsTo(Zayavleniya,{as:"ZayavleniyAS",foreignKey:'doc_name_id'}),

   Settings.belongsTo(Spravochnik,{as:"SpravochnikAS",foreignKey:'spr_name_id'}),
   Settings.belongsTo(Uslugi,{as:"UslugiAS",foreignKey:'uslugi_name_id'})

 },
options: {
 tableName: "settings",
 freezeTableName: false,
 timestamps: true,
 underscored: true,
 classMethods: {},
 instanceMethods: {},
 hooks: {}
}
};
