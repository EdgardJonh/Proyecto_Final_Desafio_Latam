import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-200">Mi Marketplace</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Inicio</Link></li>
            <li><Link to="/products" className="hover:text-blue-200">Productos</Link></li>
            <li><Link to="/cart" className="hover:text-blue-200">Carrito</Link></li>
            <li><Link to="/login" className="hover:text-blue-200">Iniciar sesión</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;