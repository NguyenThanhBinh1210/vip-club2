// import { useTranslation } from 'react-i18next'
import hotrambanner4 from '~/assets/Theres-always-more.webp'

const Commission = () => {
  // const { t } = useTranslation()


  return (

    <>
      <div className='py-20'>
        <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-5'>
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>Hoa hồng hấp dẫn</h2>

            <img
              className='mt-5 lg:mt-0 aspect-[9/6] object-cover'
              src={hotrambanner4}
              alt='hoian'
            />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                <p className='mb-4'>Chính sách hoa hồng rõ ràng, minh bạch – phù hợp cho tour, tài xế, cộng tác viên.</p>

                <ul>
                  <li>Chia % theo doanh thu khách chơi tại casino</li>
                  <li>Mô hình rolling commission cho đại lý lớn</li>
                  <li>Hỗ trợ theo dõi – báo cáo – thanh toán nhanh</li>
                </ul>
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  Đăng ký hợp tác ngay
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>Hoa hồng hấp dẫn</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                <p className='mb-4'>Chính sách hoa hồng rõ ràng, minh bạch – phù hợp cho tour, tài xế, cộng tác viên.</p>

                <ul className=''>
                  <li>- Chia % theo doanh thu khách chơi tại casino</li>
                  <li>- Mô hình rolling commission cho đại lý lớn</li>
                  <li>- Hỗ trợ theo dõi – báo cáo – thanh toán nhanh</li>
                </ul>
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  Đăng ký hợp tác ngay
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

export default Commission 