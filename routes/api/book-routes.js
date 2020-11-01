const router = require("express").Router();
const {
    fetchSavedBooks,
    saveBook,
    deleteBook
} = require('../../controllers/booksController');


router
    .route("/")
    .get(fetchSavedBooks)
    .post(saveBook);


router.route("/:id")
    .delete(deleteBook);

module.exports = router;