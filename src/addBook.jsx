import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://books-drl7.onrender.com/books/add', formData);
      setFormData({
        title: '',
        author: '',
        genre: '',
        description: '',
        price: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Genre:
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          >
            <option value="">Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Science">Science</option>
            <option value="Comic">Comic</option>
          </select>
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBook;
