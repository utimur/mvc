const userModel = require('./model');

module.exports = {
    getAll: (req, res) => {
        return res.json(userModel.getAll())
    },
}
