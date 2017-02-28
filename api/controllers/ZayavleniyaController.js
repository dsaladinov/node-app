/**
* Doc_otchujdenyaController
*
* @description :: Server-side logic for managing doc_otchujdenyas
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	findAll: function(req, res, next)  {
		Zayavleniya.findAll({
				include: [{
					model: Nota_act, as: 'NotactAS', include: [{ model: Spravochnik, as: 'SpravochnikAS'}]
								 }]
									 })
		.then(function (docs) {
			return res.json(docs);
		})
		.catch(function (err) {
			return res.status(500).json({error: err});
		});
	}
};
