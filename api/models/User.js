/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    id: {
      type:Sequelize.INTEGER,
      field:"id",
      primaryKey: true,
      autoIncrement:true,
      unique: "id_pkey_user",
      allowNull: false
    },
    name: {
      type: Sequelize.TEXT,
      required: true
    },
    title: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.TEXT,
      email: true,
      required: true,
      unique: true
    },

    // The encrypted password for the user
    // e.g. asdgh8a249321e9dhgaslcbqn2913051#T(@GHASDGA
    encryptedPassword: {
      type: Sequelize.TEXT,
      required: true
    },

    // The timestamp when the the user last logged in
    // (i.e. sent a username and password to the server)
    lastLoggedIn: {
      type: Sequelize.DATE,
      required: true,
      defaultsTo: new Date(0)
    },

    // url for gravatar
    gravatarUrl: {
      type:Sequelize.TEXT
    }
  },
  options: {
    tableName: "user",
    freezeTableName: false,
    timestamps: true,
    underscored: true,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
