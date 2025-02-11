import { useState, type FormEvent, type ChangeEvent } from 'react';
import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import type { UserLogin } from '../interfaces/UserLogin';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <form
        className="w-full max-w-sm bg-white p-8 rounded-lg shadow-xl space-y-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-semibold text-[#D32F2F] text-center mb-6">
          Login
        </h1>

        <div className="space-y-4">
          <div className="form-group">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition"
              type="email"
              name="email"
              value={loginData.email || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition"
              type="password"
              name="password"
              value={loginData.password || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <button
              className="w-full py-3 bg-[#D32F2F] text-white font-semibold rounded-lg hover:bg-[#C2185B] transition"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;