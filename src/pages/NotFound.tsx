import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className='flex items-center justify-center min-h-screen bg-white py-10'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center'>
          <div className='text-indigo-500 font-bold text-7xl'>404</div>

          <div className='font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10'>
            {t('notFound.title')}
          </div>

          <div className='text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8'>
            {t('notFound.description')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
