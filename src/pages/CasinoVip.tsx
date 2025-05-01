import hotrambanner2 from '~/assets/6cf5bec3-046d-4890-b05e-7c0adbadbdaf.jpg'
import hotrambanner from '~/assets/3dc2e857-9031-4d1c-9a3b-ff91233e6fef.jpg'
import hotram1 from '~/assets/the-grand-casino11-1.jpg'
import casino1 from '~/assets/casino1.jpg'
import casino2 from '~/assets/casino2.jpg'
import casino3 from '~/assets/casino3.jpg'
import hoian from '~/assets/GHI0408-HDR-scaled.webp'


import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'
import { useTranslation } from 'react-i18next'

const CasinoVip = () => {
  const { t } = useTranslation()

  const { data: imageData } = useQuery({
    queryKey: ['images', 'event-tournament-promotions'],
    queryFn: () => imageApi.getImages({ pageSlug: 'event-tournament-promotions' })
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
      <div className='relative'>
        <img
          src={getImageUrl('B1127232-1', hotrambanner)}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full object-top'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={getImageUrl('B1127232-1', hotrambanner2)}
          alt='hotrambanner2'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
        <div className='absolute top-0 left-0 w-full h-full bg-[#935e1848] pl-10 flex flex-col justify-center'>
          <div className=''>
            <h1 className='text-4xl leading-snug font-semibold mb-4 text-white pr-20 max-w-[1000px]'>
            {t('home.casinoVip.heading')}
            </h1>
          </div>
          <div className='flex space-x-4 mb-6'>
            <a href='tel:+84766798268'>

              <button className='bg-[#cfaa26] text-white py-2 px-4 rounded shadow shadow-black/50 hover:shadow-none transition-all hover:translate-y-0.5'>      {t('home.buttons.contactNow')}
              </button>
            </a>

          </div>
        </div>
      </div>

      <div className='py-20'>
        <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
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

      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
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
            <img className='mt-5 lg:mt-0 w-full' src={getImageUrl('Gaming-Salon-2048x1366', hotram1)} alt='hotram1' />
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
      <div className='lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc] grid md:grid-cols-3 gap-10 pb-20  pt-20 px-4 '>
        <img src={casino2} alt="casino2" className='object-top object-cover' />
        <img src={casino1} alt="casino1" className='object-top object-cover' />

        <img src={casino3} alt="casino3" className='object-top object-cover' />
      </div>

    </div>
  )
}

export default CasinoVip
