require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const libraryRoutes = require('./src/routes/libraryRoutes');
const bookRoutes = require('./src/routes/bookRoutes');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const docsRoutes = require('./src/routes/docs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

// Rotas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/libraries', libraryRoutes);
app.use('/books', bookRoutes);
app.use('/docs', docsRoutes);

// Middleware de erros
app.use(errorMiddleware);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
