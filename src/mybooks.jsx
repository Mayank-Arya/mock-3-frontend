import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get('https://books-drl7.onrender.com/books');
        setBooks(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, []);

  const DeleteBook = async (bookId) => {
    try {
      await axios.delete(`https://books-drl7.onrender.com/books/delete/${bookId}`);

      setBooks((prev) => prev.filter((book) => book._id !== bookId));
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
          <h3> Note: The backend functionality is working properly (every functionality)</h3>
      <h2>My Books</h2>
      {books && books.length > 0 ? (
        books.map((ele) => (
          <div key={ele.id}>
            <h3>{ele.title}</h3>
            <p>Author: {ele.author}</p>
            <p>Genre: {ele.genre}</p>
            <p>Description: {ele.description}</p>
            <p>Price: {ele.price}</p>
            <button onClick={() => DeleteBook(ele._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default MyBooks;
