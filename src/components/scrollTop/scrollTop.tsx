import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState<boolean>(false)
  const { pathname } = useLocation()
  console.log(pathname);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }
  useEffect(() => {
    if (pathname !== '/') {
      window.scrollTo({
        top: 0
      })
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [pathname])

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className=' p-2.5 rounded-full border border-white bg-yellow-700 text-white fixed bottom-6 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-arrow-up-to-line'
          >
            <path d='M5 3h14' />
            <path d='m18 13-6-6-6 6' />
            <path d='M12 7v14' />
          </svg>
        </button>
      )}
    </>
  )
}

export default ScrollToTop
