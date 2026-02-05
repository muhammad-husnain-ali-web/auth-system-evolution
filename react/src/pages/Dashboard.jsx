import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
  const { setUser } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.setItem('user', JSON.stringify(false));
    setUser(false);
    alert('Logout successful!');
    Navigate('/login');
    
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className='text-2xl text-blue-500 text-center mb-4'>Dashboard</h2>
        <p className='text-gray-700 text-center'>Welcome to your dashboard! You are successfully logged in.</p>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 w-full mt-4 cursor-pointer">Logout</button>
    </div>
    </div>
  )
}

export default Dashboard
