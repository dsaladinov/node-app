/**
 * SettingsController
 *
 * @description :: Server-side logic for managing settings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res, next) {
			res.view('settings/index');
	},
	uslugi: function(req, res, next) {
			res.view('settings/uslugi');
	},
	documents: function(req, res, next) {
			res.view('settings/documents');
	}
};
