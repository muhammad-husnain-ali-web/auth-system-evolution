'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);

  const [form, setform] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      setform({
        ...form,
        [e.target.name]: e.target.value
      });
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      const users = (JSON.parse(localStorage.getItem('users')) || []);
      const user = users.find(u => u.email === form.email && u.password === form.password);

      if(!user){
        alert('Invalid email or password');
        return;
      } 
        localStorage.setItem('user', JSON.stringify(true));
        document.cookie = `user=${'true'}; path=/;`
        alert('Login successful!');
        setUser(true);
        router.push(`${process.env.NEXT_PUBLIC_HOST}/`);
        
        setform({ email: '', password: '' });

    }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="form-container bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className='text-2xl text-blue-500 text-center mb-4'>Login</h2>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <label htmlFor="email" className='text-gray-700 px-2'>Email</label>
          <input 
            value={form.email}
            onChange={handleChange}
            type="email"
            id="email"
            name='email'
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="password" className='text-gray-700 px-2'>Password</label>
          <input 
            value={form.password}
            onChange={handleChange}
            type="password"
            id="password"
            name='password'
            placeholder="Password"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 cursor-pointer">
            Login
          </button>
          <p className="text-center text-gray-600 mt-4">Don't have an account? <Link href={`${process.env.NEXT_PUBLIC_HOST}/auth/register`} className="text-blue-500 hover:underline">Register here</Link></p>
        </form>
    </div>
    </div>
  )
}

export default Login
