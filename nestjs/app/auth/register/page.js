'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
    const router = useRouter();
  const [form, setform] = useState({
    name: '',
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
    // Handle registration logic here
    if(form.name && form.email && form.password){
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(form);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful! You can now log in.');
      setform({ name: '', email: '', password: '' });
        router.push(`${process.env.NEXT_PUBLIC_HOST}/auth/login`)
    }
    
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="form-container bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className='text-2xl text-blue-500 text-center mb-4'>Register</h2>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <label htmlFor="name" className='text-gray-700 px-2'>Name</label>
          <input
            value={form.name}
            onChange={handleChange}
            type="text"
            id="name"
            name='name'
            placeholder="Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            Register
          </button>
          <p className="text-center text-gray-600 mt-4">Already have an account? <Link href={`${process.env.NEXT_PUBLIC_HOST}/auth/login`} className="text-blue-500 hover:underline">Login here</Link></p>
        </form>
    </div>
    </div>
  )
}

export default Register
