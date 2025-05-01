import hotrambanner from '~/assets/Page-Banner-1366x543-2.jpg'
import hotrambanner2 from '~/assets/Page-Banner-640x980-2.jpg'
import hotrambanner3 from '~/assets/GHII5441-768x512.webp'
import hotrambanner4 from '~/assets/BOL09680-768x512.webp'
import hotrambanner5 from '~/assets/hoiana-hotel-and-suites3.webp'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'
import { useTranslation } from 'react-i18next'

const VIPMembershipOffers = () => {
  const { t } = useTranslation()

  const { data: imageData } = useQuery({
    queryKey: ['images', 'vip-membership-offers'],
    queryFn: () => imageApi.getImages({ pageSlug: 'vip-membership-offers' })
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
          src={getImageUrl('Page-Banner-1366x543-2', hotrambanner)}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={getImageUrl('Page-Banner-640x980-2', hotrambanner2)}
          alt='hotrambanner2'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-[160px] px-[33px]'>
        <h1 className='mb-10 text-center text-[28px] md:text-[40px] max-w-[980px] md:mx-auto uppercase'>
          {t('vipMembership.title')}
        </h1>
      </div>

      {/* Section 1 */}
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('vipMembership.section1.title')}</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('vipMembership.section1.description')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('vipMembership.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-5'>
            <img
              className='mt-5 lg:mt-0 aspect-[9/6]'
              src={getImageUrl('GHII5441-768x512',hotrambanner3)}
              alt='hotrambanner3'
            />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                {t('vipMembership.section1.description')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('vipMembership.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className='py-20'>
        <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-5'>
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>{t('vipMembership.section2.title')}</h2>
            <img
              className='mt-5 lg:mt-0 aspect-[9/6]'
              src={getImageUrl('BOL09680-768x512',hotrambanner4)}
              alt='hoian'
            />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('vipMembership.section2.description')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('vipMembership.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>{t('vipMembership.section2.title')}</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                {t('vipMembership.section2.description')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('vipMembership.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('vipMembership.section3.title')}</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('vipMembership.section3.description')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('vipMembership.contactNow')}
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-5'>
            <img
              className='mt-5 lg:mt-0 aspect-[9/6]'
              src={getImageUrl('hoiana-hotel-and-suites3', hotrambanner5)}
              alt='hotrambanner5'
            />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                {t('vipMembership.section3.description')}
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  {t('vipMembership.contactNow')}
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

export default VIPMembershipOffers