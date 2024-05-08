import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Books from './Donation Posts/Book Donation Webpages/Books.tsx';
import BooksPt2 from './Donation Posts/Book Donation Webpages/BooksPt2.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <BooksPt2/>
    </BrowserRouter>
    
  </React.StrictMode>,
)
