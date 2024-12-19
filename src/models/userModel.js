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

const findUserByUsername = (username) => {
    const users = getUsers();
    return users.find((user) => user.username === username);
};

const initializeAdmin = async () => {
    const users = getUsers();
    const adminExists = users.some((user) => user.role === 'admin');

    if (!adminExists) {
        const admin = {
            username: 'admin',
            password: 'admin123',
            role: 'admin',
            name: 'Administrador Padrão',
        };
        await createUser(admin);
        console.log('Usuário administrador criado com sucesso!');
    }
};

module.exports = { getUsers, createUser, findUserByUsername, initializeAdmin };
