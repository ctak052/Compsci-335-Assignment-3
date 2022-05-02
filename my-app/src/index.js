import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Staff from './Components/Content/Staff';
import GuestBook from './Components/Content/GuestBook';
import Shop from './Components/Content/Shop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="staff" element={<Staff />} />
        <Route path="shop" element={<Shop />} />
        <Route path="guestbook" element={<GuestBook />} />
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
