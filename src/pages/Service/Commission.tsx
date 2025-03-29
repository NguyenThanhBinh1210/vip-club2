import { useTranslation } from 'react-i18next'

const Commission = () => {
  const { t } = useTranslation()

  return (
    <div className="max-w-[980px] mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold mb-6">Hoa hồng hấp dẫn</h2>
      
      <div className="prose max-w-none">
        <p>Chính sách hoa hồng rõ ràng, minh bạch – phù hợp cho tour, tài xế, cộng tác viên.</p>

        <ul>
          <li>Chia % theo doanh thu khách chơi tại casino</li>
          <li>Mô hình rolling commission cho đại lý lớn</li>
          <li>Hỗ trợ theo dõi – báo cáo – thanh toán nhanh</li>
        </ul>

        <div className="mt-8">
          <a href="tel:+84766798268" className="inline-block bg-black text-white px-6 py-3 hover:opacity-80">
            Đăng ký hợp tác ngay
          </a>
        </div>
      </div>
    </div>
  )
}

export default Commission 