/**
 * Zaveshaniya.js
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
      unique: "id_pkey_zaveshaniya",
      allowNull: false
    },
    title: {
      type: Sequelize.TEXT,
      field: "title"
    }
  },
  associations: function () {
    Zaveshaniya.hasMany(Nota_act,{as:"NotactAS",foreignKey:'doc_name_id'}),
    Zaveshaniya.hasMany(Settings,{as:"SettingsAS",foreignKey:'doc_name_id'})
  },
  options: {
    tableName: "zaveshaniya",
    freezeTableName: false,
    timestamps: true,
    underscored: true,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
