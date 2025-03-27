/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'

declare global {
  interface Window {
    Tawk_API: any
    Tawk_LoadStart: Date
  }
}

const CSKH = () => {
  const loadTawkTo = () => {
    // Tạo script element
    const s1 = document.createElement('script')
    const s0 = document.getElementsByTagName('script')[0]
    
    // Thiết lập thuộc tính cho script
    s1.async = true
    s1.src = 'https://embed.tawk.to/67d918df7bb0a8190c17a283/1imk0ib8f'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    
    // Chèn script vào DOM
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0)
    } else {
      document.head.appendChild(s1)
    }
    
    // Khởi tạo biến toàn cục cho Tawk
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()
  }

  // Xử lý khi người dùng nhấn nút chat
  const handleChatButtonClick = () => {
    // Nếu script đã được tải, hiển thị widget
    if (window.Tawk_API) {
      window.Tawk_API.maximize()
    } else {
      // Nếu chưa tải, tải script và hiển thị widget
      loadTawkTo()
    }
  }

  // Tùy chọn: Tự động tải script khi component mount
  useEffect(() => {
    // Bỏ comment dòng dưới nếu bạn muốn tự động tải script khi trang web tải
    loadTawkTo()
  }, [])

  return (
    <>
      <button
        className='p-2.5 rounded-full border bg-blue-600 text-white animate-none fixed bottom-8 right-10 z-50'
        onClick={handleChatButtonClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
          />
        </svg>
      </button>
    </>
  )
}

export default CSKH
