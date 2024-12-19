const express = require('express');
const libraryController = require('../controllers/libraryController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, libraryController.listLibraries);
router.post('/', authMiddleware, libraryController.createLibrary);
router.put('/:id', authMiddleware, libraryController.updateLibrary);
router.delete('/:id', authMiddleware, libraryController.deleteLibrary);

module.exports = router;
