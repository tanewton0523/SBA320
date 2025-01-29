import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../src/components/NavBar";

const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data.items);
        console.log(data.items);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="bookdetail">
        {books.map((book) => (
          <div key={book.id} className="bookdetail-container">
            <div>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="bookdetail-img"
                style={{ width: "500px", height: "250px", padding: "20px" }}
              />
            </div>
            <div>
              <div className="ml-8 leading-loose">
                <h5 className="bookdetail-title">
                  Title: {book.volumeInfo.title}
                </h5>
                <p className="font-bold">
                  Subtitle: {book.volumeInfo.subtitle}
                </p>
                <p className="font-bold">
                  Written By: {book.volumeInfo.authors}
                </p>
                <p className="mb-3 font-bold">
                  Book published on: {book.volumeInfo.publishedDate}
                </p>
                <p className="pt-2 leading-relaxed">
                  <span>{book.volumeInfo.description}</span>
                </p>
                <a href={book.volumeInfo.infoLink} target="_blank">
                  <button className="btn-bookdetail">
                    Read More About The Book
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookDetails;
