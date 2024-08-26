import { mapComponentToPath } from './router'
import './App.scss'
import { Suspense } from 'react'

function App() {
  const Router = mapComponentToPath[window.location.pathname]

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  )
}

export default App
