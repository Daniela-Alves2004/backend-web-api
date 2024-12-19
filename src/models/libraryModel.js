const { readJSON, writeJSON } = require('../utils/jsonManager');
const FILE = 'libraries';

const getLibraries = () => readJSON(FILE);
const saveLibraries = (libraries) => writeJSON(FILE, libraries);

const createLibrary = (libraryData) => {
    const libraries = getLibraries();
    const newLibrary = { id: Date.now(), ...libraryData, books: [] };
    libraries.push(newLibrary);
    saveLibraries(libraries);
    return newLibrary;
};

const updateLibrary = (id, libraryData) => {
    const libraries = getLibraries();
    const index = libraries.findIndex((lib) => lib.id === id);
    if (index === -1) throw { status: 404, message: 'Biblioteca não encontrada' };
    libraries[index] = { ...libraries[index], ...libraryData };
    saveLibraries(libraries);
    return libraries[index];
};

const deleteLibrary = (id) => {
    const libraries = getLibraries();
    const updatedLibraries = libraries.filter((lib) => lib.id !== id);
    saveLibraries(updatedLibraries);
    return updatedLibraries;
};

module.exports = { getLibraries, createLibrary, updateLibrary, deleteLibrary };
