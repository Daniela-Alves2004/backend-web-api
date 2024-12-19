const userModel = require('../models/userModel');

const createUser = async (req, res, next) => {
    try {
        const user = await userModel.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = { createUser };
