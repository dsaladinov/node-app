/**
* Paperwork.js
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
      unique: "id_pkey_nota",
      // required: true,
      allowNull: false
    },
    sobsvennik: {
      type: Sequelize.TEXT,
      maxLength: 1024,
      required: false
    },
    fiz_clients: {
      type:Sequelize.INTEGER,
      required: true,
      model: 'fiz_clients'
    },
    ur_clients: {
      type:Sequelize.INTEGER,
      required: true,
      model: 'ur_clients'
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
      Nota_act.belongsTo(Doc_otchujdenya,{as:"DocOtchujdenyaAS",foreignKey:'doc_name_id'}),

      Doc_Prochie.belongsTo(Doc_Prochie,{as:"DocProchieAS",foreignKey:'doc_name_id'}),
      Nota_act.belongsTo(Doc_Prochie,{as:"DocProchieAS",foreignKey:'doc_name_id'}),

      Doverennosti.belongsTo(Doverennosti,{as:"DoverennostiAS",foreignKey:'doc_name_id'}),
      Nota_act.belongsTo(Doverennosti,{as:"DoverennostiAS",foreignKey:'doc_name_id'}),

      Nasledstva.belongsTo(Nasledstva,{as:"NasledstvaAS",foreignKey:'doc_name_id'}),
      Nota_act.belongsTo(Nasledstva,{as:"NasledstvaAS",foreignKey:'doc_name_id'}),

      Prochie_dogovora.belongsTo(Prochie_dogovora,{as:"ProchieDogovorAS",foreignKey:'doc_name_id'}),
      Nota_act.belongsTo(Prochie_dogovora,{as:"ProchieDogovorAS",foreignKey:'doc_name_id'}),

      Zaveshaniya.belongsTo(Zaveshaniya,{as:"ZaveshaniyAS",foreignKey:'doc_name_id'}),
      Nota_act.belongsTo(Zaveshaniya,{as:"ZaveshaniyAS",foreignKey:'doc_name_id'}),

      Zayavleniya.belongsTo(Zayavleniya,{as:"ZayavleniyAS",foreignKey:'doc_name_id'}),
      Nota_act.belongsTo(Zayavleniya,{as:"ZayavleniyAS",foreignKey:'doc_name_id'}),

      Nota_act.belongsTo(Spravochnik,{as:"SpravochnikAS",foreignKey:'spr_name_id'}),
      Nota_act.belongsTo(Uslugi,{as:"UslugiAS",foreignKey:'uslugi_name_id'})

    },
  options: {
    tableName: "nota_act",
    freezeTableName: false,
    timestamps: true,
    underscored: true,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};


// service_price: {
//   type: Sequelize.INTEGER,
//   required: true
// },
// reest_num: {
//   type:Sequelize.INTEGER,
//   required: true
// },
// date: {
//   type: Sequelize.DATE,
//   required: true
// },
// kto: {
//   type:Sequelize.TEXT,
//   required: true,
//   maxLength: 50
// },
// komu: {
//   type:Sequelize.TEXT,
//   required: true,
//   maxLength: 50
// },
// id_kto: {
//   type:Sequelize.INTEGER,
//   required: true,
//   foreignKey: {
//     title1: 'fiz_clients',
//     title2: 'ur_clients',
//     as: 'clients'
//   }
// },
