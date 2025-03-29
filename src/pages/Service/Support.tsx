import { useTranslation } from 'react-i18next'

const Support = () => {
  const { t } = useTranslation()

  return (
    <div className="max-w-[980px] mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold mb-6">Hỗ trợ 24/7</h2>
      
      <div className="prose max-w-none">
        <p>Đội ngũ chăm sóc khách hàng túc trực 24/7 – sẵn sàng hỗ trợ bất kỳ lúc nào.</p>

        <ul>
          <li>Hỗ trợ đặt xe, phòng, hướng dẫn chơi</li>
          <li>Giải đáp thắc mắc về tour, casino, poker</li>
          <li>Xử lý tình huống ngay cả vào ban đêm</li>
        </ul>

        <div className="mt-8 space-x-4">
          <a href="#" className="inline-block bg-black text-white px-6 py-3 hover:opacity-80">
            Zalo
          </a>
          <a href="#" className="inline-block bg-black text-white px-6 py-3 hover:opacity-80">
            Telegram
          </a>
          <a href="#" className="inline-block bg-black text-white px-6 py-3 hover:opacity-80">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default Support 