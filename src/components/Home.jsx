import React, { useState } from "react";
import NavBar from "./NavBar";
import Input from "./Input";
import BookList from "./BookList";

const Home = () => {
  const [term, setTerm] = useState("EVERYTHING");
  const [books, setBooks] = useState([]);

  const searchBooks = (query) => {
    console.log('Searching for books with query:', query);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items || []);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <NavBar />
      <h1>Book Search</h1>
      <Input searchBooks={searchBooks} />
      <BookList books={books} />
    </div>
  );
};

export default Home;
