const userModel = require('./server.user.model');


function createUser(req, res) {
    userModel.create(req.body, (err, result) => {
        if (err) {
            return res.json({ code: 1, message: err })
        } else {
            return res.json({ code: 0, message: 'Success', data: result });
        }
    })
}



module.exports = {
    createUser
}