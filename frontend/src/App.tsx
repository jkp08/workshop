import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { Layout } from './layouts/Layout'
import LoginPage from './pages/LoginPage'
import TodoFormPage from './pages/TodoFormPage'
import UserFormPage from './pages/UserFormPage'
import { Demo } from './pages/Demo'

const HomePage = lazy(() => import('./pages/HomePage'))
const TodoPage = lazy(() => import('./pages/TodoPage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading…</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/users/new" element={<UserFormPage />} />
            <Route path="/users/:id/edit" element={<UserFormPage />} />
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/todos/new" element={<TodoFormPage />} />
              <Route path="/todos/:id/edit" element={<TodoFormPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
