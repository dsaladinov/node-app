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
     service_name  :{
      type: Sequelize.STRING,
      required:true
    },
     price  :{
      type: 'float',
      required:true
    },
     gos_poshlina  :{
      type: Sequelize.STRING,
      required:true
    }
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
