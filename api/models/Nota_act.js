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
    // ----- for fiz_clients-->
    fiz_surname:{
      type: Sequelize.TEXT,
      field: "fiz_surname"
    },
    fiz_name:{
      type: Sequelize.TEXT,
      field: "fiz_name"
    },
    fiz_otchestvo: {
      type: Sequelize.TEXT,
      field: "fiz_otchestvo"
    },
    fiz_passport_serial: {
      type:Sequelize.TEXT,
      field: "fiz_passport_serial"
    },
    fiz_passport_num: {
      type:Sequelize.INTEGER,
      field: "fiz_passport_num"
    },
    fiz_organ_vydachi_passport: {
      type: Sequelize.TEXT,
      field: "fiz_organ_vydachi_passport"
    },
    fiz_inn: {
      type:Sequelize.INTEGER,
      field: "fiz_inn"
    },
    fiz_date_vydachi_passport: {
      type: Sequelize.DATE,
      field: "fiz_data_vydachi_passport"
    },
    fiz_srok_deistviya_passport: {
      type:Sequelize.DATE,
      field: "fiz_srok_deistviya_passport"
    },
    fiz_nike: {
      type:Sequelize.TEXT,
      field: "fiz_nike"
    },
    fiz_address_propiski: {
      type: Sequelize.TEXT,
      field: "address_propiski"
    },
    fiz_fact_propiski: {
      type:Sequelize.TEXT,
      field: "fiz_fact_propiski"
    },
    //----end fiz_clients---------<

    // for ur_clients
    ur_name_company :{
     type:Sequelize.STRING,
     field: "ur_name_company"
   },
    ur_inn : {
     type:Sequelize.INTEGER,
     field: "ur_inn"
   },
    ur_registration_num : {
     type:Sequelize.INTEGER,
     field: "ur_registration_num"
   },
    ur_address : {
     type: Sequelize.TEXT,
     field: "ur_address"
   },
    ur_cod_okpo : {
     type:Sequelize.TEXT,
     field: "ur_cod_okpo"
   },
    ur_position : {
     type:Sequelize.TEXT,
     field: "ur_position"
   },
    ur_surname : {
     type: Sequelize.TEXT,
     field: "ur_surname"
   },
    ur_name : {
     type: Sequelize.TEXT,
     field: "ur_name"
   },
    ur_otchestvo : {
     type:Sequelize.TEXT,
     field: "ur_otchestvo"
   },
    ur_phone : {
     type:Sequelize.TEXT,
     field: "ur_phone"
   },
    ur_bank_name : {
     type:Sequelize.TEXT,
     field: "ur_bank_name"
   },
    ur_bik : {
     type:Sequelize.TEXT,
     field: "ur_bik"
   },
    ur_num_chet_poluchatelya : {
     type: Sequelize.TEXT,
     field: "ur_num_chet_poluchatelya"
   },
   // end ur_clients

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
