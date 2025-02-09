import Auth from '../utils/auth';

const retrieveUsers = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/users', {
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