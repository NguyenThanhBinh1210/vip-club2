import { useTranslation } from 'react-i18next'
import hotrambanner4 from '~/assets/BOL09680-768x512.webp'

const Tour = () => {
  const { t } = useTranslation()

  return (
    <>

      <div className='py-20'>
        <div className='pr-4 2xl:pr-[40px] lg:pr-[20px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
        <div className='lg:col-span-4'>
        <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>
          {t('tour.title')}
        </h2>
        <img
          className='mt-5 lg:mt-0 aspect-[9/6]'
          src={hotrambanner4}
          alt='hoian'
        />
        <div className='block lg:hidden pl-4 lg:pl-0'>
          <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
            <p className='mb-4'>{t('tour.intro')}</p>

            <h3 className='mb-2'>{t('tour.scheduleTitle')}</h3>

            <h4 className='font-semibold'>{t('tour.day1.title')}</h4>
            <ul className='mb-2'>
              <li>- {t('tour.day1.item1')}</li>
              <li>- {t('tour.day1.item2')}</li>
              <li>- {t('tour.day1.item3')}</li>
            </ul>

            <h4 className='font-semibold'>{t('tour.day2.title')}</h4>
            <ul className='mb-2'>
              <li>- {t('tour.day2.item1')}</li>
              <li>- {t('tour.day2.item2')}</li>
              <li>- {t('tour.day2.item3')}</li>
            </ul>

            <h4 className='font-semibold'>{t('tour.day3.title')}</h4>
            <ul className='mb-2'>
              <li>- {t('tour.day3.item1')}</li>
              <li>- {t('tour.day3.item2')}</li>
            </ul>

            <h3>{t('tour.servicesTitle')}</h3>
            <ul className='mb-2'>
              <li>- {t('tour.services.golf')}</li>
              <li>- {t('tour.services.transport')}</li>
              <li>- {t('tour.services.guide')}</li>
              <li>- {t('tour.services.support')}</li>
              <li>- {t('tour.services.group')}</li>
            </ul>
          </div>
          <a href='tel:+84766798268'>
            <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
              {t('tour.cta')}
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
            </button>
          </a>
        </div>
      </div>

      <div className='lg:col-span-3'>
        <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>
          {t('tour.title')}
        </h2>
        <div className='hidden lg:block'>
          <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
            <p className='mb-4'>{t('tour.intro')}</p>

            <h3 className='mb-2'>{t('tour.scheduleTitle')}</h3>

            <h4 className='font-semibold'>{t('tour.day1.title')}</h4>
            <ul className='mb-2'>
              <li>- {t('tour.day1.item1')}</li>
              <li>- {t('tour.day1.item2')}</li>
              <li>- {t('tour.day1.item3')}</li>
            </ul>

            <h4 className='font-semibold'>{t('tour.day2.title')}</h4>
            <ul className='mb-2'>
              <li>- {t('tour.day2.item1')}</li>
              <li>- {t('tour.day2.item2')}</li>
              <li>- {t('tour.day2.item3')}</li>
            </ul>

            <h4 className='font-semibold'>{t('tour.day3.title')}</h4>
            <ul className='mb-2'>
              <li>- {t('tour.day3.item1')}</li>
              <li>- {t('tour.day3.item2')}</li>
            </ul>

            <h3>{t('tour.servicesTitle')}</h3>
            <ul className='mb-2'>
              <li>- {t('tour.services.golf')}</li>
              <li>- {t('tour.services.transport')}</li>
              <li>- {t('tour.services.guide')}</li>
              <li>- {t('tour.services.support')}</li>
              <li>- {t('tour.services.group')}</li>
            </ul>
          </div>
          <a href='tel:+84766798268'>
            <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
              {t('tour.cta')}
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