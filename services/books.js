const mongoose = require('mongoose');
const bookModel = require('../models/bookModel');
const { ObjectId } = require('mongodb');

const addBook = async (bookData)=> {
    try {
        const checkBook = await bookModel.findOne({
            title: {$regex: new RegExp(`^${bookData?.title}$`, 'i')},
            author: {$regex: new RegExp(`^${bookData?.author}$`, 'i')},
            isDeleted: false
        });
        if (checkBook) {
            return 0; // book already exists
        }

        const addBook = await bookModel.create(bookData);
        if (!addBook) {
            return 2; // unable to add book
        } else {
            return 1; // book added
        }

    } catch(error) {
        console.log('error in add service ', error);
        return;
    }
}

const getBookById = async (bookId) => {
    try {
        const convertedId = new ObjectId(bookId);
        const findBookWithId = await bookModel.aggregate([
            {
                $match: {
                    _id: convertedId,
                    isDeleted: false
                }
            },
            {
                $project: {
                    title: 1,
                    author: 1,
                    summary: 1,
                    createdAt: 1
                }
            }
        ]);

        if (!findBookWithId[0]) {
            return 0; // No book with given id found
        }
        return findBookWithId[0];

    } catch (error) {
        console.log('error in get book by id service ', error);
        return;
    }
}

const updateBookDetails = async (bookData)=> {
    try {
        const checkIfBookExists = await bookModel.findOne({
            _id: bookData.bookId,
            isDeleted: false
        });
        if (!checkIfBookExists) {
            return 0; // Book with given Id not exists
        }

        const updateBook = await bookModel.findByIdAndUpdate(bookData?.bookId, {
            title: bookData?.title,
            author: bookData?.author,
            summary: bookData?.summary
        }, {new: true});

        if (!updateBook) {
            return 1; // unable to update the book
        }
        return 2; // Book updated successfully
    } catch (error) {
        console.log('error in update book service ', error);
        return;
    }
}

const getListOfAllBooks = async(page)=> {
    try {
        const getAllBooks = await bookModel.aggregate([
            {
                $match: {
                    isDeleted: false
                }
            },
            {
                $sort: {
                    createdAt: -1
                }
            },
            {
                $project: {
                    _id: 1,
                    title: 1, 
                    author: 1,
                    summary: 1,
                    createdAt: 1
                }
            },
            {
                $facet: {
                  metadata: [{ $count: 'totalCount' }],
                  data: [{ $skip: parseInt((page - 1) * 10) }, { $limit: 10 }],
                },
            }
        ]);

        if (getAllBooks && getAllBooks[0].data.length > 0) {
            return {
                count: getAllBooks[0].metadata[0].totalCount,
                books: getAllBooks[0].data
            }
        } else if (getAllBooks && getAllBooks[0].data.length === 0) {
            return 1;
        } else {
            return 0;
        }
    } catch (error) {
        console.log('error in get all book service ', error);
        return;
    }
}

const deleteBookById = async (bookId)=> {
    try {
        const findBookWithId = await bookModel.findOne({
            isDeleted: false,
            _id: bookId
        });

        if (!findBookWithId) {
            return 0; // book doens't exists
        }

        const deleteBook = await bookModel.findByIdAndUpdate(bookId, {
            isDeleted: true
        }, {new: true});

        if (deleteBook) {
            return 1; // book deleted successfully
        }
        return 2; // Unable to delete the book

    } catch(error) {
        console.log("error in delete book service", error);
        return;
    }
}

module.exports = {addBook, getBookById, updateBookDetails, getListOfAllBooks, deleteBookById}