import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Createuseraccount } from '../api/authAPI';
// import { AuthService } from '../utils/auth';

const CreateAccount: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        const data = await Createuseraccount({ username, password, email });
        console.log({ data });
        navigate('/');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h2 className="text-3xl font-semibold text-[#D32F2F] mb-6">Create Your Account</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-xl space-y-4">
                <div>
                    <label htmlFor="username" className="block text-gray-700">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition"
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition"
                    />
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <button type="submit" className="w-full py-3 bg-[#D32F2F] text-white font-semibold rounded-lg hover:bg-[#C2185B] transition">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default CreateAccount;