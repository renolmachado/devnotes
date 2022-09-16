import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home/Home'
import Note from './pages/Note/Note'

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="note">
          <Route path=":name" element={<Note />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}

export default App
