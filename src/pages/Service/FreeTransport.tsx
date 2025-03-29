import { useTranslation } from 'react-i18next'

const FreeTransport = () => {
  const { t } = useTranslation()
  
  return (
    <div className="max-w-[980px] mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold mb-6">Đưa đón miễn phí</h2>
      
      <div className="prose max-w-none">
        <p>Dịch vụ xe riêng đưa đón VIP tận nơi – hoàn toàn miễn phí cho khách của Let'swin.</p>
        
        <ul>
          <li>Đón tại sân bay, khách sạn, trung tâm thành phố</li>
          <li>Tài xế lịch sự, kín đáo</li>
          <li>Có thể chọn xe có hoặc không logo Let'swin</li>
          <li>Hỗ trợ nhóm khách hoặc cá nhân</li>
        </ul>

        <div className="mt-8">
          <a href="tel:+84766798268" className="inline-block bg-black text-white px-6 py-3 hover:opacity-80">
            Liên hệ đặt xe ngay
          </a>
        </div>
      </div>
    </div>
  )
}

export default FreeTransport 