const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = userModel.findUserByUsername(username);

        if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ error: 'Credenciais inválidas' });

        const secretKey = process.env.SECRET;
        if (!secretKey) {
            throw new Error('A chave JWT_SECRET não está definida nas variáveis de ambiente');
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (error) {
        next(error);
    }
};

const install = async (req, res, next) => {
    try {
        await userModel.initializeAdmin();
        res.json({ message: 'Admin padrão criado com sucesso!' });
    } catch (error) {
        next(error);
    }
};

module.exports = { login, install };
