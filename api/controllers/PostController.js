/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {

			var data = {
					title           : req.param('title')
			};

			Post.create(data).exec(function (err, post) {

					res.redirect('/post');

					if (err) {
							return res.send(500);
					}

			});

	},
		index: function(req, res, next)  {
			Post.find(function foundPosts (err, posts){
	  if (err) { return next(err); }
  			res.view({ posts: posts
	});
});
		}



};
