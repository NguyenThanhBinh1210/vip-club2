import { useTranslation } from 'react-i18next'

const Tour = () => {
  const { t } = useTranslation()

  return (
    <div className="max-w-[980px] mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold mb-6">Tour nghỉ dưỡng - Giải trí - Golf cao cấp</h2>
      
      <div className="prose max-w-none">
        <p>Let'swin tổ chức tour trọn gói kết hợp giữa nghỉ dưỡng, giải trí và chơi golf – dành riêng cho khách hàng yêu thích phong cách sống đẳng cấp.</p>

        <h3>Lịch trình gợi ý (3 ngày 2 đêm):</h3>
        
        <h4>Ngày 1:</h4>
        <ul>
          <li>Đón khách tại sân bay / khách sạn</li>
          <li>Check-in resort 4–5 sao</li>
          <li>Ăn uống – Massage – Thư giãn nhẹ</li>
        </ul>

        <h4>Ngày 2:</h4>
        <ul>
          <li>Sáng: Chơi golf tại sân golf cao cấp</li>
          <li>Chiều: Poker hoặc nghỉ ngơi tự do</li>
          <li>Tối: Trải nghiệm Casino VIP, có hướng dẫn viên riêng hỗ trợ</li>
        </ul>

        <h4>Ngày 3:</h4>
        <ul>
          <li>Ăn sáng – Spa hoặc mua sắm nhẹ</li>
          <li>Xe đưa về sân bay hoặc về khách sạn</li>
        </ul>

        <h3>Dịch vụ kèm theo:</h3>
        <ul>
          <li>Đặt sân golf & thuê dụng cụ</li>
          <li>Xe đưa đón tận nơi</li>
          <li>Hướng dẫn viên riêng</li>
          <li>Chăm sóc khách hàng 24/7</li>
          <li>Có thể tổ chức tour nhóm (2–10 người) hoặc cá nhân</li>
        </ul>

        <div className="mt-8">
          <a href="tel:+84766798268" className="inline-block bg-black text-white px-6 py-3 hover:opacity-80">
            Đặt tour ngay
          </a>
        </div>
      </div>
    </div>
  )
}

export default Tour 