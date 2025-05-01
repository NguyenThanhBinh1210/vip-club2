import hotrambanner from '~/assets/oker1.jpg'
import hotrambanner2 from '~/assets/oker1.jpg'
import hotrambanner3 from '~/assets/poket1.jpg'
import hotrambanner4 from '~/assets/poker2.jpg'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'
import { useTranslation } from 'react-i18next'

const PokerClub = () => {
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
          className='h-auto object-cover hidden md:block w-full'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={getImageUrl('B1127232-1', hotrambanner2)}
          alt='hotrambanner2'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
        <div className='absolute top-0 left-0 w-full h-full bg-[#48b0d930] pl-10 flex flex-col justify-center lg:items-center'>
          <div className=''>
            <h1 className='text-4xl leading-snug font-semibold mb-4 text-white pr-20 max-w-[1000px]'>
            {t('pokerClub.heading')}
            </h1>
          </div>
          <div className='flex space-x-4 mb-6'>
            <a href='tel:+84766798268'>

              <button className='bg-[#cfaa26] text-white py-2 px-4 rounded shadow shadow-black/50 hover:shadow-none transition-all hover:translate-y-0.5'>      {t('pokerClub.contactConsultant')}
              </button>

            </a>

          </div>
        </div>
      </div>

      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>
              {t('pokerClub.privateRoomTitle')}
            </h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('pokerClub.privateRoomDescription')}
              </div>
            </div>
          </div>
          <div className='lg:col-span-5'>
            <img
              className='mt-5 lg:mt-0 aspect-[9/6] object-cover'
              src={getImageUrl('oker1', hotrambanner3)}
              alt='hotrambanner3'
            />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                {t('pokerClub.privateRoomDescription')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-20'>
        <div className='pr-4 2xl:pr-[180px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-5'>
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>
              {t('pokerClub.clubTitle')}
            </h2>
            <img
              className='mt-5 lg:mt-0 aspect-[9/6]'
              src={getImageUrl('MICE-Hero-Slider-2', hotrambanner4)}
              alt='hoian'
            />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                {t('pokerClub.clubDescription')}
              </div>
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>
              {t('pokerClub.clubTitle')}
            </h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                {t('pokerClub.clubDescription')}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default PokerClub
