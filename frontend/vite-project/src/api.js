import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor para añadir el token a las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (email, password) => {
  try {
    const response = await api.post('/users/login', { email, password });
    return response;
  } catch (error) {
    console.error('Error en la solicitud de login:', error);
    throw error;
  }
};

export const register = (name, email, password) => api.post('/users/register', { name, email, password });
export const getProfile = () => api.get('/users/profile');

export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    // Asegúrate de que todos los precios sean números
    return response.data.map(product => ({
      ...product,
      price: parseFloat(product.price)
    }));
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

export const getProduct = (id) => api.get(`/products/${id}`);
export const createProduct = (productData) => api.post('/products', productData);
export const updateProduct = (id, productData) => api.put(`/products/${id}`, productData);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

export default api;
