import { ButtonBlack } from './Shop/Shopping'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SignupSuccessful = () => {
  const { t } = useTranslation()

  return (
    <div className='px-4 md:px-20 py-40'>
      <div className='text-center text-4xl mb-10 uppercase'>{t('signupSuccessful.welcome')}</div>
      <div className='bg-[#f0f1eb] p-10  mx-auto'>
        <div className='grid grid-cols-2 '>
          <div className=' py-5 px-20 md:border-r border-[#c5c6bc] '>
            <p className='text-2xl uppercase font-medium text-center'>
              {t('signupSuccessful.digitalAccount.title')}
            </p>
            <p className='px-16 my-4'>
              {t('signupSuccessful.digitalAccount.description')}
            </p>
            <div className='bg-[#E1E2D6] p-5 text-lg text-center'>
              <p className='text-gray-500'>{t('signupSuccessful.username')}</p>
              <p className=''>catalina12</p>
            </div>
          </div>
          <div className=' py-5 px-20 '>
            <p className='text-2xl uppercase font-medium text-center'>
              {t('signupSuccessful.membershipCard.title')}
            </p>
            <p className='px-16 my-4'>
              {t('signupSuccessful.membershipCard.description')}
            </p>
            <div className='bg-[#E1E2D6] p-5 text-lg text-center'>
              <p className='text-gray-500'>{t('signupSuccessful.membershipId')}</p>
              <p className=''>105986491</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <Link to='/login'>
            <ButtonBlack className='!mb-0 px-20' title={t('signupSuccessful.loginNow')} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupSuccessful
