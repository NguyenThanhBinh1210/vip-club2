// import React from 'react'

const Telegram = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/letwinvipclub', '_blank')
  }

  return (
    <button
      className='p-2.5 rounded-full border bg-[#0088cc] text-white fixed right-4 bottom-64 z-50'
      onClick={handleTelegramClick}
      title="Chat with us on Telegram"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="white"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.196-2.783 5.065-4.571c.223-.198-.054-.308-.341-.112l-6.272 3.95-2.695-.918c-.585-.187-.594-.585.124-.866l10.53-4.059c.485-.18.911.108 1.103.875z" />
      </svg>
    </button>
  )
}

export default Telegram 