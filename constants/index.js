require('dotenv').config();

module.exports = {
    mongo_connection_string: process.env.MONGO_CONNECTION_URL,
    server_port: process.env.PORT || 5000,
    database_connected: "Database connection successfully",
    database_unconnected: "Unable to connect to database, Check mongo atlas console.",
    constant_messages: {
        BOOK_EXISTS: "Book already exists.",
        BOOK_CREATED_SUCCESS: "Book created successfully",
        BOOK_CREATED_UNSUCCESS: "Unable to create a book, Try again",
        INTERNAL_SERVER_ERROR: "Internal Server Error, Try again.",
        NO_BOOK_FOUND: "No book found",
        BOOK_FOUND: "Book found",
        BOOK_DETAILS_UPDATED_SUCCESS: "Book details updated successfully",
        BOOK_DETAILS_UPDATED_UNSUCCES: "Unable to update the book details, Try again!",
        BOOK_LIST_FAILURE: "Unable to fetch the book list",
        NO_BOOK_AVAILABLE: "No books available to show",
        BOOK_LIST_FETCHED: "Book list fetched successfully",
        BOOK_DELETE_FAILURE: "Unable to delete the book, Try again.",
        BOOK_DELETE_SUCCESS: "Book deleted successfully"
    }
}