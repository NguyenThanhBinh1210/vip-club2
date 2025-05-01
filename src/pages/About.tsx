import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'
import bannerPC from '~/assets/generic-masthead-desktop-1920x823.jpg'
import bannerMobile from '~/assets/generic-masthead-mobile-1080x1440.jpg'
import hotrambanner4 from '~/assets/casino-landing-module-3-1920x1080.webp'
import hotrambanner5 from '~/assets/oker2.jpg'
import hotrambanner6 from '~/assets/shutterstock_255673432.jpg'

const About = () => {
  const { t } = useTranslation()
  const { data: imageData } = useQuery({
    queryKey: ['images', 'about-us'],
    queryFn: () => imageApi.getImages({ pageSlug: 'about-us' })
  })

  // Helper function to get image URL by filename
  const getImageUrl = (filename: string, fallbackImage: string) => {
    if (!imageData?.data?.data) return fallbackImage

    const foundImage = imageData.data.data.find((img) => img.filename === filename)

    return foundImage?.url || fallbackImage
  }

  return (
    <div>
      <div className='relative'>
        <img
          src={getImageUrl('generic-masthead-desktop-1920x823', bannerPC)}
          alt='bannerPC'
          className='object-cover hidden md:block w-full'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={getImageUrl('generic-masthead-mobile-1080x1440', bannerMobile)}
          alt='bannerMobile'
          className='object-cover block md:hidden w-full'
          style={{ aspectRatio: '3/4' }}
        />
        <div className='absolute top-0 left-0 w-full h-full bg-[#27869c48] pl-10 flex flex-col justify-center items-center'>
          <div className=''>
            <h1 className='uppercase text-[40px] text-center mb-10 text-white'>{t('about.title')}</h1>

          </div>

        </div>
      </div>
      <div className='pb-10'>
        <div className=''>


          <div className='py-20'>
            <div className='pr-4 2xl:pr-[180px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
              <div className='lg:col-span-5'>
                <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>{t('aboutSection.whatIsLetswin')}</h2>

                <img
                  className='mt-5 lg:mt-0 aspect-[9/6] object-cover'
                  src={hotrambanner5}
                  alt='hoian5'
                />
                <div className='block lg:hidden pl-4 lg:pl-0'>
                  <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                    <p className='mb-4'>{t('aboutSection.letswinIntroMobile')}</p>
                    <ul className='space-y-2'>
                      <li>{t('aboutSection.letswinServices.pokerClub')}</li>
                      <li>{t('aboutSection.letswinServices.vipCasino')}</li>
                      <li>{t('aboutSection.letswinServices.transportSupport')}</li>
                      <li>{t('aboutSection.letswinServices.customTours')}</li>
                      <li>{t('aboutSection.letswinServices.support247')}</li>
                    </ul>
                  </div>
                  <a href='tel:+84766798268'>
                    <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                      Zalo
                      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                    </button>
                  </a>
                </div>
              </div>
              <div className='lg:col-span-2'>
                <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>{t('aboutSection.whatIsLetswin')}</h2>
                <div className='hidden lg:block'>
                  <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                    <p className='mb-4'>{t('aboutSection.letswinIntroDesktop')}</p>
                    <ul className='space-y-2'>
                      <li>{t('aboutSection.letswinServices.pokerClub')}</li>
                      <li>{t('aboutSection.letswinServices.vipCasino')}</li>
                      <li>{t('aboutSection.letswinServices.nightSupport')}</li>
                      <li>{t('aboutSection.letswinServices.customTours')}</li>
                      <li>{t('aboutSection.letswinServices.support247')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='py-20'>
            <div className='pl-4 2xl:pl-[180px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
              <div className='lg:col-span-2'>
                <h2 className='text-[25px] uppercase lg:text-[32px]'>{t('aboutSection.whoIsFor')}</h2>
                <div className='hidden lg:block'>
                  <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                    <ul className='space-y-2'>
                      <li>{t('aboutSection.whoIsForList.internationalTourists')}</li>
                      <li>{t('aboutSection.whoIsForList.experiencedPlayers')}</li>
                      <li>{t('aboutSection.whoIsForList.partners')}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='lg:col-span-5'>
                <img
                  className='mt-5 lg:mt-0 aspect-[9/6] object-cover'
                  src={hotrambanner4}
                  alt='hotrambanner4'
                />
                <div className='block lg:hidden'>
                  <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                    {t('aboutSection.vipExperience')}
                  </div>
                  <a href='tel:+84766798268'>
                    <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                      {t('aboutSection.contactNow')}
                      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className='text-center text-3xl pt-5 mb-10 uppercase'>
            {t('aboutSection.missionTitle')}
          </p>

          <p className='text-left text-[16px] mb-3 text-center'>
            {t('aboutSection.missionDescription')}
          </p>

          <p className='text-center text-[16px] font-bold mb-3 mt-10'>
            {t('aboutSection.missionStatement')}
          </p>

          <div className='pl-4  lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc] py-20'>

            <img src={hotrambanner6} alt="hotrambanner6" />
          </div>
        </div>
      </div>
      {/* 
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
       */}
    </div>
  )
}

export default About
