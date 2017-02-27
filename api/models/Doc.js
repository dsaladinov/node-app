/**
 * Document.js
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
      unique: "id_pkey_doc",
      allowNull: false
    },
    docNameId: {
      type:Sequelize.INTEGER,
      field:"doc_name_id"
    }
  },
  associations: function () {
    
},
  // Doc.belongsTo(Spravochnik,{as:"SpravochnikAS",foreignKey:'doc_name_id'})},
  options: {
    tableName: "doc",
    freezeTableName: false,
    timestamps: true,
    underscored: true,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
