const bookModel = require('../models/bookModel');

const addBook = (req, res, next) => {
    try {
        const { libraryId } = req.params;
        const book = bookModel.addBookToLibrary(Number(libraryId), req.body);
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
};

const updateBook = (req, res, next) => {
    try {
        const { libraryId, id } = req.params;
        const updatedBook = bookModel.updateBookInLibrary(Number(libraryId), Number(id), req.body);
        res.json(updatedBook);
    } catch (error) {
        next(error);
    }
};

const deleteBook = (req, res, next) => {
    try {
        const { libraryId, id } = req.params;
        bookModel.deleteBookFromLibrary(Number(libraryId), Number(id));
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = { addBook, updateBook, deleteBook };
