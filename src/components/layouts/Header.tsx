/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/logo-01.png'
import { Select } from '../Select'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'

const Header = () => {



  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('lang') || 'vn')
  const { t, i18n } = useTranslation()
  const { data: imageData } = useQuery({
    queryKey: ['images', 'home'],
    queryFn: () => imageApi.getImages({ pageSlug: 'logo' })
  })

  // Helper function to get image URL by filename
  const getImageUrl = (filename: string, fallbackImage: string) => {
    if (!imageData?.data?.data) return fallbackImage

    const foundImage = imageData.data.data.find((img) => img.filename === filename)

    return foundImage?.url || fallbackImage
  }
  useEffect(() => {
    const savedLanguage = localStorage.getItem('lang')
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])
  const handleLanguageChange = (language: any) => {
    i18n.changeLanguage(language)
    localStorage.setItem('lang', language)
    setSelectedLanguage(language)
  }
  const initialData = [
    {
      name: t('languages.english'),
      value: 'en'
    },
    {
      name: t('languages.vietnamese'),
      value: 'vn'
    },
    {
      name: t('languages.korean'),
      value: 'ko'
    },
    {
      name: t('languages.chinese'),
      value: 'zh'
    },
    {
      name: t('languages.japanese'),
      value: 'ja'
    }
  ]
  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full bg-white  px-4 lg:px-[30px] flex items-center gap-x-3 lg:gap-x-10 transition-all ease-in-out duration-500`}
        style={{
          boxShadow: '0 4px 8px 0 rgba(0,0,0,.16)'
        }}
      >
        <div className='flex justify-center items-center flex-shrink-0'>
          <Link to={'/'}>
            <img className='size-20 rounded-full' src={getImageUrl('logo-01', logo)} alt='logo' />
          </Link>
        </div>
        <div className='flex items-center gap-5 maw-w-[calc(100vw-0px)] md:max-w-max overflow-x-auto md:overflow-visible'>
          <Link
            to={'/about-us'}
            className={`  gap-4 font-medium group hover:font-bold tranition-all duration-300 flex-shrink-0  `}
          >
            Giới thiệu
          </Link>
          <Link
            to={'/service/support'}
            className={`  gap-4 font-medium group hover:font-bold transition-all duration-300 flex-shrink-0 `}
          >
            Dịch vụ
          </Link>
          <Link
            to={'/poker-club'}
            className={`  gap-4 font-medium group hover:font-bold tranition-all duration-300 flex-shrink-0  `}
          >
            Poker Club
          </Link>
          <Link
            to={'/casino-vip'}
            className={`  gap-4 font-medium group hover:font-bold transition-all duration-300 flex-shrink-0 `}
          >
            Casino VIP
          </Link>

          <button className={` flex items-center flex-shrink-0  gap-2 font-medium group hover:font-bold transition-all relative`}>
            Ưu đãi
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
            </svg>
            <div className='fixed md:absolute  bg-white w-full lg:w-[280px] top-[50px] lg:top-6 left-1/2 -translate-x-1/2 rounded-lg shadow-md overflow-hidden duration-500 group-hover:max-h-[1000px] max-h-0 transition-all text-left'>
              <div className='flex flex-col gap-2 p-4'>
                <Link to={'/lifestyle'} className={` flex items-center gap-4 font-medium group hover:font-bold `}>
                  {t('header.rewards.sandsLifestyle')}
                </Link>
                <Link
                  to={'/vip-membership-offers'}
                  className={` flex items-center gap-4 font-medium group transition-all hover:font-bold `}
                >
                  {t('header.rewards.vipMembership')}
                </Link>
                <Link
                  to={'/premium-perks'}
                  className={` flex items-center gap-4 font-medium group transition-all hover:font-bold `}
                >
                  {t('header.rewards.premiumPerks')}
                </Link>
                <Link
                  to={'/event-tournament-promotions'}
                  className={` flex items-center gap-4 font-medium group transition-all hover:font-bold `}
                >
                  {t('header.rewards.eventPromotions')}
                </Link>
                <Link
                  to={'/hotel/packages'}
                  className={` flex items-center gap-4 font-medium group transition-all hover:font-bold `}
                >
                  {t('header.stay.onlineExclusive.stayPackages')}
                </Link>
              </div>
            </div>
          </button>
          <Link
            to={'/contact-now'}
            className={` flex items-center gap-4 font-medium group hover:font-bold transition-all duration-300 flex-shrink-0 `}
          >
            Liên hệ
          </Link>
          {/* <button onClick={() => setIsNavOpen('Rewards')} className={` flex items-center gap-4 uppercase group `}>
            {t('header.navigation.rewards')}
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
              className='lucide lucide-move-right transition-all duration-300 group-hover:translate-x-2'
            >
              <path d='M18 8L22 12L18 16' />
              <path d='M2 12H22' />
            </svg>
          </button> */}
        </div>
        <Select initialView={initialData} selected={selectedLanguage} setSelected={handleLanguageChange} />
      </header>

      {/* <div
        className={`fixed inset-0 bg-white z-30 bg-opacity-70 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed left-0 top-0 bg-[#f0f1eb] w-full lg:w-[360px] h-full pt-[60px] z-40 transition-all duration-700 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
      >
        <div className='py-[40px] px-[60px]'>
          <div className='space-y-8'>
            <button onClick={() => setIsNavOpen('stay')} className={` flex items-center gap-4 uppercase group `}>
              {t('header.navigation.stay')}
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
                className='lucide lucide-move-right transition-all duration-300 group-hover:translate-x-2'
              >
                <path d='M18 8L22 12L18 16' />
                <path d='M2 12H22' />
              </svg>
            </button>

            <button onClick={() => setIsNavOpen('Rewards')} className={` flex items-center gap-4 uppercase group `}>
              {t('header.navigation.rewards')}
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
                className='lucide lucide-move-right transition-all duration-300 group-hover:translate-x-2'
              >
                <path d='M18 8L22 12L18 16' />
                <path d='M2 12H22' />
              </svg>
            </button>
            <Link onClick={toggleMenu} to={'/service/support'} className={` flex items-center gap-4 uppercase group `}>
              Dịch vụ
            </Link>
            <Link onClick={toggleMenu} to={'/about-us'} className={` flex items-center gap-4 uppercase group `}>
              {t('header.navigation.aboutUs')}
            </Link>

            <Select initialView={initialData} selected={selectedLanguage} setSelected={handleLanguageChange} />
          </div>
        </div>
      </div>
      <div
        className={`fixed  top-0 bg-[#e1e2d6] w-full lg:w-[360px] h-full pt-[60px] z-40 transition-all duration-700 ${isNavOpen === 'stay' ? 'opacity-100 visible lg:left-[360px]' : 'opacity-0 invisible left-0'
          }`}
      >

        <div className='py-[40px] px-[60px]'>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <p className='text-sm text-[#666666] mb-5'>{t('header.stay.title')}</p>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/hotel/the-sands-collection'} className='hover:opacity-65'>
                {t('header.stay.letsVipCollection')}
              </Link>
              <Link onClick={toggleMenu} to={'/hotel/the-paiza-collection'} className='hover:opacity-65'>
                {t('header.stay.paizaCollection')}
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <p className='text-sm text-[#666666] mb-5'>{t('header.stay.onlineExclusive.title')}</p>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/hotel/packages'} className='hover:opacity-65'>
                {t('header.stay.onlineExclusive.stayPackages')}
              </Link>
            </div>
          </div>
          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <p className='text-sm text-[#666666] mb-5'>{t('header.stay.experiences.title')}</p>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/attractions/skypark-observation-deck'} className='hover:opacity-65'>
                {t('header.stay.experiences.skypark')}
              </Link>
              <Link onClick={toggleMenu} to={'/attractions/infinity-pool'} className='hover:opacity-65'>
                {t('header.stay.experiences.infinityPool')}
              </Link>
              <Link onClick={toggleMenu} to={'/'} className='hover:opacity-65'>
                {t('header.stay.experiences.guestPrivileges')}
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div
        className={`fixed  top-0 bg-[#e1e2d6] w-full lg:w-[360px] h-full pt-[60px] z-40 transition-all duration-700 ${isNavOpen === 'Rewards' ? 'opacity-100 visible lg:left-[360px]' : 'opacity-0 invisible left-0'
          }`}
      >

        <div className='py-[40px] px-[60px]'>

          <div className='pt-2 pb-5 border-t border-[#c5c6bc]'>
            <div className='space-y-3 flex flex-col uppercase'>
              <Link onClick={toggleMenu} to={'/lifestyle'} className='hover:opacity-65'>
                {t('header.rewards.sandsLifestyle')}
              </Link>
              <Link onClick={toggleMenu} to={'/vip-membership-offers'} className='hover:opacity-65'>
                {t('header.rewards.vipMembership')}
              </Link>
              <Link onClick={toggleMenu} to={'/premium-perks'} className='hover:opacity-65'>
                {t('header.rewards.premiumPerks')}
              </Link>
              <Link onClick={toggleMenu} to={'/event-tournament-promotions'} className='hover:opacity-65'>
                {t('header.rewards.eventPromotions')}
              </Link>

            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Header
