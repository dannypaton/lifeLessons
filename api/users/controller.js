const User = require('./model.js');
const users = {};

// GET
users.getUser = (req, res, next) => {
	if (req.user) {
		res.status(200).send(req.user);
	} else {
		res.status(500).send({
			message: "No user",
		});
	}
};

// POST
users.createUser = (req, res) => {
	const newUser = new User({
	  username: req.body.username,
	  name: req.body.name,
	  email: req.body.email,
	  dateCreated: new Date(),
	  active: true
	}) 

	User.register(newUser, req.body.password, (err, user) => {
	  if (err) {
	    res.status(500).send(err)
	  } else {
	    req.logIn(user, (err) => {
	      res.status(200).send(user)
	    })
	  }
	})
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