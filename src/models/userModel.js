const bcrypt = require('bcrypt');
const { readJSON, writeJSON } = require('../utils/jsonManager');
const FILE = 'users';

const getUsers = () => readJSON(FILE);
const saveUsers = (users) => writeJSON(FILE, users);

const createUser = async (userData) => {
    const users = getUsers();
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = { id: Date.now(), ...userData, password: hashedPassword };
    users.push(newUser);
    saveUsers(users);
    return newUser;
};

module.exports = { getUsers, createUser };
