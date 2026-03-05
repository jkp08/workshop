import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'

export default function Navbar() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    setIsLoggedIn(authService.isLoggedIn())
    setUserName(authService.getUser() || '')
  }, [])

  const handleLogout = () => {
    authService.logout()
    setIsLoggedIn(false)
    setUserName('')
    navigate('/')
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 transition font-medium"
          >
            Home
          </Link>
          {isLoggedIn && (
            <Link
              to="/todo"
              className="text-gray-700 hover:text-gray-900 transition font-medium"
            >
              Todo
            </Link>
          )}
        </div>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <span className="text-gray-700 font-medium">Hello, {userName}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition font-medium text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition font-medium text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
