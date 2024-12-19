const libraryModel = require('../models/libraryModel');

const listLibraries = (req, res, next) => {
    try {
        const { limit = 10, page = 1 } = req.query;
        const libraries = libraryModel.getLibraries();
        const paginated = libraries.slice((page - 1) * limit, page * limit);
        res.json(paginated);
    } catch (error) {
        next(error);
    }
};

const createLibrary = (req, res, next) => {
    try {
        const library = libraryModel.createLibrary(req.body);
        res.status(201).json(library);
    } catch (error) {
        next(error);
    }
};

const updateLibrary = (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedLibrary = libraryModel.updateLibrary(Number(id), req.body);
        res.json(updatedLibrary);
    } catch (error) {
        next(error);
    }
};

const deleteLibrary = (req, res, next) => {
    try {
        const { id } = req.params;
        libraryModel.deleteLibrary(Number(id));
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = { listLibraries, createLibrary, updateLibrary, deleteLibrary };
