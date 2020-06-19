function makeCheckRoleMiddleware(role) {
    return function (req, res, next) {
        if (req.decodedJwt.role && req.decodedJwt.role === role) {
            next();
        } else {
            res.status(403).json({ you: 'please insure that you are using the right role for this action' });
        }
    }
}

module.exports = makeCheckRoleMiddleware;