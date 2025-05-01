import { Link, Outlet } from 'react-router-dom'
// import car from '~/assets/car-icon-vector-image-can-be-used-luxury_120816-387961.jpg'
// import consultant from '~/assets/ly-do-3.jpg'
// import tour from '~/assets/pngtree-coconut-tree-beach-chair-beach-summer-cartoon-illustration-png-image_12498361.png'
// import money from '~/assets/images.jpg'
import car from '~/assets/Web-Gallery-Slide_2000x1250_Inter-resort-Free-Shuttle.webp'
import consultant from '~/assets/ho-tro-covid.jpg'
import hotrambannerpc from '~/assets/hotrambannerpc.png'

import tour from '~/assets/BOL09680-768x512.webp'
import money from '~/assets/chi-phi-duoc-tru-khoan-thu-lao-chu-tich-cong-ty-tnhh.webp'
// import car from '~/assets/car1.png'
// import consultant from '~/assets/phone1.png'
// import tour from '~/assets/gold1.png'
// import money from '~/assets/hantram1.png'
import '~/styles/index.scss'
import { useTranslation } from 'react-i18next'
const ServiceLayout = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: car,
      title: t('service.freeTransport.title'),
      description: t('service.freeTransport.description'),
      path: '/service/free-transport'
    },
    {
      icon: consultant,
      title: t('service.support.title'),
      description: t('service.support.description'),
      path: '/service/support'
    },
    {
      icon: tour,
      title: t('service.tour.title'),
      description: t('service.tour.description'),
      path: '/service/tour'
    },
    {
      icon: money,
      title: t('service.commission.title'),
      description: t('service.commission.description'),
      path: '/service/commission'
    }
  ];

  return (
    <div className='bg-white'>
      <div className='relative'>
        <img
          src={hotrambannerpc}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full'
        />
        <img
          src={hotrambannerpc}
          alt='hotrambanner'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
        <div className='absolute top-0 left-0 w-full h-full bg-[#935e1848] pl-10 flex flex-col justify-center'>
          <h1 className='text-4xl leading-snug font-semibold mb-4 text-white pr-20 max-w-[1000px]'>
            {t('service.hero')}
          </h1>
          <div className='flex space-x-4 mb-6'>
            <a href='tel:+84766798268'>
              <button className='bg-[#cfaa26] text-white py-2 px-4 rounded shadow shadow-black/50 hover:shadow-none transition-all hover:translate-y-0.5'>
                {t('service.cta.book')}
              </button>
            </a>
            <a href='tel:+84766798268'>
              <button className='bg-[#cfaa26] text-white py-2 px-4 rounded shadow shadow-black/50 hover:shadow-none transition-all hover:translate-y-0.5'>
                {t('service.cta.contact')}
              </button>
            </a>
          </div>
        </div>
      </div>

      <main className='p-4 py-10'>
        <h1 className='gradient-text mb-10 text-center text-[40px] md:text-[50px] max-w-[980px] md:mx-auto uppercase'>
          {t('service.pageTitle')}
        </h1>
        <Outlet />
      </main>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto mb-12'>
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className='bg-white p-8 rounded-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 items-center text-center group'
          >
            <div className='mb-6'>
              <img src={service.icon} alt={service.title} className='w-28 h-28 object-cover rounded-full' />
            </div>
            <div className='pt-auto'>
              <h3 className='font-bold text-xl mb-4'>{service.title}</h3>
              <p className='text-gray-600 text-sm whitespace-pre-line'>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default ServiceLayout
