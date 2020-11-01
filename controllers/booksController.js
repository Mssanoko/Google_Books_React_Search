const db = require("../models");


const fetchSavedBooks = (req, res) => {
    db.Book.find({})
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};

const saveBook = (req, res) => {
    db.Book.create(req.body)
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};

const deleteBook = (req, res) => {
    db.Book.remove({
        _id: req.params.id
    })
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};

module.exports = {
    fetchSavedBooks,
    saveBook,
    deleteBook
};