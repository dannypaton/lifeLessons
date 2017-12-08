const User = require('./model.js');
const users = {};

// GET
users.getUser = (req, res, next) => {
	User.find(function (err, docs) {
		if (err) {
			res.status(400).send(err)
		}
		res.status(200).send(docs)
	});
};

// POST
users.createUser = (req, res) => {
	const userModel = new User();
	const user = Object.assign(userModel, req.body);

	user.dateCreated = new Date()
	user.active = true
	user.private = false

	user.save((err, doc) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).send(doc);
	});
}

// DELETE
users.deleteUser = (req, res) => {
	const userId = req.params.id;
	user.remove({ _id: userId }, (err, doc) => {
	    if (err) {
	        res.status(500).send(err);
	    } else {
	        res.status(200).json({ message: 'Successfully Deleted!' });
	    }
	});
}

//UPDATE
users.updateUser = (req, res) => {
	// const model = req.body;
	// console.log('body:', req.body);
	// const movie = Movie.findById(req.params.id, (err, doc) => {
	//     if (err) {
	//         res
	//             .status(500)
	//             .send(err);
	//     } else {
	//         delete req.body._id;
	//         const updatedMovie = Object.assign(doc, model);
	//         updatedMovie.save((err, doc) => {
	//             if (err) {
	//                 res
	//                     .status(500)
	//                     .send(err);
	//             } else {
	//                 res
	//                     .status(200)
	//                     .send(doc);
	//             }
	//         });
	//     }
	// });
}

module.exports = users;