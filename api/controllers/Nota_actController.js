/**
 * PaperworkController
 *
 * @description :: Server-side logic for managing paperworks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var fs = require('fs');


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

  uploadFile: function(req, res, next) {

    var data = {
        fiz_name               : req.param('fiz_name'),
        fiz_surname               : req.param('fiz_surname')
    };
    // data = data.fiz_name + data.fiz_surname;
    console.log(data.fiz_name);
    console.log(data.fiz_surname);
    	fs.open("uploads/doc.docx", "w+", 0644, function(err, file_handle) {
			if (!err) {
				fs.write(file_handle,data.fiz_name, null, 'utf-8', function(err, written) {
					if (!err) {
						console.log("Текст успешно записан в файл");
					} else {
						console.log("Произошла ошибка при записи");
					}
				});
			} else {
				console.log("Произошла ошибка при открытии");
			}
		});
	}
  // upload: function  (req, res) {
  //   req.file('file').upload({
  //   	dirname: 'uploads/',
  //   },function (err, files) {
  //     if (err)
  //       return res.serverError(err);
  //
  //     return res.json({
  //       message: files.length + ' Выгрузка файл(ов) завершена!',
  //       files: files
  //     });
  //   });
  // }

};
