/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useScreenSize from '~/hooks/useScreenSize'
import bannerPC from '~/assets/card-tb-01.png'
import xanh1 from '~/assets/card-tb-02.png'
import do1 from '~/assets/card-tb-03.png'
import vang1 from '~/assets/card-tb-04.png'
import trang1 from '~/assets/card-tb-05.png'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'

const Lifestyle = () => {
  const { t } = useTranslation()
  const { data: imageData } = useQuery({
    queryKey: ['images', 'lifestyle'],
    queryFn: () => imageApi.getImages({ pageSlug: 'lifestyle' })
  })

  // Helper function to get image URL by filename
  const getImageUrl = (filename: string, fallbackImage: string) => {
    if (!imageData?.data?.data) return fallbackImage;
    
    const foundImage = imageData.data.data.find(
      (img) => img.filename === filename
    );
    
    return foundImage?.url || fallbackImage;
  };

  return (
    <div>
      <div>
        <img
          src={getImageUrl('card-tb-01', bannerPC)}
          alt={t('lifestyle.banner.desktopAlt')}
          className='h-auto object-cover hidden md:block w-full scale-75'
          style={{ aspectRatio: '21/9' }}
        />
        <img src={bannerPC} alt={t('lifestyle.banner.mobileAlt')} className='h-auto object-cover block md:hidden' />
      </div>
      <div className='xl:pt-[100px] pb-10'>
        <div className='max-w-[888px] mx-auto px-[33px] lg:px-0'>
          <h1 className='uppercase text-[40px] text-center mb-10'>{t('lifestyle.title')}</h1>
          <p className='text-center text-[16px] mb-4'>{t('lifestyle.membership.description')}</p>

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
          <p className='text-center text-[16px] mb-4'>
            {t('lifestyle.description')}
          </p>
        </div>
      </div>
      <div className='py-20 overflow-hidden'>
        <h2 className='text-center uppercase text-2xl mb-20 lg:text-[32px]'>{t('lifestyle.membershipTiers')}</h2>
        <Level />
      </div>
    </div>
  )
}

export const Level = () => {
  const { t } = useTranslation()
  const { data: imageData } = useQuery({
    queryKey: ['images', 'home'],
    queryFn: () => imageApi.getImages({ pageSlug: 'home' })
  })

  // Helper function to get image URL by filename
  const getImageUrl = (filename: string, fallbackImage: string) => {
    if (!imageData?.data?.data) return fallbackImage;
    
    const foundImage = imageData.data.data.find(
      (img) => img.filename === filename
    );
    
    return foundImage?.url || fallbackImage;
  };
  const screenSize = useScreenSize()
  const [currentIndex, setCurrentIndex] = useState(0)
  const dataMembership = [
    {
      img: getImageUrl('card-tb-02', xanh1),
      title: t('lifestyle.membership.lifestyle.title'),
      content: (
        <>
          {(t('lifestyle.membership.lifestyle.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </>
      )
    },
    {
      img: getImageUrl('card-tb-03', do1),
      title: t('lifestyle.membership.prestige.title'),
      content: (
        <>
          {(t('lifestyle.membership.prestige.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </>
      )
    },
    {
      img: getImageUrl('card-tb-04', vang1),
      title: t('lifestyle.membership.elite.title'),
      content: (
        <>
          {(t('lifestyle.membership.elite.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </>
      )
    },
    {
      img: getImageUrl('card-tb-05', trang1),
      title: t('lifestyle.membership.paiza.title'),
      content: (
        <>
          {(t('lifestyle.membership.paiza.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </>
      )
    }
  ]

  return (
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
        {dataMembership.map((item: any, index: any) => (
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
  )
}

export default Lifestyle
