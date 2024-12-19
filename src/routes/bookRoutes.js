const express = require('express');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /books/{libraryId}:
 *   post:
 *     summary: Adiciona um livro a uma biblioteca
 *     description: Adiciona um novo livro à biblioteca especificada pelo ID da biblioteca.
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: libraryId
 *         required: true
 *         description: ID da biblioteca à qual o livro será adicionado.
 *         schema:
 *           type: string
 *           example: "12345"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "O Hobbit"
 *               author:
 *                 type: string
 *                 example: "J.R.R. Tolkien"
 *               publishedYear:
 *                 type: integer
 *                 example: 1937
 *               genre:
 *                 type: string
 *                 example: "Fantasia"
 *     responses:
 *       201:
 *         description: Livro adicionado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Livro adicionado com sucesso."
 *       401:
 *         description: Não autorizado. Token inválido ou ausente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Não autorizado"
 *       400:
 *         description: Erro de validação. Dados fornecidos são inválidos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Dados inválidos"
 *       404:
 *         description: Biblioteca não encontrada. O ID da biblioteca não existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Biblioteca não encontrada"
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro interno do servidor"
 */

/**
 * @swagger
 * /books/{libraryId}/{id}:
 *   put:
 *     summary: Atualiza informações de um livro na biblioteca
 *     description: Atualiza os dados de um livro específico na biblioteca, com base no ID da biblioteca e ID do livro.
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: libraryId
 *         required: true
 *         description: ID da biblioteca onde o livro será atualizado.
 *         schema:
 *           type: string
 *           example: "12345"
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser atualizado.
 *         schema:
 *           type: string
 *           example: "67890"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "O Senhor dos Anéis"
 *               author:
 *                 type: string
 *                 example: "J.R.R. Tolkien"
 *               publishedYear:
 *                 type: integer
 *                 example: 1954
 *               genre:
 *                 type: string
 *                 example: "Fantasia"
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Livro atualizado com sucesso."
 *       401:
 *         description: Não autorizado. Token inválido ou ausente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Não autorizado"
 *       404:
 *         description: Livro ou biblioteca não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Livro não encontrado"
 *       400:
 *         description: Erro de validação. Dados fornecidos são inválidos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Dados inválidos"
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro interno do servidor"
 */

/**
 * @swagger
 * /books/{libraryId}/{id}:
 *   delete:
 *     summary: Deleta um livro da biblioteca
 *     description: Remove um livro da biblioteca especificada pelo ID da biblioteca e ID do livro.
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: libraryId
 *         required: true
 *         description: ID da biblioteca de onde o livro será removido.
 *         schema:
 *           type: string
 *           example: "12345"
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser deletado.
 *         schema:
 *           type: string
 *           example: "67890"
 *     responses:
 *       200:
 *         description: Livro removido com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Livro removido com sucesso."
 *       401:
 *         description: Não autorizado. Token inválido ou ausente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Não autorizado"
 *       404:
 *         description: Livro ou biblioteca não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Livro não encontrado"
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro interno do servidor"
 */

router.post('/:libraryId/books', authMiddleware, bookController.addBook);
router.put('/:libraryId/books/:id', authMiddleware, bookController.updateBook);
router.delete('/:libraryId/books/:id', authMiddleware, bookController.deleteBook);

module.exports = router;
