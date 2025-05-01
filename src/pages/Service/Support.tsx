import { useTranslation } from 'react-i18next'
import hotrambanner4 from '~/assets/ho-tro-covid.jpg'
const Support = () => {
  const { t } = useTranslation()


  return (
    <>
      <section className='mb-8 max-w-[1600px] mx-auto'>
        <div className='flex justify-between gap-x-5 lg:gap-x-10'>
          <div className='text-sm md:text-base w-max'>
            <h2 className='text-lg md:text-2xl font-semibold'>
              {t('support.title')}
            </h2>
            <p className='text-gray-700 my-2'>
              {t('support.description')}
            </p>
            <ul className='mb-3 md:mb-10'>
              <li>- {t('support.items.transport')}</li>
              <li>- {t('support.items.tours')}</li>
              <li>- {t('support.items.night')}</li>
            </ul>
            <div className='flex gap-4 flex-wrap'>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 relative hover:opacity-60 group transition-all duration-300'>
                  Zalo
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 relative hover:opacity-60 group transition-all duration-300'>
                  Telegram
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 relative hover:opacity-60 group transition-all duration-300'>
                  WhatsApp
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
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
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>Hỗ trợ 24/7</h2>

            <img
              className='mt-5 lg:mt-0 aspect-[9/6] object-cover'
              src={hotrambanner4}
              alt='hoian'
            />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                <p className='mb-4'>Đội ngũ chăm sóc khách hàng túc trực 24/7 – sẵn sàng hỗ trợ bất kỳ lúc nào.</p>

                <ul>
                  <li>Hỗ trợ đặt xe, phòng, hướng dẫn chơi</li>
                  <li>Giải đáp thắc mắc về tour, casino, poker</li>
                  <li>Xử lý tình huống ngay cả vào ban đêm</li>
                </ul>
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  Zalo
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
              <div className='flex gap-x-4'>
                <a href='tel:+84766798268'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 relative hover:opacity-60 group transition-all duration-300'>
                    Zalo
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
                <a href='tel:+84766798268'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 relative hover:opacity-60 group transition-all duration-300'>
                    Telegram
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
                <a href='tel:+84766798268'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 relative hover:opacity-60 group transition-all duration-300'>
                    WhatsApp
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>Hỗ trợ 24/7</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                <p className='mb-4'>Đội ngũ chăm sóc khách hàng túc trực 24/7 – sẵn sàng hỗ trợ bất kỳ lúc nào.</p>

                <ul>
                  <li>Hỗ trợ đặt xe, phòng, hướng dẫn chơi</li>
                  <li>Giải đáp thắc mắc về tour, casino, poker</li>
                  <li>Xử lý tình huống ngay cả vào ban đêm</li>
                </ul>
              </div>
              <div className='flex gap-x-4'>
                <a href='tel:+84766798268'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 relative hover:opacity-60 group transition-all duration-300'>
                    Zalo
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
                <a href='tel:+84766798268'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 relative hover:opacity-60 group transition-all duration-300'>
                    Telegram
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
                <a href='tel:+84766798268'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 relative hover:opacity-60 group transition-all duration-300'>
                    WhatsApp
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  )
}

export default Support 