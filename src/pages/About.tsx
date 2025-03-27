import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'
import bannerPC from '~/assets/generic-masthead-desktop-1920x823.jpg'
import bannerMobile from '~/assets/generic-masthead-mobile-1080x1440.jpg'

const About = () => {
  const { t } = useTranslation()
  const { data: imageData } = useQuery({
    queryKey: ['images', 'about-us'],
    queryFn: () => imageApi.getImages({ pageSlug: 'about-us' })
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
          src={getImageUrl('generic-masthead-desktop-1920x823', bannerPC)}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={getImageUrl('generic-masthead-mobile-1080x1440', bannerMobile)}
          alt='bannerMobile'
          className='h-auto object-cover block md:hidden w-full'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-20 pb-10'>
        <div className='max-w-[888px] mx-auto px-[33px] lg:px-0'>
          <h1 className='uppercase text-[40px] text-center mb-10'>{t('about.title')}</h1>

          <p className='text-center text-[16px] font-bold mb-10'>{t('about.subtitle')}</p>
          <p className='text-[16px] mb-4'>{t('about.introduction')}</p>

          <p className='text-left text-[16px] mb-4'>{t('about.experience.title')}</p>
          <p className='text-left text-[16px] mb-4'>
            <strong>{t('about.experience.hoTram.title')}</strong>
            {t('about.experience.hoTram.description')}
          </p>
          <p className='text-left text-[16px] mb-4'>
            <strong>{t('about.experience.hoiana.title')}</strong>
            {t('about.experience.hoiana.description')}
          </p>
          <p className='text-left text-[16px] mb-4'>
            <strong>{t('about.experience.danang.title')}</strong>
            {t('about.experience.danang.description')}
          </p>

          <p className='text-[16px] mb-4'>{t('about.service')}</p>

          <p className='text-[16px] mb-4'>{t('about.invitation')}</p>

          <p className='text-center text-3xl pt-5 mb-10'>{t('about.whyChoose.title')}</p>

          <p className='text-left text-[16px] mb-3'>{t('about.whyChoose.features.spaces')}</p>
          <p className='text-left text-[16px] mb-3'>{t('about.whyChoose.features.services')}</p>
          <p className='text-left text-[16px] mb-3'>{t('about.whyChoose.features.rewards')}</p>
          <p className='text-left text-[16px] mb-3'>{t('about.whyChoose.features.privacy')}</p>

          <p className='text-center text-[16px] font-bold mb-3 mt-10'>{t('about.join')}</p>

          <p className='text-center text-[16px] font-bold mb-3'>{t('about.contact')}</p>
        </div>
      </div>
    </div>
  )
}

export default About
