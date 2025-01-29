import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Books/:id' element={<BookDetails />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
