import { LayoutPropsInterface } from '~/types/base.type'
import { useTranslation } from 'react-i18next'

const LoginLayout = ({ children }: LayoutPropsInterface) => {
  const { t } = useTranslation()

  return (
    <div>
      {children}
      <div className='text-center text-sm fixed bottom-0 z-0 w-full py-2 bg-[#f0f1eb]'>
        {t('footer.copyright', { year: '2025' })}
      </div>
    </div>
  )
}

export default LoginLayout
