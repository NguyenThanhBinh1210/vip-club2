// import React from 'react'
import Hotline from './Hotline'
import ScrollToTop from './scrollTop/scrollTop'
import KakaoTalk from './KakaoTalk'

const ChatButtons = () => {
    const handleTelegramClick = () => {
        window.open('https://t.me/letwinvipclub', '_blank')
    }

    const handleLineClick = () => {
        window.open('https://line.me/ti/p/YwHnAJxyEK', '_blank')
    }

    return (
        <div className="fixed right-6 bottom-24 z-50 flex flex-col items-center space-y-4">
            {/* KakaoTalk */}
           

            {/* Line */}
            <button
                className='p-2.5 rounded-full border group bg-[#06C755] text-white hover:scale-105 transition-transform w-11 h-11 flex items-center justify-center'
                onClick={handleLineClick}
                title="Chat with us on Line"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                >
                    <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.287c.129 0 .233.104.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065-.043-.043-.068-.1-.068-.169v-5.229c0-.129.104-.233.233-.233h.838zm14.992 0c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.883h2.287c.129 0 .233.105.233.234v.842c0 .129-.104.233-.233.233h-2.287v.884h2.287c.129 0 .233.105.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.12-.025-.162-.065-.042-.043-.067-.1-.067-.169v-5.229c0-.063.025-.12.067-.162.042-.043.099-.067.162-.067h3.363zm-10.026.001c.129 0 .233.104.233.233v5.229c0 .129-.104.234-.233.234h-.837c-.129 0-.234-.105-.234-.234v-5.229c0-.129.105-.233.234-.233h.837zm2.445 0c.064 0 .121.024.164.067.042.043.067.099.067.162v5.229c0 .129-.104.234-.231.234h-.842c-.129 0-.233-.105-.233-.234v-5.229c0-.129.104-.233.233-.233h.842zm5.222 0c.129 0 .233.104.233.233v5.229c0 .129-.104.234-.233.234h-.837c-.063 0-.12-.025-.162-.065-.042-.043-.067-.1-.067-.169v-3.354l-1.12 1.513c-.04.061-.1.098-.172.098h-.186c-.073 0-.133-.037-.172-.098l-1.126-1.513v3.354c0 .129-.104.234-.233.234h-.837c-.063 0-.119-.025-.161-.065-.043-.043-.068-.1-.068-.169v-5.229c0-.063.025-.12.068-.162.042-.043.098-.067.161-.067h.961c.067 0 .13.033.172.09l1.4 1.895 1.4-1.895c.042-.057.105-.09.172-.09h.961z" />
                </svg>
            </button>

            {/* Telegram */}
            <button
                className='p-2.5 rounded-full border group bg-[#0088cc] text-white hover:scale-105 transition-transform w-11 h-11 flex items-center justify-center'
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

            {/* ScrollToTop */}
            <div className="w-11 h-11 flex items-center justify-center">
                <ScrollToTop />
            </div>

            <div className="w-11 h-5 flex items-center justify-center ">
            <KakaoTalk />
            </div>
                
            {/* Hotline */}
            <div className="w-11  flex items-center justify-center ">
                <Hotline />
            </div>

            {/* CSKH */}
            {/* <div className="w-11 h-11 flex items-center justify-center">
                <CSKH />
            </div> */}
        </div>
    )
}

export default ChatButtons 