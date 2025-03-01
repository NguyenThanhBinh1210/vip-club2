import logo from '~/assets/logo-01.png'
import { ButtonBlack } from './Shop/Shopping'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next' // Thêm import này

const Login = () => {
  const { t } = useTranslation()

  return (
    <div className='px-4 max-w-xl mx-auto pt-[60px]'>
      <Link to='/'>
        <img src={logo} alt='logo' className='size-20 mx-auto' />
      </Link>
      <div className='flex flex-col gap-y-4'>
        <p className='text-2xl uppercase font-medium text-center'>{t('login.title')}</p>
        <div className='flex flex-col gap-y-2'>
          <p className='text-sm'>{t('login.username')}</p>
          <input 
            placeholder={t('login.emailPlaceholder')} 
            className='w-full border-b border-[#c5c6bc] py-2' 
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p className='text-sm'>{t('login.password')}</p>
          <input 
            type='password' 
            placeholder={t('login.passwordPlaceholder')} 
            className='w-full border-b border-[#c5c6bc] py-2' 
          />
        </div>
        <ButtonBlack title={t('login.loginButton')} className='w-full !m-0' />
        <p className='m text-right'>
          {t('login.noAccount')}{' '}
          <Link to='/signup' className='text-black underline'>
            {t('login.registerNow')}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login