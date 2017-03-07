/**
* Doc_otchujdenyaController
*
* @description :: Server-side logic for managing doc_otchujdenyas
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/
var fs = require('fs');

module.exports = {
	findAll: function(req, res, next)  {
		Nasledstva.findAll({
			include: [{
				model: Nota_act, as: 'NotactAS', include: [{ model: Spravochnik, as: 'SpravochnikAS'},{ model: Uslugi, as: 'UslugiAS'}]
			}]
		})
		.then(function (docs) {
			return res.json(docs);
		})
		.catch(function (err) {
			return res.status(500).json({error: err});
		});
	},
	uploadFile: function(req, res, next) {
		console.log(res.body);
		var name = res.body;
		console.log('hi');
		fs.open("uploads/doc.docx", "w+", 0644, function(err, file_handle) {
			if (!err) {
				fs.write(file_handle,name , null, 'utf-8', function(err, written) {
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
};
