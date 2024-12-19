const express = require('express');
const libraryController = require('../controllers/libraryController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /libraries:
 *   get:
 *     summary: Lista todas as bibliotecas
 *     description: Retorna uma lista de todas as bibliotecas cadastradas no sistema.
 *     tags: [Bibliotecas]
 *     responses:
 *       200:
 *         description: Lista de bibliotecas retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "12345"
 *                   name:
 *                     type: string
 *                     example: "Biblioteca Central"
 *                   location:
 *                     type: string
 *                     example: "Centro da cidade"
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
 * /libraries:
 *   post:
 *     summary: Cria uma nova biblioteca
 *     description: Cria uma nova biblioteca no sistema com os dados fornecidos.
 *     tags: [Bibliotecas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Biblioteca Municipal"
 *               location:
 *                 type: string
 *                 example: "Rua das Flores, 123"
 *     responses:
 *       201:
 *         description: Biblioteca criada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Biblioteca criada com sucesso."
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
 * /libraries/{id}:
 *   put:
 *     summary: Atualiza uma biblioteca existente
 *     description: Atualiza as informações de uma biblioteca existente com base no ID fornecido.
 *     tags: [Bibliotecas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da biblioteca que será atualizada.
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
 *               name:
 *                 type: string
 *                 example: "Biblioteca Municipal Nova"
 *               location:
 *                 type: string
 *                 example: "Rua Nova, 456"
 *     responses:
 *       200:
 *         description: Biblioteca atualizada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Biblioteca atualizada com sucesso."
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
 *         description: Biblioteca não encontrada. O ID fornecido não existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Biblioteca não encontrada"
 *       400:
 *         description: Dados inválidos fornecidos para atualização.
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
 * /libraries/{id}:
 *   delete:
 *     summary: Deleta uma biblioteca
 *     description: Remove uma biblioteca do sistema com base no ID fornecido.
 *     tags: [Bibliotecas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da biblioteca a ser removida.
 *         schema:
 *           type: string
 *           example: "12345"
 *     responses:
 *       200:
 *         description: Biblioteca removida com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Biblioteca removida com sucesso."
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
 *         description: Biblioteca não encontrada. O ID fornecido não existe.
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

router.get('/', authMiddleware, libraryController.listLibraries);
router.post('/', authMiddleware, libraryController.createLibrary);
router.put('/:id', authMiddleware, libraryController.updateLibrary);
router.delete('/:id', authMiddleware, libraryController.deleteLibrary);

module.exports = router;
