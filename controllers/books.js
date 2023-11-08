const bookService = require('../services/books');
const {constant_messages} = require('../constants/index')
const response = require('../helpers/responseGenerator')

const addBookController = async(req, res)=> {
    try {
        const addBookService = await bookService.addBook(req.body);

        if (addBookService === 0) {
            return response(res, 200, 1, constant_messages.BOOK_EXISTS);
        } else if (addBookService === 1) {
            return response(res, 200, 1, constant_messages.BOOK_CREATED_SUCCESS);
        } else {
            return response(res, 400, 0, constant_messages.BOOK_CREATED_UNSUCCESS);
        }
    } catch (error) {
        return response(res, 500, 0, constant_messages.INTERNAL_SERVER_ERROR);
    }
}

const getBookById = async (req,res) => {
    try {
        const {bookId} = req.body;
        const getBookById = await bookService.getBookById(bookId);

        if (getBookById === 0) {
            return response(res, 400, 0, constant_messages.NO_BOOK_FOUND);
        }
        return response(res, 200, 1, constant_messages.BOOK_FOUND, getBookById);

    } catch (error) {
        return response(res, 500, 0, constant_messages.INTERNAL_SERVER_ERROR);
    }
}

const updateBookDetails = async (req,res) => {
    try {
        const updateBook = await bookService.updateBookDetails(req.body);
        if (updateBook === 0) {
            return response(res, 400, 0, constant_messages.NO_BOOK_FOUND);
        } else if (updateBook === 1) {
            return response(res, 400, 0, constant_messages.BOOK_DETAILS_UPDATED_UNSUCCES);
        } else {
            return response(res, 200, 1, constant_messages.BOOK_DETAILS_UPDATED_SUCCESS)
        }

    } catch (error) {
        return response(res, 500, 0, constant_messages.INTERNAL_SERVER_ERROR);
    }
}

const getListOfAllBooks = async(req,res) => {
    try {
        const {page} = req.query;
        const getList = await bookService.getListOfAllBooks(page);

        if (getList === 0) {
            return response(res, 400, 0, constant_messages.BOOK_LIST_FAILURE);
        } else if(getList === 1) {
            return response(res, 200, 1, constant_messages.NO_BOOK_AVAILABLE, []);
        } else {
            return response(res, 200, 1, constant_messages.BOOK_LIST_FETCHED, getList)
        }
    } catch (error) {
        return response(res, 500, 0, constant_messages.INTERNAL_SERVER_ERROR);
    }
}

const deleteBookById = async(req, res)=> {
    try {
        const {bookId} = req.query;
        const deleteBook = await bookService.deleteBookById(bookId)

        if (deleteBook === 0) {
            return response(res, 400, 0, constant_messages.NO_BOOK_FOUND)
        } else if (deleteBook === 1) {
            return response(res, 200, 1, constant_messages.BOOK_DELETE_SUCCESS)
        } else {
            return response(res, 400, 0, constant_messages.BOOK_DELETE_FAILURE);
        }

    } catch (error) {
        return response(res, 500, 0, constant_messages.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {addBookController, getBookById, updateBookDetails, getListOfAllBooks, deleteBookById}