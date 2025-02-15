import Auth from '../utils/auth';

const retrieveUsers = async () => {
  try {
    const baseUrl = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : process.env.REACT_APP_API_URL;

    const response = await fetch(`${baseUrl}/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
      credentials: 'include',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Invalid user API response.');
    }

    return data;
  } catch (err) {
    console.error('Error from data retrieval:', err);
    return [];
  }
};

export { retrieveUsers };