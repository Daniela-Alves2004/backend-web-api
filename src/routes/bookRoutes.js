const express = require('express');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/:libraryId/books', authMiddleware, bookController.addBook);
router.put('/:libraryId/books/:id', authMiddleware, bookController.updateBook);
router.delete('/:libraryId/books/:id', authMiddleware, bookController.deleteBook);

module.exports = router;
