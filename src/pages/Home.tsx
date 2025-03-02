import bannerLandingModule3 from '~/assets/casino-landing-module-3-1920x1080.webp'

import hotram1 from '~/assets/Gaming-Salon-2048x1366.jpg'
import hotram2 from '~/assets/Casino-Slot-Angle-1-2_S.jpg'
import hoian from '~/assets/GHI0408-HDR-scaled.webp'
import hoian2 from '~/assets/hoian2.webp'
import hoian3 from '~/assets/hoian3.webp'
import hotrambanner from '~/assets/hotrambannerpc.png'
import rewardsClub from '~/assets/rewards-club.avif'
import { ButtonBlack } from './Shop/Shopping'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div>
        <img
          src={hotrambanner}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full'
          // style={{ aspectRatio: '21/9' }}
        />
        <img
          src={hotrambanner}
          alt='hotrambanner'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div>
        <div className='pt-[160px] px-[33px]'>
          <h1 className='mb-10 text-center text-[28px] md:text-[40px] max-w-[980px] md:mx-auto uppercase'>
            {t('home.hero.title')}
          </h1>
        </div>
        <div className='py-20'>
          <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
            <div className='lg:col-span-2'>
              <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('home.hoTram.title')}</h2>
              <div className='hidden lg:block'>
                <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                  <p className='mb-2'>{t('home.hoTram.description')}</p>
                  <li className='mb-2'>{t('home.hoTram.features.environment')}</li>
                  <li className='mb-2'>{t('home.hoTram.features.services')}</li>
                  <li className='mb-2'>{t('home.hoTram.features.privacy')}</li>
                </div>
                <a href='tel:0909090909'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                    {t('home.buttons.contact')}
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
            <div className='lg:col-span-5'>
              <img className='mt-5 lg:mt-0 ' src={hotram1} alt='hotram1' />
              <div className='block lg:hidden'>
                <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                  <p className='mb-2'>
                    {t('home.hoTram.description')}
                  </p>
                  <li className='mb-2'>{t('home.hoTram.features.environment')}</li>
                  <li className='mb-2'>{t('home.hoTram.features.services')}</li>
                  <li className='mb-2'>{t('home.hoTram.features.privacy')}</li>
                  {/* <li className='mb-2'>
                    <strong>{t('home.hoTram.features.environment.title')}</strong>
                    {t('home.hoTram.features.environment.description')}
                  </li>
                  <li className='mb-2'>
                    <strong>{t('home.hoTram.features.services.title')}</strong>
                    {t('home.hoTram.features.services.description')}
                  </li>
                  <li className='mb-2'>
                    <strong>{t('home.hoTram.features.privacy.title')}</strong>
                    {t('home.hoTram.features.privacy.description')}
                  </li> */}
                </div>

                <a href='tel:0909090909'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                    {t('home.buttons.contact')}
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <img
            // style={{ aspectRatio: '16/9' }}
            className='object-cover h-auto w-full'
            src={hotram2}
            alt='hotram2'
          />
        </div>
        <div className='pt-40 pb-20'>
          <div className='pl-4'>
            <h2 className='text-[25px] uppercase block lg:hidden'>POKER CLUB IN DA NANG</h2>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-10 lg:w-[59pc] xl:w-[79pc] 2xl:w-[82pc] mx-auto'>
            <div>
              <img
                className='lg:pt-[15pc] mt-[2pc] lg:mt-0 object-cover aspect-[7/9] lg:aspect-[4.5/9]'
                src={hoian2}
                alt='hoian2'
                // style={{ aspectRatio: '4.5/9' }}
              />
            </div>
            <div>
              <img className='pt-[140pt] lg:pt-0' src={hoian3} alt='hoian3' />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <h2 className='text-[32px] mt-10 uppercase mb-4 hidden lg:block'>{t('home.daNang.title')}</h2>
              <div className='space-y-4 p-4 pr-[34px] lg:p-0'>
                <p className='mb-2'>
                  {t('home.daNang.description')}
                </p>
                <li>
                  <strong>{t('home.daNang.features.rooms.title')}</strong>
                  {t('home.daNang.features.rooms.description')}
                </li>
                <li>
                  <strong>{t('home.daNang.features.services.title')}</strong>
                  {t('home.daNang.features.services.description')}
                </li>
                <li>
                  <strong>{t('home.daNang.features.lounge.title')}</strong>
                  {t('home.daNang.features.lounge.description')}
                </li>
                <a href='tel:0909090909'>
                  <ButtonBlack className='ml-0 mt-10' title={t('home.buttons.contact')} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='py-20'>
          <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10'>
            <div className='lg:col-span-5'>
              <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>{t('home.hoiana.title')}</h2>

              <img className='mt-5 lg:mt-0 ' src={hoian} alt='hoian' />
              <div className='block lg:hidden pl-4 lg:pl-0'>
                <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                  <p className='mb-2'>{t('home.hoiana.description')}</p>
                  <li className='mb-2'>
                    <strong>{t('home.hoiana.features.rooms.title')}</strong>
                    {t('home.hoiana.features.rooms.description')}
                  </li>
                  <li className='mb-2'>
                    <strong>{t('home.hoiana.features.services.title')}</strong>
                    {t('home.hoiana.features.services.description')}
                  </li>
                  <li className='mb-2'>
                    <strong>{t('home.hoiana.features.rewards.title')}</strong>
                    {t('home.hoiana.features.rewards.description')}
                  </li>
                </div>
                <a href='tel:0909090909'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                    {t('home.buttons.contact')}
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
            <div className='lg:col-span-2'>
              <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>{t('home.hoiana.title')}</h2>
              <div className='hidden lg:block'>
                <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                  <p className='mb-2'>{t('home.hoiana.description')}</p>
                  <li className='mb-2'>
                    <strong>{t('home.hoiana.features.rooms.title')}</strong>
                    {t('home.hoiana.features.rooms.description')}
                  </li>
                  <li className='mb-2'>
                    <strong>{t('home.hoiana.features.services.title')}</strong>
                    {t('home.hoiana.features.services.description')}
                  </li>
                  <li className='mb-2'>
                    <strong>{t('home.hoiana.features.rewards.title')}</strong>
                    {t('home.hoiana.features.rewards.description')}
                  </li>
                </div>
                <a href='tel:0909090909'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                    {t('home.buttons.contact')}
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#f0f1eb] py-16'>
          <h3 className='uppercase text-[25px] mb-4 pl-4 lg:hidden'>{t('home.rewardsClub.title')}</h3>
          <div className='gap-x-10 lg:grid-cols-3 grid 2xl:grid-cols-5'>
            <div className='lg:col-span-2 2xl:col-span-3'>
              <img src={rewardsClub} alt='rewardsClub' className='h-max w-max' />
            </div>
            <div className='lg:col-span-1 2xl:col-span-2 2xl:pr-[180px] pl-4 pr-[34px] lg:p-0'>
              <h3 className='uppercase text-[32px] hidden lg:block'>{t('home.rewardsClub.title')}</h3>
              <p className='py-4 uppercase'>{t('home.rewardsClub.subtitle')}</p>
              <p className='text-[#333333] mb-4'>{t('home.rewardsClub.description')}</p>
              <ul className='list-disc pl-5 text-[#333333] mb-5'>
                <li>{t('home.rewardsClub.locations.b2m')}</li>
                <li>{t('home.rewardsClub.locations.level1')}</li>
                <li>{t('home.rewardsClub.locations.level2Ruby')}</li>
                <li>{t('home.rewardsClub.locations.level2RubySlots')}</li>
                <li>{t('home.rewardsClub.locations.level2Apex')}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='py-20'>
          <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10'>
            <div className='lg:col-span-2'>
              <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('home.vipClub.title')}</h2>
              <div className='hidden lg:block'>
                <p className='text-[15px] mt-4 mb-8 text-[#333333]'>{t('home.vipClub.description')}</p>
                <Link to='/contact-now'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                    {t('home.buttons.book')}
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </Link>
              </div>
            </div>
            <div className='lg:col-span-5'>
              <img className='mt-5 lg:mt-0' src={bannerLandingModule3} alt='bannerLandingModule3' />
              <div className='block lg:hidden'>
                {/* <p className='uppercase text-[15px] my-4 font-medium text-[#333333]'>{t('home.vipClub.subtitle')}</p> */}
                <p className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>{t('home.vipClub.description')}</p>
                <Link to='/contact-now'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                    {t('home.buttons.book')}
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
