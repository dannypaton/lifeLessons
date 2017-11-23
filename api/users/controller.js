const User = require('./model.js');
const users = {};

// GET
users.getUsers = (req, res) => {
    console.log(req, 'req', res, 'res')
    // User.find(function (err, docs) {
    //     if (err) {
    //         res
    //             .status(400)
    //             .send(err)
    //     } else {
    //         res
    //             .status(200)
    //             .send(docs)
    //     }
    // });
};

// POST
users.createUser = (req, res) => {
    const userModel = new User();
    console.log(req, 'req in create user', res)
    // const user = Object.assign(userModel, req.body);
    // user.save((err, doc) => {
    //     console.log(doc, 'docc')
    //     if (err) {
    //         res
    //             .status(500)
    //             .send(err);
    //     }
    //     res
    //         .status(200)
    //         .send(doc);
    // });
}

// DELETE
users.deleteMovie = (req, res) => {
    // const movieId = req.params.id;
    // Movie.remove({ _id: movieId }, (err, doc) => {
    //     if (err) {
    //         res
    //             .status(500)
    //             .send(err);
    //     } else {
    //         res
    //             .status(200)
    //             .json({ message: 'Successfully Deleted!' });
    //     }
    // });
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