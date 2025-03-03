import bannerPC from '~/assets/more-masthead-desktop-1920x1080.avif'
import bannerMobile from '~/assets/more-masthead-mobile-1080x1920.webp'
import bannerLandingModule1 from '~/assets/casino-landing-module-1-1920x1080.avif'
import bannerLandingModule3 from '~/assets/casino-landing-module-3-1920x1080.webp'

import rewardsClub from '~/assets/rewards-club.avif'
import { useTranslation } from 'react-i18next'

const More = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div>
        <img
          src={bannerPC}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={bannerMobile}
          alt='bannerMobile'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div>
        <div className='pt-[160px] px-[33px]'>
          <h1 className='mb-10 text-center text-[28px] md:text-[40px] max-w-[980px] md:mx-auto'>
            {t('more.title')}
          </h1>
        </div>
        <div className='py-20'>
          <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
            <div className='lg:col-span-2'>
              <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('more.casinoLevy.title')}</h2>
              <div className='hidden lg:block'>
                <p className='text-[15px] mt-4 mb-8 text-[#333333]'>
                  {t('more.casinoLevy.description')}
                </p>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('more.viewDetails')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </div>
            </div>
            <div className='lg:col-span-5'>
              <img className='mt-5 lg:mt-0' src={bannerLandingModule1} alt='bannerLandingModule1' />
              <div className='block lg:hidden'>
                <p className='text-[15px] lg:text-[16px] mt-4 mb-8 text-[#333333]'>
                  {t('more.casinoLevy.description')}
                </p>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('more.viewDetails')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#f0f1eb] py-16'>
          <h3 className='uppercase text-[25px] mb-4 pl-4 lg:hidden'>{t('more.rewardsClub.title')}</h3>
          <div className='gap-x-10 lg:grid-cols-3 grid 2xl:grid-cols-5'>
            <div className='lg:col-span-2 2xl:col-span-3'>
              <img src={rewardsClub} alt='rewardsClub' className='h-max w-max' />
            </div>
            <div className='lg:col-span-1 2xl:col-span-2 2xl:pr-[180px] pl-4 pr-[34px] lg:p-0'>
              <h3 className='uppercase text-[32px] hidden lg:block'>{t('more.rewardsClub.title')}</h3>
              <p className='py-4 uppercase'>{t('more.rewardsClub.subtitle')}</p>
              <p className='text-[#333333] mb-4'>{t('more.rewardsClub.description')}</p>
              <ul className='list-disc pl-5 text-[#333333] mb-5'>
                {(t('more.rewardsClub.locations', { returnObjects: true }) as string[]).map((location: string, index: number) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
              <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                {t('more.viewDetails')}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
            </div>
          </div>
        </div>
        <div className='py-20'>
          <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
            <div className='lg:col-span-2'>
              <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('more.responsibleGambling.title')}</h2>
              <div className='hidden lg:block'>
                <p className='uppercase text-[15px] my-4 font-medium text-[#333333]'>{t('more.responsibleGambling.subtitle')}</p>
                <p className='text-[15px] mt-4 mb-8 text-[#333333]'>{t('more.responsibleGambling.description')}</p>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('more.viewDetails')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </div>
            </div>
            <div className='lg:col-span-5'>
              <img className='mt-5 lg:mt-0' src={bannerLandingModule3} alt='bannerLandingModule3' />
              <div className='block lg:hidden'>
                <p className='uppercase text-[15px] my-4 font-medium text-[#333333]'>{t('more.responsibleGambling.subtitle')}</p>
                <p className='text-[15px] lg:text-[16px] mt-4 mb-8 text-[#333333]'>{t('more.responsibleGambling.description')}</p>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('more.viewDetails')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More
