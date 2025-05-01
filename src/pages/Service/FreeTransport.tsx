import { useTranslation } from 'react-i18next'
import hotrambanner4 from '~/assets/Web-Gallery-Slide_2000x1250_Inter-resort-Free-Shuttle.webp'

const FreeTransport = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className='mb-8 max-w-[1600px] mx-auto'>
        <div className='flex justify-between gap-x-5 lg:gap-x-10'>
          <div className='text-sm md:text-base'>
            <h2 className='text-lg md:text-2xl font-semibold'>
              {t('freeTransport.title')}
            </h2>
            <p className='text-gray-700 my-2'>
              {t('freeTransport.description')}
            </p>
            <ul className='mb-3 md:mb-10'>
              <li>- {t('freeTransport.items.pickup')}</li>
              <li>- {t('freeTransport.items.driver')}</li>
              <li>- {t('freeTransport.items.logo')}</li>
              <li>- {t('freeTransport.items.group')}</li>
            </ul>
            <a href='tel:+84766798268'>
              <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                {t('freeTransport.cta')}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </a>
          </div>
          <img
            className='lg:mt-0 w-[45%] aspect-video lg:w-[50%] rounded flex-shrink-0 object-cover'
            src={hotrambanner4}
            alt='hoian'
          />
        </div>
      </section>
      {/*
    <div className='py-20'>
      <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
        <div className='lg:col-span-5'>
          <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>Đưa đón miễn phí</h2>

          <img
            className='mt-5 lg:mt-0 aspect-[9/6]'
            src={hotrambanner4}
            alt='hoian'
          />
          <div className='block lg:hidden pl-4 lg:pl-0'>
            <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
              <p className='mb-4'>Dịch vụ xe riêng đưa đón VIP tận nơi – hoàn toàn miễn phí cho khách của Let'swin.</p>

              <ul>
                <li>Đón tại sân bay, khách sạn, trung tâm thành phố</li>
                <li>Tài xế lịch sự, kín đáo</li>
                <li>Có thể chọn xe có hoặc không logo Let'swin</li>
                <li>Hỗ trợ nhóm khách hoặc cá nhân</li>
              </ul>
            </div>
            <a href='tel:+84766798268'>
              <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                Liên hệ đặt xe ngay
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </a>
          </div>
        </div>
        <div className='lg:col-span-2'>
          <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>Đưa đón miễn phí</h2>
          <div className='hidden lg:block'>
            <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
              <p className='mb-4'>Dịch vụ xe riêng đưa đón VIP tận nơi – hoàn toàn miễn phí cho khách của Let'swin.</p>

              <ul>
                <li>Đón tại sân bay, khách sạn, trung tâm thành phố</li>
                <li>Tài xế lịch sự, kín đáo</li>
                <li>Có thể chọn xe có hoặc không logo Let'swin</li>
                <li>Hỗ trợ nhóm khách hoặc cá nhân</li>
              </ul>
            </div>
            <a href='tel:+84766798268'>
              <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                Liên hệ đặt xe ngay
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
*/}
    </>
  )
}

export default FreeTransport
