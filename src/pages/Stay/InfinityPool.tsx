import { useTranslation } from 'react-i18next'
import bannerPC from '~/assets/infinity-masthead-desktop-1920x823.webp'
import bannerMobile from '~/assets/infinity-masthead-mobile-1080x1440.webp'
import { Accordion, Slider } from './SkyparkObservationDeck'

const InfinityPool = () => {
  const { t } = useTranslation()
  const dataSlide2 = [1, 2, 3, 4, 5]

  return (
    <div>
      <div>
        <img
          src={bannerPC}
          alt={t('infinityPool.banner.desktopAlt')}
          className='h-auto object-cover hidden md:block w-full'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={bannerMobile}
          alt={t('infinityPool.banner.mobileAlt')}
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>

      <div className='pt-20 pb-10'>
        <div className='max-w-[888px] mx-auto px-[33px] lg:px-0'>
          <h1 className='uppercase text-[40px] text-center mb-10'>{t('infinityPool.title')}</h1>

          <p className='text-center text-[16px] mb-4'>{t('infinityPool.renowned')}</p>
          <p className='text-center text-[16px] mb-4'>{t('infinityPool.description')}</p>

          <button className='bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px]'>
            {t('common.bookNow')}
          </button>
        </div>
      </div>

      <div className='bg-[#f0f1eb] py-10 px-4 lg:px-0'>
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto grid md:grid-cols-2 gap-x-10 gap-y-10'>
          <Accordion title={t('infinityPool.details.title')}>
            <p className='uppercase mb-5'>{t('infinityPool.details.location.title')}</p>
            <p>{t('infinityPool.details.location.text1')}</p>
            <p>{t('infinityPool.details.location.text2')}</p>
            <p className='uppercase mb-5 mt-5'>{t('infinityPool.details.hours.title')}</p>
            <ul className='list-disc pl-5 space-y-4 mb-5'>
              <li>{t('infinityPool.details.hours.nonPeak')}</li>
              <li>{t('infinityPool.details.hours.peak')}</li>
            </ul>
          </Accordion>

          <Accordion title={t('infinityPool.operatingHours.title')}>
            <p className='uppercase mb-5'>{t('infinityPool.operatingHours.location.title')}</p>
            <p>{t('infinityPool.operatingHours.location.text1')}</p>
            <p>{t('infinityPool.operatingHours.location.text2')}</p>
            <p className='uppercase mb-5 mt-5'>{t('infinityPool.operatingHours.hours.title')}</p>
            <ul className='list-disc pl-5 space-y-4 mb-5'>
              <li>{t('infinityPool.operatingHours.hours.nonPeak')}</li>
              <li>{t('infinityPool.operatingHours.hours.peak')}</li>
            </ul>
          </Accordion>
        </div>
      </div>

      <div className='py-20 px-4 lg:px-0 lg:w-[59pc] 2xl:w-[978pt] mx-auto'>
        <h2 className='text-center uppercase text-2xl mb-10 lg:text-[32px]'>{t('infinityPool.faq.title')}</h2>
        <div>
          <Accordion
            size='sm'
            line
            title={t('infinityPool.faq.openingHours.question')}
            unuppercase
            fontSize='text-lg'
          >
            <p className='mb-5'>{t('infinityPool.faq.openingHours.answer1')}</p>
            <p className='mb-5'>{t('infinityPool.faq.openingHours.answer2')}</p>
          </Accordion>
        </div>
      </div>

      <Slider
        dataSlide={dataSlide2}
        title={t('infinityPool.recommendations.title')}
        buttonTitle={t('common.discoverMore')}
      />
    </div>
  )
}

export default InfinityPool
