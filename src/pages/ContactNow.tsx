import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Bokingbanner from '~/assets/banner-desktop (1).jpg'
import Bokingbanner2 from '~/assets/banner-desktop.jpg'
import { ButtonBlack } from './Shop/Shopping'

const ContactNow = () => {
  const [stage, setStage] = useState(1)
  const { t } = useTranslation()

  return (
    <div className='px-4 lg:px-0 lg:w-[59pc] 2xl:w-[978pt] mx-auto pt-[60px]'>
      <div className='py-20'>
        <img src={Bokingbanner2} alt='Bokingbanner2' className='hidden md:block w-full object-cover' />
        <img src={Bokingbanner} alt='Bokingbanner' className=' md:hidden w-full object-cover' />
      </div>
      <h1 className='text-center text-4xl pb-20 uppercase'>{t('contact.title')}</h1>
      <div className='mb-10'>
        {stage === 1 && (
          <div>
            <h2 className='text-3xl text-center uppercase mb-10'>{t('contact.stage1.title')}</h2>
            <h2 className='text-center text-sm text-[#333333] mb-3'>{t('contact.stage1.description')}</h2>
            <div className='bg-[#f0f1eb] border border-[#c5c6bc] md:grid grid-cols-2  mt-10 space-y-3 md:space-y-0 p-5 max-w-[700px] mx-auto gap-4 mb-10'>
              <input
                type='text'
                placeholder={t('contact.stage1.fullName')}
                className='w-full p-2 border-b border-[#c5c6bc] '
              />
              <input
                type='text'
                placeholder={t('contact.stage1.phoneNumber')}
                className='w-full p-2 border-b border-[#c5c6bc] '
              />
            </div>
            <ButtonBlack onClick={() => setStage(2)} title={t('contact.stage1.submit')} />
          </div>
        )}
        {stage === 2 && (
          <div>
            <h2 className='text-3xl text-center uppercase mb-10'>{t('contact.stage2.title')}</h2>
            <h2 className='text-center text-sm text-[#333333] mb-3'>{t('contact.stage2.description')}</h2>
            <Link to={'/'} className='text-center block underline text-[#333333]'>
              {t('contact.stage2.backToHome')}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactNow
