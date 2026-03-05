import { Link } from 'react-router-dom'

export default function Navbar() {
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
          <Link
            to="/todo"
            className="text-gray-700 hover:text-gray-900 transition font-medium"
          >
            Todo
          </Link>
        </div>
        <div className="text-gray-600">
          Hello, name
        </div>
      </div>
    </nav>
  )
}
