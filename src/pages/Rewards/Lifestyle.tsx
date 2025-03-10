import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useScreenSize from '~/hooks/useScreenSize'
import bannerPC from '~/assets/card-tb-01.png'
import xanh1 from '~/assets/card-tb-02.png'
import do1 from '~/assets/card-tb-03.png'
import vang1 from '~/assets/card-tb-04.png'
import trang1 from '~/assets/card-tb-05.png'
const Lifestyle = () => {
  const { t } = useTranslation()
  const screenSize = useScreenSize()
  const [currentIndex, setCurrentIndex] = useState(0)

  const dataMembership = [
    {
      img: xanh1,
      title: t('lifestyle.membership.lifestyle.title'),
      content: (
        <>
          <li>Automatically granted upon registration, no points required.          </li>
          <li>Earn 1 point per $10 wagered. 1,000 points = $25.</li>
          <li>5% discount at restaurants and bars.</li>
        </>
      )
    },
    {
      img: do1,
      title: t('lifestyle.membership.prestige.title'),
      content: (
        <>
          <li>Requires 5,000 – 19,999 points or a minimum total wager of $50,000 within 6 months. Members must maintain at least 5,000 points per year to keep this tier.</li>
          <li>Earn 1 point per $7.5 wagered. 1,000 points = $37.5.</li>
          <li>10% discount at restaurants and bars, priority reservations at the casino.</li>
        </>
      )
    },
    {
      img: vang1,
      title: t('lifestyle.membership.elite.title'),
      content: (
        <>
          <li>Requires 20,000 – 49,999 points or a minimum total wager of $100,000 within 6 months. Members must maintain at least 20,000 points per year to keep this tier.</li>
          <li>Earn 1 point per $5 wagered. 1,000 points = $50.</li>
          <li>15% discount at restaurants and bars, VIP lounge access, complimentary shuttle service within a designated area.</li>

        </>
      )
    },
    {
      img: trang1,
      title: t('lifestyle.membership.paiza.title'),
      content: (
        <>
          <li> Requires 50,000+ points or a minimum total wager of $250,000 within 6 months. This tier is invitation-only for VIP members. To maintain this status, members must wager at least $500,000 per year.</li>
          <li>Earn 1 point per $2.5 wagered. 1,000 points = $100.</li>
          <li>20% discount at restaurants and bars, access to the highest-tier VIP lounge, 24/7 personal VIP assistance, complimentary luxury transportation (including high-end vehicles or private jets), exclusive poker tournaments, and elite events.</li>
        </>
      )
    }
  ]

  return (
    <div>
      <div>
        <img
          src={bannerPC}
          alt={t('lifestyle.banner.desktopAlt')}
          className='h-auto object-cover hidden md:block w-full scale-75'
          style={{ aspectRatio: '21/9' }}
        />
        <img src={bannerPC} alt={t('lifestyle.banner.mobileAlt')} className='h-auto object-cover block md:hidden' />
      </div>
      <div className='xl:pt-[100px] pb-10'>
        <div className='max-w-[888px] mx-auto px-[33px] lg:px-0'>
          <h1 className='uppercase text-[40px] text-center mb-10'>{t('lifestyle.title')}</h1>
          <p className='text-center text-[16px] mb-4'>For loyal players, featuring various privileges and rewards. Our VIP system includes four tiers: Green, Red, Gold, and Infinite, each with specific requirements and benefits.</p>

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
          <p className='text-center text-[16px] mb-4'>Benefits and policies are subject to change. Join now to enjoy the exclusive VIP experience at Let’s Win!

          </p>
        </div>
      </div>
      <div className='py-20 overflow-hidden'>
        <h2 className='text-center uppercase text-2xl mb-20 lg:text-[32px]'>{t('lifestyle.membershipTiers')}</h2>
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto flex px-4 lg:px-0 relative overflow-x-scroll md:overflow-x-hidden'>
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
            className={`${screenSize === 'md' || screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl'
              ? currentIndex === dataMembership.length - 3
                ? 'opacity-0 pointer-events-none'
                : 'opacity-100'
              : currentIndex === dataMembership.length - 1
                ? 'opacity-0 pointer-events-none'
                : 'opacity-100'
              } absolute hidden md:block hover:bg-gray-200 transition-all duration-300 z-10 right-5 top-1/2 -translate-y-1/2 bg-gray-300 cursor-pointer rounded-full p-2`}
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
              } absolute hidden md:block hover:bg-gray-200 transition-all duration-300 z-10 left-5 top-1/2 -translate-y-1/2 bg-gray-300 cursor-pointer rounded-full p-2`}
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
                <div className='text-[#333333] space-y-1'>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lifestyle
