import axios from 'axios';


export const searchGoogleBooks = query => {
  return axios.get('https://www.googleapis.com/books/v1/volumes', {
    params: {
      q: query
    }
  });
};

export const fetchSavedBooks = () => {
  return axios.get('/api/books');
};

export const saveBook = bookData => {
  return axios.post('/api/books', bookData);
};

export const deleteBook = bookId => {
  return axios.delete(`/api/books/${bookId}`);
};


export default {
  saveBook,
  fetchSavedBooks,
  deleteBook,
  searchGoogleBooks
};