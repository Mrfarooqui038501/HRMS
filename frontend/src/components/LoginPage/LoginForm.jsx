import React, { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { InputField } from './InputField';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with actual authentication logic
    console.log('Login attempted with:', { email, password });

    // If login is successful, navigate to the dashboard
    navigate('/overview');  // This will redirect to the Dashboard page
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <InputField
          id="email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          autoComplete="email"
        />

        <InputField
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          autoComplete="current-password"
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium transition-colors"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <LogIn size={20} className="group-hover:scale-110 transition-transform" />
        </span>
        Sign in
      </button>
    </form>
  );
}
