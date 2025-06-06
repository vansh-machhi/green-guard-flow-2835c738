
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-guard-500/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-guard-400/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-green-guard-600/8 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-guard-300/12 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="relative z-10 w-full max-w-md mx-auto p-6">
        {/* Logo and Header */}
        <div className="text-center mb-8 animate-fadeInUp">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/f0f62c99-6980-490f-8b33-fd0c6ae8c84b.png" 
                alt="GREEN GUARD Logo" 
                className="w-16 h-16 animate-pulse-glow rounded-lg"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">
            GREEN GUARD
          </h1>
          <p className="text-green-guard-300 text-sm">
            Protecting Our Planet Together
          </p>
        </div>

        {/* Auth Form Container */}
        <div className="bg-white/5 backdrop-blur-lg border border-green-guard-500/20 rounded-2xl p-8 shadow-2xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {/* Toggle Buttons */}
          <div className="flex mb-8 bg-black/30 p-1 rounded-lg">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                isLogin
                  ? 'bg-green-guard-500 text-white shadow-lg'
                  : 'text-green-guard-300 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                !isLogin
                  ? 'bg-green-guard-500 text-white shadow-lg'
                  : 'text-green-guard-300 hover:text-white'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="animate-slideInLeft">
                <Label htmlFor="fullName" className="text-green-guard-200 text-sm font-medium">
                  Full Name
                </Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-guard-400 w-5 h-5" />
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="pl-10 bg-black/20 border-green-guard-600/30 text-white placeholder-green-guard-400/70 focus:border-green-guard-500 focus:ring-green-guard-500/20 transition-all duration-300"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className={isLogin ? "animate-slideInLeft" : "animate-slideInRight"}>
              <Label htmlFor="email" className="text-green-guard-200 text-sm font-medium">
                Email Address
              </Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-guard-400 w-5 h-5" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 bg-black/20 border-green-guard-600/30 text-white placeholder-green-guard-400/70 focus:border-green-guard-500 focus:ring-green-guard-500/20 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className={isLogin ? "animate-slideInRight" : "animate-slideInLeft"}>
              <Label htmlFor="password" className="text-green-guard-200 text-sm font-medium">
                Password
              </Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-guard-400 w-5 h-5" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 bg-black/20 border-green-guard-600/30 text-white placeholder-green-guard-400/70 focus:border-green-guard-500 focus:ring-green-guard-500/20 transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-guard-400 hover:text-green-guard-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="animate-slideInRight">
                <Label htmlFor="confirmPassword" className="text-green-guard-200 text-sm font-medium">
                  Confirm Password
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-guard-400 w-5 h-5" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 bg-black/20 border-green-guard-600/30 text-white placeholder-green-guard-400/70 focus:border-green-guard-500 focus:ring-green-guard-500/20 transition-all duration-300"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-green-guard-500 bg-black/20 border-green-guard-600/30 rounded focus:ring-green-guard-500/20"
                  />
                  <span className="ml-2 text-sm text-green-guard-300">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-green-guard-400 hover:text-green-guard-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-guard-600 to-green-guard-500 hover:from-green-guard-700 hover:to-green-guard-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-guard-500/25 animate-fadeInUp group"
              style={{ animationDelay: '0.6s' }}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <p className="text-green-guard-400 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleAuthMode}
                className="ml-1 text-green-guard-300 hover:text-white font-medium transition-colors underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>

        {/* Environmental Quote */}
        <div className="text-center mt-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <p className="text-green-guard-400/80 text-xs italic">
            "The Earth does not belong to us; we belong to the Earth."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
