import bannerPC from '~/assets/paiza-collection-masthead-desktop.avif'
import bannerMobile from '~/assets/paiza-collection-masthead-mobile.avif'
import sandsPremierRoom1 from '~/assets/sands-premier-room-1.avif'
import weekdayVacationTile from '~/assets/weekday-vacation-tile-1920x1080.avif'
import infinityMastheadMobile from '~/assets/infinity-masthead-mobile-1080x1440.webp'
import oasis from '~/assets/A-PRIVATE-OASIS.avif'
import sandsLifestyle from '~/assets/sands-lifestyle.avif'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'

const ThePaizaCollection = () => {
  const { t } = useTranslation()
  
  // Query for paiza collection images
  const { data: imageData } = useQuery({
    queryKey: ['images', 'the-paiza-collection'],
    queryFn: () => imageApi.getImages({ pageSlug: 'the-paiza-collection' })
  })

  // Helper function to get image URL by filename
  const getImageUrl = (filename: string, fallbackImage: string) => {
    if (!imageData?.data?.data) return fallbackImage;
    
    const foundImage = imageData.data.data.find(
      (img) => img.filename === filename
    );
    
    return foundImage?.url || fallbackImage;
  };

  const dataSlide = [1, 2, 3]
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div>
      <div>
        <img
          src={getImageUrl('paiza-collection-masthead-mobile', bannerPC)}
          alt={t('paiza.bannerAlt')}
          className='h-auto object-cover hidden md:block w-full'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={getImageUrl('paiza-collection-masthead-mobile', bannerMobile)}
          alt={t('paiza.bannerMobileAlt')}
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-[160px] pb-10'>
        <div className='max-w-[888px] mx-auto px-[33px] lg:px-0'>
          <h1 className='uppercase text-[40px] text-center mb-10'>{t('paiza.title')}</h1>
          <p className='text-center text-[16px] mb-4'>{t('paiza.intro')}</p>
          <p className='text-center text-[16px] mb-4'>{t('paiza.description1')}</p>
          <p className='text-center text-[16px] mb-4'>{t('paiza.description2')}</p>
          <p className='text-center text-[16px] mb-4'>{t('paiza.description3')}</p>
          <p className='text-center text-[16px] mb-4'>{t('paiza.description4')}</p>
          <Link to='/booking'>
            <button className='bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px]'>
              {t('common.reserveNow')}
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-[#eef0eb] py-10'>
        <h2 className='px-4 lg:px-0 lg:w-[59pc] 2xl:w-[978pt] mx-auto uppercase text-2xl mb-10'>
          {t('paiza.experienceTitle')}
        </h2>
        <div className='px-4 lg:px-0 grid lg:grid-cols-4 gap-x-10 gap-y-10 lg:w-[59pc] 2xl:w-[978pt] mx-auto'>
          {[1, 2, 3, 4].map((_, index) => (
            <div className='' key={index}>
              <img 
                src={getImageUrl('weekday-vacation-tile-1920x1080', weekdayVacationTile)} 
                alt={t('paiza.experienceImageAlt')} 
              />
              <div>
                <p className='uppercase text-[16px] text-[#333333] py-4'>
                  {t(`paiza.experiences.${index}.title`)}
                </p>
                <p className='text-[16px] text-[#333333]'>
                  {t(`paiza.experiences.${index}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='pt-10 mb-40'>
        <div className='px-4 lg:px-0 grid md:grid-cols-2 gap-x-10 gap-y-40 lg:w-[59pc] 2xl:w-[978pt] mx-auto'>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index}>
              <div className='mb-5'>
                <img src={sandsPremierRoom1} alt={t('paiza.rooms.premierRoom.imageAlt')} />
              </div>
              <Link to='/' className='text-[20px] uppercase'>
                {t('paiza.rooms.premierRoom.title')}
              </Link>
              <div className='mb-5 flex items-center mt-2'>
                <p className='uppercase text-[16px] leading-4 border-r border-black pr-3 mr-3'>
                  {t('paiza.rooms.premierRoom.gardenView')}
                </p>
                <p className='uppercase text-[16px] leading-4 text-[#c5c6bc] cursor-pointer'>
                  {t('paiza.rooms.premierRoom.cityView')}
                </p>
              </div>
              <p className='mb-5 text-[#333333]'>
                {t('paiza.rooms.premierRoom.description')}
              </p>
              <ul className='flex flex-col list-disc text-[#333333] pl-6 mb-20'>
                <li>{t('paiza.rooms.premierRoom.features.size')}</li>
                <li>{t('paiza.rooms.premierRoom.features.guests')}</li>
                <li>{t('paiza.rooms.premierRoom.features.beds')}</li>
              </ul>
              <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                {t('common.viewDetails')}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='py-20 bg-[#eef0eb]'>
        <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10'>
          <div className='lg:col-span-5'>
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>
              {t('paiza.paizaExperience.title')}
            </h2>
            <img 
              className='mt-5 lg:mt-0' 
              src={getImageUrl('sands-lifestyle', sandsLifestyle)} 
              alt={t('paiza.paizaExperience.imageAlt')} 
            />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <p className='text-[15px] mt-4 mb-4 text-[#333333]'>
                {t('paiza.paizaExperience.description')}
              </p>
              <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                {t('common.viewDetails')}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>
              {t('paiza.paizaExperience.title')}
            </h2>
            <div className='hidden lg:block'>
              <p className='text-[15px] mt-4 mb-4 text-[#333333]'>
                {t('paiza.paizaExperience.description')}
              </p>
              <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                {t('common.viewDetails')}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='py-20 overflow-hidden'>
        <h2 className='text-center uppercase text-2xl mb-20 lg:text-[32px]'>
          {t('paiza.discover.title')}
        </h2>
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto flex px-4 lg:px-0 relative'>
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
                  <img src={infinityMastheadMobile} alt={t('paiza.discover.slides.imageAlt')} />
                </div>
                <p className='text-xl uppercase my-5'>{t('paiza.discover.slides.title')}</p>
                <p className='text-[16px] text-[#333333] mb-10'>
                  {t('paiza.discover.slides.description')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>
              {t('paiza.aboveExpectation.title')}
            </h2>
            <div className='hidden lg:block'>
              <p className='text-[15px] mt-4 mb-4 text-[#333333]'>
                {t('paiza.aboveExpectation.description1')}
              </p>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('paiza.aboveExpectation.description2')}
              </p>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('paiza.aboveExpectation.description3')}
              </p>
              <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                {t('common.discoverMore')}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
          <div className='lg:col-span-5'>
            <img 
              className='mt-5 lg:mt-0' 
              src={getImageUrl('A-PRIVATE-OASIS', oasis)} 
              alt={t('paiza.aboveExpectation.imageAlt')} 
            />
            <div className='block lg:hidden'>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('paiza.aboveExpectation.description2')}
              </p>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('paiza.aboveExpectation.description3')}
              </p>
              <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                {t('common.discoverMore')}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ThePaizaCollection
