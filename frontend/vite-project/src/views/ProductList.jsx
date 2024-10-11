import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    // Aquí normalmente harías una llamada a tu API
    // Por ahora, usaremos datos de ejemplo
    const fetchProducts = async () => {
      try {
        // Simular una llamada a la API
        await new Promise(resolve => setTimeout(resolve, 1000));
        const sampleProducts = [
          { id: 1, name: 'Laptop', price: 999.99, category: 'Electrónica', image: 'url-imagen-1' },
          { id: 2, name: 'Camiseta', price: 19.99, category: 'Ropa', image: 'url-imagen-2' },
          { id: 3, name: 'Sartén', price: 39.99, category: 'Hogar', image: 'url-imagen-3' },
          { id: 4, name: 'Smartphone', price: 599.99, category: 'Electrónica', image: 'url-imagen-4' },
          { id: 5, name: 'Jeans', price: 49.99, category: 'Ropa', image: 'url-imagen-5' },
        ];
        setProducts(sampleProducts);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const sortedAndFilteredProducts = products
    .filter(product => filterCategory === '' || product.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'priceLow') {
        return a.price - b.price;
      } else if (sortBy === 'priceHigh') {
        return b.price - a.price;
      }
      return 0;
    });

  if (loading) return <div className="text-center mt-8">Cargando productos...</div>;
  if (error) return <div className="text-center mt-8 text-red-600">{error}</div>;

  return (
    <div className="product-list">
      <h1 className="text-3xl font-bold mb-6">Nuestros Productos</h1>
      
      <div className="mb-6 flex justify-between">
        <div>
          <label htmlFor="sort" className="mr-2">Ordenar por:</label>
          <select id="sort" value={sortBy} onChange={handleSortChange} className="border rounded p-1">
            <option value="name">Nombre</option>
            <option value="priceLow">Precio: Bajo a Alto</option>
            <option value="priceHigh">Precio: Alto a Bajo</option>
          </select>
        </div>
        <div>
          <label htmlFor="filter" className="mr-2">Filtrar por categoría:</label>
          <select id="filter" value={filterCategory} onChange={handleFilterChange} className="border rounded p-1">
            <option value="">Todas</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Ropa">Ropa</option>
            <option value="Hogar">Hogar</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedAndFilteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {sortedAndFilteredProducts.length === 0 && (
        <p className="text-center mt-8">No se encontraron productos que coincidan con los criterios de búsqueda.</p>
      )}
    </div>
  );
}

export default ProductList;