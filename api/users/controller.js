const User = require('./model.js')
const users = {}

// GET
users.getUser = (req, res, next) => {
	if (req.user) {
		res.status(200).send(req.user)
	} else {
		res.status(500).send({
			message: "No user",
		})
	}
}

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
	// const userId = req.params.id
	// user.remove({ _id: userId }, (err, doc) => {
	//     if (err) {
	//         res.status(500).send(err)
	//     } else {
	//         res.status(200).json({ message: 'Successfully Deleted!' })
	//     }
	// })
}

//UPDATE
users.updateUser = (req, res) => {
	if (req.body.email) delete req.body.email
	User.findOne({ _id: req.params.id })
		.then(doc => {
			if (doc) {
				doc = Object.assign(doc, req.body)
				doc.save().then(updatedDoc => {
					res.send(updatedDoc)
				});
			}
		})
}

module.exports = users