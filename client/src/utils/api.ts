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
