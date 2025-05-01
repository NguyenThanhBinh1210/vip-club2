import hotrambanner from '~/assets/NWHBR.webp'
import hotrambanner2 from '~/assets/NWHBR.webp'
import hotrambanner3 from '~/assets/NWHON1.webp'
import hotrambanner4 from '~/assets/Web-Gallery-Slide_2000x1250_Inter-resort-Free-Shuttle.webp'
import hotrambanner5 from '~/assets/IMG_8527-768x512.webp'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'
import { useTranslation } from 'react-i18next'

const PremiumPerks = () => {
  const { t } = useTranslation()

  const { data: imageData } = useQuery({
    queryKey: ['images', 'premium-perks'],
    queryFn: () => imageApi.getImages({ pageSlug: 'premium-perks' })
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
          src={getImageUrl('NWHBR', hotrambanner)}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={getImageUrl('NWHBR', hotrambanner2)}
          alt='hotrambanner2'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-[160px] px-[33px]'>
        <h1 className='mb-10 text-center text-[28px] md:text-[40px] max-w-[980px] md:mx-auto uppercase'>
          {t('premiumPerks.pageTitle')}
        </h1>
      </div>

      {/* FREE HOTEL PERK */}
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('premiumPerks.freeHotelTitle')}</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('premiumPerks.freeHotelDesc')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('premiumPerks.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-5'>
            <img
              className='mt-5 lg:mt-0 aspect-[9/6]'
              src={getImageUrl('NWHON1', hotrambanner3)}
              alt='hotrambanner3'
            />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                {t('premiumPerks.freeHotelDesc')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('premiumPerks.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PRIVATE SHUTTLE PERK */}
      <div className='py-20'>
        <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-5'>
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>{t('premiumPerks.privateShuttleTitle')}</h2>
            <img
              className='mt-5 lg:mt-0 aspect-[9/6]'
              src={getImageUrl('Web-Gallery-Slide_2000x1250_Inter-resort-Free-Shuttle', hotrambanner4)}
              alt='hoian'
            />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('premiumPerks.privateShuttleDesc')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('premiumPerks.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>{t('premiumPerks.privateShuttleTitle')}</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                {t('premiumPerks.privateShuttleDesc')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('premiumPerks.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* EXCLUSIVE GIFTS PERK */}
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('premiumPerks.exclusiveGiftsTitle')}</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('premiumPerks.exclusiveGiftsDesc')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('premiumPerks.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-5'>
            <img
              className='mt-5 lg:mt-0 aspect-[9/6]'
              src={getImageUrl('IMG_8527-768x512', hotrambanner5)}
              alt='hotrambanner5'
            />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                {t('premiumPerks.exclusiveGiftsDesc')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('premiumPerks.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PremiumPerks