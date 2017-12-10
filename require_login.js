module.exports = (req, res, next) => {
    if (req.user === undefined) {
        res.status(401).send('User is not authorized');
    } else {
        next();
    }
}