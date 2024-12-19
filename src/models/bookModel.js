const { getLibraries, saveLibraries } = require('./libraryModel');

const addBookToLibrary = (libraryId, bookData) => {
    const libraries = getLibraries();
    const library = libraries.find((lib) => lib.id === libraryId);
    if (!library) throw { status: 404, message: 'Biblioteca não encontrada' };

    const newBook = { id: Date.now(), ...bookData };
    library.books.push(newBook);
    saveLibraries(libraries);
    return newBook;
};

const updateBookInLibrary = (libraryId, bookId, bookData) => {
    const libraries = getLibraries();
    const library = libraries.find((lib) => lib.id === libraryId);
    if (!library) throw { status: 404, message: 'Biblioteca não encontrada' };

    const bookIndex = library.books.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) throw { status: 404, message: 'Livro não encontrado' };

    library.books[bookIndex] = { ...library.books[bookIndex], ...bookData };
    saveLibraries(libraries);
    return library.books[bookIndex];
};

const deleteBookFromLibrary = (libraryId, bookId) => {
    const libraries = getLibraries();
    const library = libraries.find((lib) => lib.id === libraryId);
    if (!library) throw { status: 404, message: 'Biblioteca não encontrada' };

    library.books = library.books.filter((book) => book.id !== bookId);
    saveLibraries(libraries);
};

module.exports = { addBookToLibrary, updateBookInLibrary, deleteBookFromLibrary };
