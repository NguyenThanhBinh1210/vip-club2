import hotrambanner from '~/assets/Page-Banner-1366x543-2.jpg'
import hotrambanner2 from '~/assets/Page-Banner-640x980-2.jpg'
import hotrambanner3 from '~/assets/GHII5441-768x512.webp'
import hotrambanner4 from '~/assets/BOL09680-768x512.webp'
import hotrambanner5 from '~/assets/hoiana-hotel-and-suites3.webp'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'

const VIPMembershipOffers = () => {
  const { data: imageData } = useQuery({
    queryKey: ['images', 'vip-membership-offers'],
    queryFn: () => imageApi.getImages({ pageSlug: 'vip-membership-offers' })
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
          src={getImageUrl('Page-Banner-1366x543-2', hotrambanner)}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={getImageUrl('Page-Banner-640x980-2', hotrambanner2)}
          alt='hotrambanner2'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-[160px] px-[33px]'>
        <h1 className='mb-10 text-center text-[28px] md:text-[40px] max-w-[980px] md:mx-auto uppercase'>
          Ưu đãi thành viên VIP
        </h1>
      </div>
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>Tích điểm & đổi quà</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Tích điểm & đổi quà khi tham gia các trò chơi sẽ mang lại cho bạn những trải nghiệm thú vị và những phần quà hấp dẫn. Khi tham gia các hoạt động trong khu nghỉ dưỡng, bạn không chỉ có cơ hội giải trí mà còn có thể tích lũy điểm thưởng để đổi những phần quà giá trị. Càng tham gia nhiều, bạn càng nhận được nhiều ưu đãi, từ quà tặng đặc biệt đến những dịch vụ ưu tiên.
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  Liên hệ ngay
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-5'>
            <img 
              className='mt-5 lg:mt-0 aspect-[9/6]' 
              src={getImageUrl('GHII5441-768x512', hotrambanner3)} 
              alt='hotrambanner3' 
            />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                Tích điểm & đổi quà khi tham gia các trò chơi sẽ mang lại cho bạn những trải nghiệm thú vị và những phần quà hấp dẫn. Khi tham gia các hoạt động trong khu nghỉ dưỡng, bạn không chỉ có cơ hội giải trí mà còn có thể tích lũy điểm thưởng để đổi những phần quà giá trị. Càng tham gia nhiều, bạn càng nhận được nhiều ưu đãi, từ quà tặng đặc biệt đến những dịch vụ ưu tiên.
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
      <div className='py-20'>
        <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-5'>
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>Giảm giá dịch vụ ăn uống, khách sạn, spa</h2>
            <img 
              className='mt-5 lg:mt-0 aspect-[9/6]' 
              src={getImageUrl('BOL09680-768x512', hotrambanner4)} 
              alt='hoian' 
            />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Thưởng thức những bữa ăn ngon tại nhà hàng cao cấp, thư giãn tại spa hoặc tận hưởng không gian sang trọng của khách sạn, tất cả đều trở nên dễ dàng hơn với các ưu đãi giảm giá từ chương trình tích điểm. Bạn sẽ cảm thấy thật sự hài lòng khi mỗi điểm thưởng bạn tích lũy đều mang lại giá trị thiết thực trong trải nghiệm của mình.
              </div>
              <a href='tel:+84766798268'>
                <button className='uppercase text-[15px] pt-3 pb-2.5 px-4 absolute hover:opacity-60 group transition-all duration-300'>
                  Liên hệ ngay
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
                </button>
              </a>
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>Giảm giá dịch vụ ăn uống, khách sạn, spa</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Thưởng thức những bữa ăn ngon tại nhà hàng cao cấp, thư giãn tại spa hoặc tận hưởng không gian sang trọng của khách sạn, tất cả đều trở nên dễ dàng hơn với các ưu đãi giảm giá từ chương trình tích điểm. Bạn sẽ cảm thấy thật sự hài lòng khi mỗi điểm thưởng bạn tích lũy đều mang lại giá trị thiết thực trong trải nghiệm của mình.
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
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>Phòng VIP riêng với dịch vụ cao cấp</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
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
          <div className='lg:col-span-5'>
            <img 
              className='mt-5 lg:mt-0 aspect-[9/6]' 
              src={getImageUrl('hoiana-hotel-and-suites3', hotrambanner5)} 
              alt='hotrambanner5' 
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
    </div>
  )
}

export default VIPMembershipOffers