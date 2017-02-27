/**
 * Clients.js
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
      unique: "id_pkey_clients",
      allowNull: false
    }
  },
  associations: function () {
  Clients.hasMany(Fiz_clients,{as:"FizClientsAS",foreignKey:'clients_id'}),
  Clients.hasMany(Ur_clients,{as:"UrClientsAS",foreignKey:'clients_id'})

},
options: {
    freezeTableName: false,
    tableName: "clients",
    timestamps: true,
    underscored: true,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
