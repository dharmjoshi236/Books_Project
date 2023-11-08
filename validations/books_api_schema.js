const joi = require('joi');

const bookValidationSchema = joi.object({
    title: joi.string().min(3).required().messages({
        'string.empty': `"Book title" cannot be empty.`,
        'string.min': `"Book title" should have a minimum length of 3 characters.`,
        'any.required': `"Book title" is a required.`
      }),
    summary: joi.string().min(10).required().messages({
        'string.empty': `"Book summary" cannot be empty.`,
        'string.min': `"Book summary" should have a minimum length of 10 characters.`,
        'any.required': `"Book summary" is a required.`
      }),
    author: joi.string().min(3).required().messages({
        'string.empty': `"Author name" cannot be empty.`,
        'string.min': `"Author name" should have a minimum length of 3 characters.`,
        'any.required': `"Author name" is a required.`
      }),
  });

const getBookByIdValidation = joi.object({
  bookId: joi.string().required().messages({
      'string.empty': `Book id should not be empty.`,
      'any.required': `Book id is required.`
    }),
  });

const updateBookValidation = joi.object({
    title: joi.string().min(3).messages({
        'string.empty': `"Book title" cannot be empty.`,
        'string.min': `"Book title" should have a minimum length of 3 characters.`
      }),
    summary: joi.string().min(10).messages({
        'string.empty': `"Book summary" cannot be empty.`,
        'string.min': `"Book summary" should have a minimum length of 10 characters.`
      }),
    author: joi.string().min(3).messages({
        'string.empty': `"Author name" cannot be empty.`,
        'string.min': `"Author name" should have a minimum length of 3 characters.`
      }),
      bookId: joi.string().required().messages({
        'string.empty': `Book id should not be empty.`,
        'any.required': `Book id is required.`
      }),
  });

const getListValidation = joi.object({
  page: joi.string().messages({
      'string.empty': `Page field cannot be empty.`
    })
  });

const deleteBookValidation = joi.object({
  bookId: joi.string().required().messages({
      'string.empty': `Book id should not be empty.`,
      'any.required': `Book id is required.`
    }),
  });



module.exports = {bookValidationSchema, getBookByIdValidation, updateBookValidation, getListValidation, deleteBookValidation}