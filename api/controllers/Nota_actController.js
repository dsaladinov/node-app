/**
 * PaperworkController
 *
 * @description :: Server-side logic for managing paperworks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req, res, next)  {

  },

  addNota: function (req, res) {

			var data = {
					kto               : req.param('kto'),
					sobsvennik           : req.param('sobsvennik'),
					komu           : req.param('komu'),
					service_price           : req.param('service_price'),
					reest_num           : req.param('reest_num'),
          date           : req.param('date')
			};

      // Doc_otchujdenya.findAll({
      //     include: [{
      //       model: Nota_act, as: 'NotactAS', include: [{ model: Spravochnik, as: 'SpravochnikAS'}]
      //     }]
      //                })
      // .then(function (docs) {
      //   return res.view({ docs: docs});
      // })
      // .catch(function (err) {
      //   return res.status(500).json({error: err});
      // });

			Nota_act.create(data).exec(function (err, acts) {

					res.redirect('/nota_act/create');

					if (err) {
							return res.send(500);
					}

			});

	}
};
