/**
 * HelpController
 *
 * @description :: Server-side logic for managing helps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req, res, next)  {
		res.view('help/index')
	}
};
