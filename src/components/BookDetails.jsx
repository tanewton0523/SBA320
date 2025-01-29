import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../src/components/NavBar";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="bookdetail">
        <div className="bookdetail-container">
          <div>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
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
                Written By: {book.volumeInfo.authors?.join(", ")}
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
      </div>
    </>
  );
};

export default BookDetails;
