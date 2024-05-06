import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import FinalPage from './Admin/FinalPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <FinalPage/>
    </BrowserRouter>
    
  </React.StrictMode>,
)
