const express = require('express');
const router = express.Router();
const bookRoutes = require('./book_routes');

router.use('/book', bookRoutes);

module.exports = router;