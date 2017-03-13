/**
* Zayava.js
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
      unique: "id_pkey_zayavleniya",
      allowNull: false
    },
    title: {
      type: Sequelize.TEXT,
      field: "title"
    }
  },
  associations: function () {
    Zayavleniya.hasMany(Nota_act,{as:"NotactAS",foreignKey:'doc_name_id'}),
    Zayavleniya.hasMany(Settings,{as:"SettingsAS",foreignKey:'doc_name_id'})
  },
  options: {
    tableName: "zayavlenya",
    freezeTableName: false,
    timestamps: true,
    underscored: true,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
