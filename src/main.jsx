import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavbarBottomMobile from './components/Navbar/Mobile';
import NavbarWeb from './components/Navbar/Web';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NavbarWeb />
        <App />
        <NavbarBottomMobile />
    </React.StrictMode>
);
