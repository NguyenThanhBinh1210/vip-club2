import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useScreenSize from '~/hooks/useScreenSize'
import bannerPC from '~/assets/the-sands-collection-masthead-desktop.avif'
import bannerMobile from '~/assets/the-sands-collection-masthead-mobile.avif'
import weekdayVacationTile from '~/assets/weekday-vacation-tile-1920x1080.avif'

const Lifestyle = () => {
  const { t } = useTranslation()
  const screenSize = useScreenSize()
  const [currentIndex, setCurrentIndex] = useState(0)

  const dataMembership = [
    {
      img: weekdayVacationTile,
      title: t('lifestyle.membership.lifestyle.title'),
      content: (
        <>
          <li>{t('lifestyle.membership.lifestyle.benefits.free')}</li>
          <li>{t('lifestyle.membership.lifestyle.benefits.tickets')}</li>
          <li>{t('lifestyle.membership.lifestyle.benefits.parking')}</li>
        </>
      )
    },
    {
      img: weekdayVacationTile,
      title: t('lifestyle.membership.prestige.title'),
      content: (
        <>
          <li>{t('lifestyle.membership.prestige.benefits.upgrade')}</li>
          <li>{t('lifestyle.membership.prestige.benefits.tickets')}</li>
          <li>{t('lifestyle.membership.prestige.benefits.room')}</li>
          <li>{t('lifestyle.membership.prestige.benefits.parking')}</li>
        </>
      )
    },
    {
      img: weekdayVacationTile,
      title: t('lifestyle.membership.elite.title'),
      content: (
        <>
          <li>{t('lifestyle.membership.elite.benefits.upgrade')}</li>
          <li>{t('lifestyle.membership.elite.benefits.tickets')}</li>
          <li>{t('lifestyle.membership.elite.benefits.room')}</li>
          <li>{t('lifestyle.membership.elite.benefits.parking')}</li>
          <li>{t('lifestyle.membership.elite.benefits.events')}</li>
        </>
      )
    },
    {
      img: weekdayVacationTile,
      title: t('lifestyle.membership.paiza.title'),
      content: (
        <>
          <li>{t('lifestyle.membership.paiza.benefits.upgrade')}</li>
          <li>{t('lifestyle.membership.paiza.benefits.tickets')}</li>
          <li>{t('lifestyle.membership.paiza.benefits.room')}</li>
          <li>{t('lifestyle.membership.paiza.benefits.parking')}</li>
          <li>{t('lifestyle.membership.paiza.benefits.access')}</li>
        </>
      )
    },
  ]

  return (
    <div>
      <div>
        <img
          src={bannerPC}
          alt={t('lifestyle.banner.desktopAlt')}
          className='h-auto object-cover hidden md:block'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={bannerMobile}
          alt={t('lifestyle.banner.mobileAlt')}
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-[160px] pb-10'>
        <div className='max-w-[888px] mx-auto px-[33px] lg:px-0'>
          <h1 className='uppercase text-[40px] text-center mb-10'>{t('lifestyle.title')}</h1>
          <p className='text-center text-[16px] mb-4'>{t('lifestyle.description')}</p>

          <Link to='/signup'>
            <button className='bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px]'>
              {t('common.signUp')}
            </button>
          </Link>
          <p className='text-center text-[16px] mb-4'>
            {t('lifestyle.alreadyMember')}{' '}
            <Link to='/login' className='text-black underline'>
              {t('common.signIn')}
            </Link>
          </p>
          <p className='text-center text-[16px] mb-4'>{t('lifestyle.tourist')}</p>
        </div>
      </div>
      <div className='py-20 overflow-hidden'>
        <h2 className='text-center uppercase text-2xl mb-20 lg:text-[32px]'>{t('lifestyle.membershipTiers')}</h2>
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto flex px-4 lg:px-0 relative'>
          <button
            onClick={() => {
              if (screenSize === 'md' || screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl') {
                if (currentIndex < dataMembership.length - 3) {
                  setCurrentIndex(currentIndex + 1)
                }
              }
              if (screenSize === 'sm') {
                if (currentIndex < dataMembership.length - 1) {
                  setCurrentIndex(currentIndex + 1)
                }
              }
            }}
            className={`${screenSize === 'md' || screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl' ? currentIndex === dataMembership.length - 3 ? 'opacity-0 pointer-events-none' : 'opacity-100' : currentIndex === dataMembership.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
            {dataMembership.map((item, index) => (
              <div key={index} className='w-[calc(79pc/3-30px)] lg:w-[calc(59pc/3-30px)] 2xl:w-[calc(978pt/3-30px)]'>
                <div>
                  <img src={item.img} alt={t('lifestyle.membership.imageAlt')} />
                </div>
                <p className='text-xl uppercase my-5'>{item.title}</p>
                <div className='text-[#333333] space-y-1'>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lifestyle
