
const KakaoTalk = () => {
  const kakaoId = 'letwinvipclub'
  const kakaoPhone = '+1 607-325-4693'

  return (
    <button
      className='rounded-full border group bg-[#FFE812] text-black animate-bounce hover:animate-none fixed bottom-36 flex items-center right-5 shadow-md h-9'
      onClick={() => navigator.clipboard.writeText(`KakaoTalk ID: ${kakaoId}\nPhone: ${kakaoPhone}`)}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
        <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-free-instant-messaging-app-for-cross-platform-devices-logo-color-tal-revivo.png" alt="kakaotalk-icon" />
      </div>
      <div className="max-w-0 group-hover:max-w-52 group-hover:ml-2 group-hover:mr-1 transition-all duration-300 overflow-hidden text-xs">
        <div className="flex flex-col">
          <span>ID: {kakaoId}</span>
          <span>Tel: {kakaoPhone}</span>
        </div>
      </div>
    </button>
  )
}

export default KakaoTalk 