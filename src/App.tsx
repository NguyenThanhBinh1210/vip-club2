import { useEffect } from 'react'
// import ScrollToTop from './components/scrollTop/scrollTop'
import useRouteElements from './routes/useRouteElements'
import ChatButtons from './components/ChatButtons'

const App = () => {
  useEffect(() => {
    const pathname = window.location.pathname
    if (pathname === '/booking') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [])
  const routeElements = useRouteElements()
  return (
    <>
      
      <ChatButtons />
      {routeElements}
    </>
  )
}

export default App
