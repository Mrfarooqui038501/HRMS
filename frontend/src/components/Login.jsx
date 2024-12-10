import React from 'react'
import {LoginForm} from '../components/LoginPage/LoginForm'
import { SocialLogin } from '../components/LoginPage/SocialLogin'

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-100 rounded-full filter blur-xl opacity-70"></div>
        
        <div className="relative">
          {/* Header */}
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                Sign up
              </a>
            </p>
          </div>

          <SocialLogin />
          <LoginForm />
        </div>
      </div>
    </div>
  
  )
}

export default Login
