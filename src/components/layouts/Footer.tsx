import footerLogo from '~/assets/logo-01.png'
import mbsAppStore from '~/assets/mbs-app-store.avif'
import mbsGooglePlay from '~/assets/mbs-google-play.avif'
import mbsFacebook from '~/assets/facebook.svg'
import mbsInstagram from '~/assets/instagram.svg'
import mbsTwitter from '~/assets/twitter.svg'
import mbsYoutube from '~/assets/youtube.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768) // Kiểm tra kích thước màn hình


  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <div className='flex justify-between cursor-pointer' onClick={() => !isMdScreen && setIsOpen(!isOpen)}>
        <p className='mb-4 text-[#333333]'>{title}</p>
        <button className='text-[#333333] md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className={`lucide lucide-chevron-down transition-all duration-500 size-4 ${isOpen ? '-rotate-180' : ''}`}
          >
            <path d={'m6 9 6 6 6-6'} />
          </svg>
        </button>
      </div>
      <div
        className={`flex flex-col gap-y-2 md:gap-y-1 text-xs md:text-sm uppercase transition-all duration-500 overflow-hidden ${isMdScreen ? 'max-h-[400px]' : (isOpen ? 'max-h-[400px]' : 'max-h-[0px]')}`}
      >
        {children}
      </div>
    </div>
  )
}

const Footer = () => {
  const { t } = useTranslation()
  const { data: imageData } = useQuery({
    queryKey: ['images', 'home'],
    queryFn: () => imageApi.getImages({ pageSlug: 'logo' })
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
    <footer className='bg-[#c5c6bc] pt-5 pb-10 flex justify-center'>
      <div className='px-4 lg:px-20 2xl:mx-[180px] 2xl:px-0 lg:w-[59pc]  xl:w-[79pc] 2xl:w-[82pc] mx-auto'>
        <img src={getImageUrl('logo-01', footerLogo)}
          alt='footerLogo' className='mx-auto size-[100px] lg:my-10' />
        <div className='grid md:grid-cols-4 gap-x-10 gap-y-8 mb-20'>
          <div>
            <Accordion title={t('footer.getToKnow.title')}>
              <Link to={'/'}>{t('footer.getToKnow.companyInfo')}</Link>
              <Link to={'/'}>{t('footer.getToKnow.careers')}</Link>
              <Link to={'/'}>{t('footer.getToKnow.faq')}</Link>
              <Link to={'/'}>{t('footer.getToKnow.contactUs')}</Link>
              <Link to={'/'}>{t('footer.getToKnow.awards')}</Link>
            </Accordion>
          </div>
          <div>
            <Accordion title={t('footer.usefulInfo.title')}>
              <Link to={'/'}>{t('footer.usefulInfo.travelGuide')}</Link>
              <Link to={'/'}>{t('footer.usefulInfo.planVisit')}</Link>
              <Link to={'/'}>{t('footer.usefulInfo.gettingHere')}</Link>
              <Link to={'/'}>{t('footer.usefulInfo.services')}</Link>
              <Link to={'/'}>{t('footer.usefulInfo.packages')}</Link>
            </Accordion>
          </div>
          <div className='text-[#333333]'>
            <p className='mb-4'>{t('footer.downloadApp.title')}</p>
            <div className='flex md:flex-col 2xl:flex-row gap-x-2'>
              <Link to={'/'}>
                <img src={mbsAppStore} alt='mbsAppStore' className='h-[2pc] w-[6pc] mb-2' />
              </Link>
              <Link to={'/'}>
                <img src={mbsGooglePlay} alt='mbsGooglePlay' className='h-[2pc] w-[78pt]' />
              </Link>
            </div>
            <p className='mb-4 mt-6'>{t('footer.social.title')}</p>
            <div className='flex gap-[15px]'>
              <Link to={'/'}>
                <img src={mbsInstagram} alt='mbsInstagram' className='h-[17px] w-[17px]' />
              </Link>
              <Link to={'/'}>
                <img src={mbsFacebook} alt='mbsFacebook' className='h-[17px] w-[17px]' />
              </Link>
              <Link to={'/'}>
                <img src={mbsTwitter} alt='mbsTwitter' className='h-[17px] w-[17px]' />
              </Link>
              <Link to={'/'}>
                <img src={mbsYoutube} alt='mbsYoutube' className='h-[17px] w-[17px]' />
              </Link>
            </div>
          </div>
          <div className='text-[#333333]'>
            <p className='mb-4'>{t('footer.getInspired.title')}</p>
            <p className='text-sm'>{t('footer.getInspired.subtitle')}</p>
            <Link to={'/contact-now'}>
              <button className='mt-4 px-5 py-2 border border-black hover:opacity-60 transition-all duration-300'>
                {t('footer.getInspired.bookNow')}
              </button>
            </Link>
          </div>
        </div>
        {/* <div className='max-w-[17pc] mx-auto text-[11px] uppercase flex flex-wrap justify-center '>
          <Link to={'/'} className='border-r border-black pr-4 mr-4'>
            Trademark Notice
          </Link>
          <Link to={'/'}>Privacy Notice</Link>
          <Link to={'/'} className='border-r border-black pr-4 mr-4 mt-3'>
            Security Advisory
          </Link>
          <Link to={'/'} className='mt-3'>
            Terms of Use
          </Link>
        </div> */}
        <div className='max-w-[17pc] mx-auto text-[11px] flex flex-wrap justify-center mt-4 text-[#333333]'>
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}

export default Footer
