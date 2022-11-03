const userModel = require('./model');

module.exports = {
    getAll: (req, res) => {
        const xmlUsers = XML.parse(userModel.getAll());
        return res.send(xmlUsers);
    },
}
