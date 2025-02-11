import axios from 'axios';
const API_URL = 'http://localhost:5000'; // Update this to our API server

export const fetchPizzaShopsByType = async (pizzaType: string) => {
  try {
    const response = await axios.get(`${API_URL}/pizzaShops/${pizzaType}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pizza shops:', error);
    throw error;
  }
};

export const getSavedPizzaShops = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/savedPizzaShops`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching saved pizza shops');
  }
};

export const deleteSavedPizzaShop = async (shopId: number) => {
  try {
    await axios.delete(`${API_URL}/api/savedPizzaShops/${shopId}`);
  } catch (error) {
    throw new Error('Error deleting saved pizza shop');
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/users`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};