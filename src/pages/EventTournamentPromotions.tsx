import hotrambanner from '~/assets/B1127232-1.webp'
import hotrambanner2 from '~/assets/B1127232-1.webp'
import hotrambanner3 from '~/assets/oker1.jpg'
import hotrambanner4 from '~/assets/Meetings & Events _ Hoiana Resort & Golf_files/MICE-Hero-Slider-2.jpg'
import hotrambanner5 from '~/assets/Theres-always-more.webp'
const EventTournamentPromotions = () => {
  return (
    <div>
      <div>
        <img
          src={hotrambanner}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full '
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={hotrambanner2}
          alt='hotrambanner2'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-[160px] px-[33px]'>
        <h1 className='mb-10 text-center text-[28px] md:text-[40px] max-w-[980px] md:mx-auto uppercase'>
          Ưu đãi sự kiện & giải đấu

        </h1>
      </div>
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>Tham gia các giải đấu độc quyền dành cho VIP</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Là thành viên VIP, bạn sẽ có cơ hội tham gia các giải đấu độc quyền, nơi bạn có thể thể hiện kỹ năng,
                chiến lược và tài năng trong một không gian đẳng cấp. Những giải đấu này không chỉ mang lại thử thách mà
                còn là cơ hội để bạn giành những giải thưởng hấp dẫn và chứng minh bản lĩnh của mình trước cộng đồng
                VIP.
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
            <img className='mt-5 lg:mt-0 aspect-[9/6] object-cover' src={hotrambanner3} alt='hotrambanner3' />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                Là thành viên VIP, bạn sẽ có cơ hội tham gia các giải đấu độc quyền, nơi bạn có thể thể hiện kỹ năng,
                chiến lược và tài năng trong một không gian đẳng cấp. Những giải đấu này không chỉ mang lại thử thách mà
                còn là cơ hội để bạn giành những giải thưởng hấp dẫn và chứng minh bản lĩnh của mình trước cộng đồng
                VIP.
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
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>Tiệc & sự kiện VIP miễn phí định kỳ</h2>

            <img className='mt-5 lg:mt-0 aspect-[9/6]' src={hotrambanner4} alt='hoian' />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Với tư cách là thành viên VIP, bạn sẽ được mời tham dự tiệc và sự kiện VIP miễn phí định kỳ, được tổ
                chức tại các địa điểm sang trọng. Đây là cơ hội tuyệt vời để kết nối, gặp gỡ những người bạn cùng đẳng
                cấp và tận hưởng không khí lễ hội sôi động, được chăm sóc tận tình với những dịch vụ đỉnh cao.
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
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>
              Tiệc & sự kiện VIP miễn phí định kỳ
            </h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Với tư cách là thành viên VIP, bạn sẽ được mời tham dự tiệc và sự kiện VIP miễn phí định kỳ, được tổ
                chức tại các địa điểm sang trọng. Đây là cơ hội tuyệt vời để kết nối, gặp gỡ những người bạn cùng đẳng
                cấp và tận hưởng không khí lễ hội sôi động, được chăm sóc tận tình với những dịch vụ đỉnh cao.
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
            <h2 className='text-[25px] uppercase lg:text-[32px]'>
              Cơ hội trúng thưởng lớn với các chương trình đặc biệt
            </h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Các chương trình đặc biệt dành riêng cho thành viên VIP sẽ mang đến cho bạn những cơ hội trúng thưởng
                lớn. Hãy chuẩn bị tinh thần để tham gia vào các hoạt động, trò chơi và sự kiện, nơi bạn có thể nhận được
                những phần thưởng giá trị, từ chuyến du lịch đến những món quà xa xỉ.
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
            <img className='mt-5 lg:mt-0 aspect-[9/6] object-cover' src={hotrambanner5} alt='hotrambanner5' />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                Các chương trình đặc biệt dành riêng cho thành viên VIP sẽ mang đến cho bạn những cơ hội trúng thưởng
                lớn. Hãy chuẩn bị tinh thần để tham gia vào các hoạt động, trò chơi và sự kiện, nơi bạn có thể nhận được
                những phần thưởng giá trị, từ chuyến du lịch đến những món quà xa xỉ.
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

export default EventTournamentPromotions
