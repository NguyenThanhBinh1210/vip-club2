//import { useTranslation } from 'react-i18next'
import hotrambanner4 from '~/assets/BOL09680-768x512.webp'

const Tour = () => {
  // const { t } = useTranslation()

  return (
    <>

      <div className='py-20'>
        <div className='pr-4 2xl:pr-[40px] lg:pr-[20px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-4'>
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>Tour nghỉ dưỡng - Giải trí - Golf cao cấp</h2>

            <img
              className='mt-5 lg:mt-0 aspect-[9/6]'
              src={hotrambanner4}
              alt='hoian'
            />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                <p className='mb-4'>Let'swin tổ chức tour trọn gói kết hợp giữa nghỉ dưỡng, giải trí và chơi golf – dành riêng cho khách hàng yêu thích phong cách sống đẳng cấp.</p>

                <h3 className='mb-2'>Lịch trình gợi ý (3 ngày 2 đêm):</h3>

                <h4 className='font-semibold'>Ngày 1:</h4>
                <ul className='mb-2'>
                  <li>- Đón khách tại sân bay / khách sạn</li>
                  <li>- Check-in resort 4–5 sao</li>
                  <li>- Ăn uống – Massage – Thư giãn nhẹ</li>
                </ul>

                <h4 className='font-semibold'>Ngày 2:</h4>
                <ul className='mb-2'>
                  <li>- Sáng: Chơi golf tại sân golf cao cấp</li>
                  <li>- Chiều: Poker hoặc nghỉ ngơi tự do</li>
                  <li>- Tối: Trải nghiệm Casino VIP, có hướng dẫn viên riêng hỗ trợ</li>
                </ul>

                <h4 className='font-semibold'>Ngày 3:</h4>
                <ul className='mb-2'>
                  <li >- Ăn sáng – Spa hoặc mua sắm nhẹ</li>
                  <li>- Xe đưa về sân bay hoặc về khách sạn</li>
                </ul>

                <h3>Dịch vụ kèm theo:</h3>
                <ul className='mb-2'>
                  <li>- Đặt sân golf & thuê dụng cụ</li>
                  <li>- Xe đưa đón tận nơi</li>
                  <li>- Hướng dẫn viên riêng</li>
                  <li>- Chăm sóc khách hàng 24/7</li>
                  <li>- Có thể tổ chức tour nhóm (2–10 người) hoặc cá nhân</li>
                </ul>
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  Đặt tour ngay
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-3'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>Tour nghỉ dưỡng - Giải trí - Golf cao cấp</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                <p className='mb-4'>Let'swin tổ chức tour trọn gói kết hợp giữa nghỉ dưỡng, giải trí và chơi golf – dành riêng cho khách hàng yêu thích phong cách sống đẳng cấp.</p>

                <h3 className='mb-2'>Lịch trình gợi ý (3 ngày 2 đêm):</h3>

                <h4 className='font-semibold'>Ngày 1:</h4>
                <ul className='mb-2'>
                  <li>- Đón khách tại sân bay / khách sạn</li>
                  <li>- Check-in resort 4–5 sao</li>
                  <li>- Ăn uống – Massage – Thư giãn nhẹ</li>
                </ul>

                <h4 className='font-semibold'>Ngày 2:</h4>
                <ul className='mb-2'>
                  <li>- Sáng: Chơi golf tại sân golf cao cấp</li>
                  <li>- Chiều: Poker hoặc nghỉ ngơi tự do</li>
                  <li>- Tối: Trải nghiệm Casino VIP, có hướng dẫn viên riêng hỗ trợ</li>
                </ul>

                <h4 className='font-semibold'>Ngày 3:</h4>
                <ul className='mb-2'>
                  <li >- Ăn sáng – Spa hoặc mua sắm nhẹ</li>
                  <li>- Xe đưa về sân bay hoặc về khách sạn</li>
                </ul>

                <h3>Dịch vụ kèm theo:</h3>
                <ul className='mb-2'>
                  <li>- Đặt sân golf & thuê dụng cụ</li>
                  <li>- Xe đưa đón tận nơi</li>
                  <li>- Hướng dẫn viên riêng</li>
                  <li>- Chăm sóc khách hàng 24/7</li>
                  <li>- Có thể tổ chức tour nhóm (2–10 người) hoặc cá nhân</li>
                </ul>
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  Đặt tour ngay
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tour 