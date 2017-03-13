/**
 * UslugiController
 *
 * @description :: Server-side logic for managing uslugis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	update: function(req, res, next) {
				var id = req.param("uslugi_id");
				var marja = req.param("marja");
				var price =req.param("price");
				console.log(price);
				console.log(id);
				console.log(marja);

var values = { price: price };
var selector = { where: { id: id } };
				Uslugi.update(values, selector).then(function() {
    		res.view('settings/uslugi')
});
	}
};
