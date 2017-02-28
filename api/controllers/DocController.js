"use strict";

/**
 * DocumentController
 *
 * @description :: Server-side logic for managing documents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findDoc: function (req, res) {
  		DocService.findAll()
      .then(function (result) {
        return res.json(result);
      })
      .catch(function (err) {
        return res.status(500).json({error: err});
      });
  },
};
