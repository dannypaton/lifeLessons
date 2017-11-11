const Lesson = require('./model.js')
const lessons = {}

// GET
lessons.getLessons = (req, res, next) => {
    Lesson.find(function (err, docs) {
        if (err) {
            res
                .status(400)
                .send(err)
        } else {
            res
                .status(200)
                .send(docs)
        }
    })
}

// POST
lessons.postLesson = (req, res, next) => {
    const lessonModel = new Lesson()
    const lesson = Object.assign(lessonModel, req.body)
    lesson.save((err, doc) => {
        if (err) {
            res
                .status(500)
                .send(err)
        }
        console.log(doc)
        res
            .status(200)
            .send(doc)
    })
}

// DELETE
lessons.deleteLesson = (req, res) => {
    // const movieId = req.params.id
    // Movie.remove({ _id: movieId }, (err, doc) => {
    //     if (err) {
    //         res
    //             .status(500)
    //             .send(err)
    //     } else {
    //         res
    //             .status(200)
    //             .json({ message: 'Successfully Deleted!' })
    //     }
    // })
}

//UPDATE
lessons.updateLesson = (req, res) => {
    // const model = req.body
    // console.log('body:', req.body)
    // const movie = Movie.findById(req.params.id, (err, doc) => {
    //     if (err) {
    //         res
    //             .status(500)
    //             .send(err)
    //     } else {
    //         delete req.body._id
    //         const updatedMovie = Object.assign(doc, model)
    //         updatedMovie.save((err, doc) => {
    //             if (err) {
    //                 res
    //                     .status(500)
    //                     .send(err)
    //             } else {
    //                 res
    //                     .status(200)
    //                     .send(doc)
    //             }
    //         })
    //     }
    // })
}

module.exports = lessons