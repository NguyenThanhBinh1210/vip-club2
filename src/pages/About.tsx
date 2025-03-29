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
        <div className=''>
          <h1 className='uppercase text-[40px] text-center mb-10'>{t('about.title')}</h1>

          {/* <p className='text-center text-[16px] font-bold mb-10'>
            LET’SWIN LÀ GÌ? – HỆ SINH THÁI GIẢI TRÍ VIP DÀNH CHO KHÁCH QUỐC TẾ
          </p>
          <p className='text-[16px] mb-4'>
            Let’swin là nền tảng cung cấp dịch vụ giải trí trọn gói dành cho khách du lịch quốc tế và người chơi cao cấp
            khi đến Việt Nam. Chúng tôi chuyên tổ chức và kết nối khách hàng với các hoạt động cao cấp như:
          </p>

          <p className='text-left text-[16px] mb-4'>• Poker club riêng tư, chuyên nghiệp</p>
          <p className='text-left text-[16px] mb-4'>• Trải nghiệm Casino VIP với nhiều ưu đãi</p>
          <p className='text-left text-[16px] mb-4'>• Dịch vụ đưa đón, hỗ trợ chơi, phiên dịch</p>
          <p className='text-left text-[16px] mb-4'>• Lên lịch trình tour nghỉ dưỡng – giải trí theo yêu cầu</p>
          <p className='text-left text-[16px] mb-4'>• Hệ thống chăm sóc khách hàng 24/7</p>

          <p className='text-[16px] mb-4'>
            Let’swin không phải là một casino hay đơn vị trung gian đơn thuần – chúng tôi là đối tác chiến lược của
            nhiều hệ thống casino hợp pháp, hoạt động theo hình thức cung cấp dịch vụ hỗ trợ và kết nối khách hàng cao
            cấp.
          </p> */}
          <div className='py-20'>
            <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
              <div className='lg:col-span-5'>
                <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>LET’SWIN LÀ GÌ?</h2>

                <img
                  className='mt-5 lg:mt-0 aspect-[9/6] object-cover'
                  src={hotrambanner5}
                  alt='hoian5'
                />
                <div className='block lg:hidden pl-4 lg:pl-0'>
                  <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                    <p className='mb-4'>Let’swin là nền tảng cung cấp dịch vụ giải trí trọn gói dành cho khách du lịch quốc tế và người chơi cao cấp</p>

                    <ul className='space-y-2'>
                      <li>• Poker club riêng tư, chuyên nghiệp</li>
                      <li>• Trải nghiệm Casino VIP với nhiều ưu đãi</li>
                      <li>• Dịch vụ đưa đón, hỗ trợ chơi, phiên dịch</li>
                      <li>• Lên lịch trình tour nghỉ dưỡng – giải trí theo yêu cầu</li>
                      <li>• Hệ thống chăm sóc khách hàng 24/7</li>
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
                <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>LET’SWIN LÀ GÌ?</h2>
                <div className='hidden lg:block'>
                  <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                    <p className='mb-4'> Let’swin là nền tảng cung cấp dịch vụ giải trí trọn gói dành cho khách du lịch quốc tế và người chơi cao cấp
                      khi đến Việt Nam. Chúng tôi chuyên tổ chức và kết nối khách hàng với các hoạt động cao cấp như:</p>

                    <ul className='space-y-2'>
                      <li>• Poker club riêng tư, chuyên nghiệp</li>
                      <li>• Trải nghiệm Casino VIP với nhiều ưu đãi</li>
                      <li>• Xử lý tình huống ngay cả vào ban đêm</li>
                      <li>• Lên lịch trình tour nghỉ dưỡng – giải trí theo yêu cầu</li>
                      <li>• Hệ thống chăm sóc khách hàng 24/7</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className='py-20'>
            <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
              <div className='lg:col-span-2'>
                <h2 className='text-[25px] uppercase lg:text-[32px]'>Let’swin dành cho ai?</h2>
                <div className='hidden lg:block'>
                  <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                    <ul className='space-y-2'>
                      <li>
                        • Du khách quốc tế muốn trải nghiệm poker, casino và nghỉ dưỡng tại Việt Nam.
                      </li>
                      <li>
                        • Những người chơi có kinh nghiệm đang tìm kiếm dịch vụ chuyên nghiệp – uy tín – bí mật.
                      </li>
                      <li>
                        • Các đối tác muốn hợp tác phát triển nguồn khách chơi lớn: tour, khách sạn, tài xế, cộng tác viên.
                      </li>
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
                    Ngoài các dịch vụ giảm giá, bạn còn có thể tận hưởng không gian riêng biệt và đẳng cấp với các phòng VIP cao cấp. Được trang bị đầy đủ tiện nghi và dịch vụ chăm sóc đặc biệt, các phòng VIP sẽ là nơi lý tưởng để bạn thư giãn sau những giờ phút tham gia các trò chơi và hoạt động giải trí. Với dịch vụ tận tâm và không gian riêng tư, mỗi khoảnh khắc trong kỳ nghỉ của bạn sẽ trở nên thật sự đáng nhớ.
                  </div>
                  <a href='tel:+84766798268'>
                    <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                      Liên hệ ngay
                      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className='text-center text-3xl pt-5 mb-10 uppercase'>Sứ mệnh của Let’swin</p>

          <p className='text-left text-[16px] mb-3 text-center'>
            Trở thành cánh tay phải cho mọi khách hàng quốc tế khi đến Việt Nam tìm kiếm giải trí cao cấp – an toàn –
            chuyên nghiệp – đáng tin cậy.
          </p>

          <p className='text-center text-[16px] font-bold mb-3 mt-10'>
            Let’swin không chỉ tổ chức trải nghiệm – chúng tôi định hình phong cách sống giải trí VIP cho giới tinh hoa.
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
