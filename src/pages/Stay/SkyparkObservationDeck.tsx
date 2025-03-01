import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import bannerPC from '~/assets/skypark-obs-deck-masthead-desktop-1920x823.jpg'
import bannerMobile from '~/assets/skypark-obs-deck-masthead-mobile-1080x1440.jpg'
import weekdayVacationTile from '~/assets/weekday-vacation-tile-1920x1080.avif'
import { ButtonBlack } from '../Shop/Shopping'
import { Link } from 'react-router-dom'

const SkyparkObservationDeck = () => {
  const { t } = useTranslation()
  const dataSlide1 = [1, 2, 3]
  const dataSlide2 = [1, 2, 3, 4, 5]
  return (
    <div>
      <div>
        <img
          src={bannerPC}
          alt={t('skypark.banner_alt')}
          className='h-auto object-cover hidden md:block'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={bannerMobile}
          alt={t('skypark.banner_mobile_alt')}
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-20 pb-10'>
        <div className='max-w-[888px] mx-auto px-[33px] lg:px-0'>
          <h1 className='uppercase text-[40px] text-center mb-10'>{t('skypark.paradise_title')}</h1>

          <p className='text-center text-[16px] mb-4'>{t('skypark.discover_text')}</p>
          <p className='text-center text-[16px] mb-4'>{t('skypark.explore_text')}</p>
          <p className='text-center text-[16px] mb-4'>{t('skypark.evening_view')}</p>

          <p className='text-center text-[16px] mb-4'>{t('skypark.sunset_experience')}</p>
          <button className='bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px]'>
            {t('skypark.book_tickets')}
          </button>
        </div>
      </div>
      <div className=' py-10 px-4 lg:px-0'>
        <div className='bg-[#e4e0e0] lg:w-[59pc] 2xl:w-[978pt] mx-auto'>
          <Accordion title={t('skypark.notice_title')}>
            <p>{t('skypark.notice_text')}</p>
          </Accordion>
        </div>
      </div>
      <div className='bg-[#f0f1eb] py-10 px-4 lg:px-0'>
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto grid md:grid-cols-2 gap-x-10 gap-y-10'>
          <Accordion title={t('skypark.details_title')}>
            <p className='uppercase mb-5'>{t('skypark.location_title')}</p>
            <p>{t('skypark.location_text1')}</p>
            <p>{t('skypark.location_text2')}</p>
            <p className='uppercase mb-5 mt-5'>{t('skypark.hours_title')}</p>
            <ul className='list-disc pl-5 space-y-4 mb-5'>
              <li>{t('skypark.hours_nonpeak')}</li>
              <li>{t('skypark.hours_peak')}</li>
            </ul>
          </Accordion>
          <Accordion title={t('skypark.prices_title')}>
            <p className='uppercase mb-5'>{t('skypark.location_title')}</p>
            <p>{t('skypark.location_text1')}</p>
            <p>{t('skypark.location_text2')}</p>
            <p className='uppercase mb-5 mt-5'>{t('skypark.hours_title')}</p>
            <ul className='list-disc pl-5 space-y-4 mb-5'>
              <li>{t('skypark.hours_nonpeak')}</li>
              <li>{t('skypark.hours_peak')}</li>
            </ul>
          </Accordion>
        </div>
      </div>
      {/* <div className=' py-20 px-4 lg:px-0'>s</div> */}
      <Slider dataSlide={dataSlide1} title={t('skypark.whats_on')}></Slider>
      <div className=' py-20 px-4 lg:px-0 lg:w-[59pc] 2xl:w-[978pt] mx-auto'>
        <h2 className='text-center uppercase text-2xl mb-10 lg:text-[32px]'>{t('skypark.faq_title')}</h2>

        <div>
          <Accordion
            size='sm'
            line
            title={t('skypark.faq.opening_hours.question')}
            unuppercase
            fontSize='text-lg'
          >
            <p className='mb-5'>{t('skypark.faq.opening_hours.answer1')}</p>
            <p className='mb-5'>{t('skypark.faq.opening_hours.answer2')}</p>
          </Accordion>
          <Accordion size='sm' line title={t('skypark.faq.rain.question')} unuppercase fontSize='text-lg'>
            <p className='mb-5'>{t('skypark.faq.rain.answer1')}</p>
            <p className='mb-5'>{t('skypark.faq.rain.answer2')}</p>
          </Accordion>
          <Accordion size='sm' line title={t('skypark.faq.souvenir.question')} unuppercase fontSize='text-lg'>
            <p className='mb-5'>{t('skypark.faq.souvenir.answer1')}</p>
            <p className='mb-5'>{t('skypark.faq.souvenir.answer2')}</p>
          </Accordion>
          <Accordion size='sm' line title={t('skypark.faq.prohibited.question')} unuppercase fontSize='text-lg'>
            <p className='mb-5'>{t('skypark.faq.prohibited.answer1')}</p>
            <p className='mb-5'>{t('skypark.faq.prohibited.answer2')}</p>
          </Accordion>
          <Accordion size='sm' line title={t('skypark.faq.other_areas.question')} unuppercase fontSize='text-lg'>
            <p className='mb-5'>{t('skypark.faq.other_areas.answer1')}</p>
            <p className='mb-5'>{t('skypark.faq.other_areas.answer2')}</p>
          </Accordion>
          <Accordion size='sm' line title={t('skypark.faq.conditions.question')} unuppercase fontSize='text-lg'>
            <p className='mb-5'>{t('skypark.faq.conditions.answer1')}</p>
            <p className='mb-5'>{t('skypark.faq.conditions.answer2')}</p>
          </Accordion>
        </div>
      </div>
      <Slider dataSlide={dataSlide2} title={t('skypark.you_may_like')}></Slider>
    </div>
  )
}

export const Accordion = ({
  children,
  title,
  unuppercase,
  fontSize,
  size = 'md',
  line = false
}: {
  children: React.ReactNode
  title: string
  unuppercase?: boolean
  fontSize?: string
  size?: string
  line?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`  transition-all duration-300  ${line ? 'border-b border-gray-300' : ''}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center  cursor-pointer ${size === 'sm' ? 'py-5 ' : 'py-10 px-[15px] md:py-10 md:px-[100px] '
          }`}
      >
        <div className={`text-xl ${fontSize} ${unuppercase ? '' : 'uppercase'}`}>{title}</div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className={`lucide lucide-chevron-up transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d='m18 15-6-6-6 6' />
        </svg>
      </div>
      <div
        className={` transition-all duration-300 overflow-hidden ${size === 'sm' ? 'pb-0' : 'px-[15px] md:px-[100px]'
          } ${isOpen ? 'pb-10 max-h-[1000px]' : 'pb-0 max-h-[0px]'}`}
      >
        <>{children}</>
      </div>
    </div>
  )
}

export const Slider = ({
  tag = false,
  dataSlide,
  title,
  background,
  description,
  buttonTitle = 'Discover more',
  button2 = false
}: {
  tag?: boolean
  dataSlide: number[]
  title: string
  background?: string
  description?: string
  buttonTitle?: string
  button2?: boolean
}) => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className={`py-20 overflow-hidden ${background}`}>
      <h2 className={`text-center uppercase text-2xl  lg:text-[32px] ${description ? 'mb-4' : 'mb-20'}`}>{title}</h2>
      {description && <p className='text-center text-[16px] max-w-[888px] mx-auto mb-20'>{description}</p>}
      <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto flex px-4 lg:px-0 relative '>
        <button
          onClick={() => {
            if (currentIndex < dataSlide.length - 3) {
              setCurrentIndex(currentIndex + 1)
            }
          }}
          className={`${currentIndex === dataSlide.length - 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } absolute hover:bg-gray-200 transition-all duration-300 z-10 right-5 top-1/2 -translate-y-1/2 bg-gray-300 cursor-pointer rounded-full p-2`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-chevron-right'
          >
            <path d='m9 18 6-6-6-6' />
          </svg>
        </button>
        <button
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1)
            }
          }}
          className={`${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } absolute hover:bg-gray-200 transition-all duration-300 z-10 left-5 top-1/2 -translate-y-1/2 bg-gray-300 cursor-pointer rounded-full p-2`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-chevron-right rotate-180'
          >
            <path d='m9 18 6-6-6-6' />
          </svg>
        </button>
        <div
          style={{ transform: `translateX(-${(978 / 3) * currentIndex}pt)` }}
          className='w-max transition-all duration-300 flex gap-x-10'
        >
          {dataSlide.map((_, index) => (
            <div key={index} className='w-[calc(79pc/3-30px)] lg:w-[calc(59pc/3-30px)] 2xl:w-[calc(978pt/3-30px)]'>
              <div>
                <img src={weekdayVacationTile} alt={t('skypark.slider.weekday_escapade.image_alt')} />
              </div>
              <p className='text-xl uppercase my-5'>
                {t('skypark.slider.weekday_escapade.title')}
                {tag && (
                  <p className='text-sm pt-2 uppercase'>
                    {t('skypark.slider.weekday_escapade.tag')}
                  </p>
                )}
              </p>

              <p className='text-[16px] text-[#333333] mb-10'>
                {t('skypark.slider.weekday_escapade.description')}
              </p>
              <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 relative hover:opacity-60 group transition-all duration-300'>
                {t(buttonTitle)}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
              {button2 && (
                <div>
                  <Link to='/booking'>
                    <ButtonBlack className='float-left' title={t('common.reserveNow')} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default SkyparkObservationDeck
