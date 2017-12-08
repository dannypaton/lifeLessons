module.exports = (req, res, next) => {
    if (req.user === undefined) {
        res.send(401);
    } else {
        next();
    }
}