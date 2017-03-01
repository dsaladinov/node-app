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

			Nota_act.create(data).exec(function (err, acts) {

					res.redirect('/nota_act/create');

					if (err) {
							return res.send(500);
					}

			});

	},
  upload: function  (req, res) {
    req.file('file').upload({
    	dirname: 'uploads/',
    },function (err, files) {
      if (err)
        return res.serverError(err);

      return res.json({
        message: files.length + ' Выгрузка файл(ов) завершена!',
        files: files
      });
    });
  }

};
