const express = require('express');
const router = express.Router();
const {addBookController, getBookById, updateBookDetails, getListOfAllBooks, deleteBookById} = require('../controllers/books');
const validateRequest = require('../middleware/validation_middleware');
const { bookValidationSchema, getBookByIdValidation, updateBookValidation, getListValidation, deleteBookValidation } = require('../validations/books_api_schema');


router.post('/add', validateRequest(bookValidationSchema, "body"), addBookController);
router.post('/get', validateRequest(getBookByIdValidation, "body"), getBookById);
router.patch('/update',validateRequest(updateBookValidation, "body"), updateBookDetails);
router.get('/list',validateRequest(getListValidation, "query"), getListOfAllBooks);
router.delete('/delete',validateRequest(deleteBookValidation, "query"), deleteBookById);

module.exports = router;