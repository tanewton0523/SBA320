import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
    return (
        <div className='book-list'>
            {books.length > 0 ? (
                <ul>
                    {books.map((book) => (
                        <li key={book.id} className='booklist-container'>
                            <div>
                                <img
                                    src={book.volumeInfo.imageLinks?.thumbnail}
                                    alt={book.volumeInfo.title}
                                />
                            </div>
                            <div>
                                <h3>{book.volumeInfo.title}</h3>
                                <p>{book.volumeInfo.authors?.join(', ')}</p>
                                <Link to={`/Books/${book.id}`}>View Details</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No books found</p>
            )}
        </div>
    );
};

export default BookList;