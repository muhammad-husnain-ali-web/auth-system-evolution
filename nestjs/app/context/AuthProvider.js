'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
    const storedUser = (localStorage.getItem('user') || false);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider
