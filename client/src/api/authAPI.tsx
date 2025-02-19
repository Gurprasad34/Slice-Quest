import type { UserLogin } from '../interfaces/UserLogin';
import { UserSignUp } from '../interfaces/UserSignUp';

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('http://localhost:3001/api/auth/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
      credentials: 'include',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'User login failed.');
    }

    return data;
  } catch (err) {
    console.error('Error from user login:', err);
    return Promise.reject('Could not fetch user info');
  }
};

const Createuseraccount = async (userInfo: UserSignUp) => {
  try {
    const response = await fetch('api/users', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
      credentials: 'include',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'User Create failed.');
    }

    return data;
  } catch (err) {
    console.error('Error from user Createuseraccount:', err);
    return Promise.reject('Could not fetch user info');
  }
};

export { login, Createuseraccount };