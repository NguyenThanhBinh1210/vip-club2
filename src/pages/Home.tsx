
import hotram1 from '~/assets/Gaming-Salon-2048x1366.jpg'
// import poket2 from '~/assets/poket1.jpg'
import poket1 from '~/assets/poker2.jpg'
import hoian from '~/assets/GHI0408-HDR-scaled.webp'
import hoian3 from '~/assets/oker2.jpg'
import poket2 from '~/assets/oker1.jpg'
import hotrambannerpc from '~/assets/hotrambannerpc.png'
import { ButtonBlack } from './Shop/Shopping'
import { useTranslation } from 'react-i18next'
import { Level } from './Rewards/Lifestyle'

import { imageApi } from '~/apis/image.api'
import { useQuery } from 'react-query'

const Home = () => {
  const { t } = useTranslation()

  // Query for home page images
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

  return (
    <div className='pb-10'>
      <div className='relative'>
        <img
          src={getImageUrl('hotrambannerpc', hotrambannerpc)}
          alt='bannerPC'
          className='h-auto object-cover hidden lg:block w-full w-full'
        // style={{ aspectRatio: '21/9' }}
        />
        <img
          src={getImageUrl('hotrambannerpc', hotrambannerpc)}
          alt='hotrambanner'
          className='h-auto object-cover block lg:hidden'
          style={{ aspectRatio: '3/4' }}
        />
        <div className='absolute top-0 left-0 w-full h-full bg-[#935e1848] pl-10 flex flex-col justify-center'>
          <div className=''>
            <h1 className='text-4xl leading-snug font-semibold mb-4 text-white pr-20 max-w-[1000px]'>
              Trải nghiệm đêm thưởng lưu tại Let's Win - VIP Club hàng đầu Đà Nẵng
            </h1>
          </div>
          <div className='flex space-x-4 mb-6'>
            <a href='tel:+84766798268'>

              <button className='bg-[#cfaa26] text-white py-2 px-4 rounded'>Đặt tour VIP</button>
            </a>
            <a href='tel:+84766798268'>

              <button className='bg-blue-500 text-white py-2 px-4 rounded'>Liên hệ tư vấn</button>

            </a>
          </div>
        </div>
      </div>
      <div className='py-20'>
        <div className='pl-4  lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-4'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('home.vipClub.title')}</h2>
            <div className='hidden lg:block'>
              <p className='text-[15px] mt-4 mb-8 text-[#333333]'>{t('home.vipClub.description')}</p>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('home.buttons.book')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-3'>
            <img className='mt-5 lg:mt-0' src={getImageUrl('casino-landing-module-3-1920x1080', poket2)} alt='bannerLandingModule3' />
            <div className='block lg:hidden'>
              <p className='uppercase text-[15px] my-4 font-medium text-[#333333]'>{t('about.subtitle')}</p>
              <p className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>{t('home.vipClub.description')}</p>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('home.buttons.book')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='pt-[50px] px-[33px]'>
          <h1 className='mb-10 text-center text-[28px] md:text-[40px] max-w-[980px] md:mx-auto uppercase'>
            {t('home.hero.title')}
          </h1>
        </div>
        <div className='py-20'>
          <div className='pl-4 lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
            <div className='lg:col-span-2'>
              <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('home.hoTram.title')}</h2>
              <div className='hidden lg:block'>
                <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                  <p className='mb-2'>{t('home.hoTram.description')}</p>
                  <li className='mb-2'>{t('home.hoTram.features.environment')}</li>
                  <li className='mb-2'>{t('home.hoTram.features.services')}</li>
                  <li className='mb-2'>{t('home.hoTram.features.privacy')}</li>
                </div>
                <a href='tel:+84766798268'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                    {t('home.buttons.contact')}
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
            <div className='lg:col-span-5'>
              <img className='mt-5 lg:mt-0 ' src={getImageUrl('Gaming-Salon-2048x1366', hotram1)} alt='hotram1' />
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

                <a href='tel:+84766798268'>
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
            src={getImageUrl('poket1', poket1)}
            alt='poket1'
          />
        </div>
        <div className='pt-40 pb-20'>
          <div className='pl-4'>
            <h2 className='text-[25px] uppercase block lg:hidden'>POKER CLUB IN DA NANG</h2>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-10 lg:w-[59pc] xl:w-[79pc] 2xl:w-[82pc] mx-auto'>
            <div>
              <img
                className='lg:pt-[15pc] mt-[2pc] lg:mt-0 object-cover aspect-[7/9] lg:aspect-[4.5/9]'
                src={getImageUrl('poket1', poket1)}
                alt='poket2'
              // style={{ aspectRatio: '4.5/9' }}
              />
            </div>
            <div>
              <img className='pt-[140pt] lg:pt-0' src={getImageUrl('poker2', hoian3)} alt='hoian3' />
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
                <a href='tel:+84766798268'>
                  <ButtonBlack className='ml-0 mt-10' title={t('home.buttons.contact')} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='py-20'>
          <div className='pr-4  lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
            <div className='lg:col-span-5'>
              <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>{t('home.hoiana.title')}</h2>

              <img className='mt-5 lg:mt-0 ' src={getImageUrl('GHI0408-HDR-scaled', hoian)} alt='hoian' />
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
                <a href='tel:+84766798268'>
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
                <a href='tel:+84766798268'>
                  <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                    {t('home.buttons.contact')}
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#f0f1eb] py-16 '>
          <h3 className='uppercase text-[25px] mb-6 text-center'>{t('home.rewardsClub.title')}</h3>
          <p className='text-center text-[16px] mb-10 max-w-[800px] mx-auto px-4'>{t('lifestyle.membership.description')}</p>


          <Level></Level>

        </div>

      </div>
    </div>
  )
}

export default Home
