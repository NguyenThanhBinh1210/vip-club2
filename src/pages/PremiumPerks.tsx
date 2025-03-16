import hotrambanner from '~/assets/NWHBR.webp'
import hotrambanner2 from '~/assets/NWHBR.webp'
import hotrambanner3 from '~/assets/NWHON1.webp'
import hotrambanner4 from '~/assets/Web-Gallery-Slide_2000x1250_Inter-resort-Free-Shuttle.webp'
import hotrambanner5 from '~/assets/IMG_8527-768x512.webp'
const PremiumPerks = () => {
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
          Đặc quyền cao cấp tại Hoiana & Hồ Tràm
        </h1>
      </div>
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>Miễn phí phòng khách sạn cho thành viên VIP</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Khi trở thành thành viên VIP, bạn sẽ được tận hưởng những ưu đãi đặc biệt, trong đó có phòng khách sạn miễn phí. Đây là cơ hội tuyệt vời để bạn trải nghiệm không gian nghỉ dưỡng sang trọng mà không phải lo lắng về chi phí. Hãy tận dụng những tiện ích đẳng cấp, từ giường ngủ thoải mái đến các dịch vụ cao cấp ngay tại phòng của bạn.

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
            <img className='mt-5 lg:mt-0 aspect-[9/6]' src={hotrambanner3} alt='hotrambanner3' />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                Khi trở thành thành viên VIP, bạn sẽ được tận hưởng những ưu đãi đặc biệt, trong đó có phòng khách sạn miễn phí. Đây là cơ hội tuyệt vời để bạn trải nghiệm không gian nghỉ dưỡng sang trọng mà không phải lo lắng về chi phí. Hãy tận dụng những tiện ích đẳng cấp, từ giường ngủ thoải mái đến các dịch vụ cao cấp ngay tại phòng của bạn.

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
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>Xe đưa đón riêng khi đạt hạng VIP cao nhất</h2>

            <img className='mt-5 lg:mt-0 aspect-[9/6]' src={hotrambanner4} alt='hoian' />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Với hạng VIP cao nhất, bạn sẽ được hưởng dịch vụ xe đưa đón riêng miễn phí, giúp bạn di chuyển một cách thuận tiện và thoải mái nhất. Không còn phải lo lắng về phương tiện di chuyển, xe riêng sẽ đón bạn từ điểm đến và đưa bạn tới mọi nơi trong khu nghỉ dưỡng, đảm bảo trải nghiệm hoàn hảo và tiện nghi.



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
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>Xe đưa đón riêng khi đạt hạng VIP cao nhất</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Với hạng VIP cao nhất, bạn sẽ được hưởng dịch vụ xe đưa đón riêng miễn phí, giúp bạn di chuyển một cách thuận tiện và thoải mái nhất. Không còn phải lo lắng về phương tiện di chuyển, xe riêng sẽ đón bạn từ điểm đến và đưa bạn tới mọi nơi trong khu nghỉ dưỡng, đảm bảo trải nghiệm hoàn hảo và tiện nghi.


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
            <h2 className='text-[25px] uppercase lg:text-[32px]'>Nhận quà tặng độc quyền vào các dịp đặc biệt
            </h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Ngoài các ưu đãi trên, thành viên VIP còn có cơ hội nhận quà tặng độc quyền vào những dịp đặc biệt trong năm. Những món quà tinh tế và giá trị này sẽ là dấu ấn đáng nhớ trong hành trình trải nghiệm của bạn. Quà tặng không chỉ là vật phẩm mà còn là lời tri ân sâu sắc dành cho sự đồng hành của bạn cùng chúng tôi.


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
            <img className='mt-5 lg:mt-0 aspect-[9/6]' src={hotrambanner5} alt='hotrambanner5' />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>

                Ngoài các ưu đãi trên, thành viên VIP còn có cơ hội nhận quà tặng độc quyền vào những dịp đặc biệt trong năm. Những món quà tinh tế và giá trị này sẽ là dấu ấn đáng nhớ trong hành trình trải nghiệm của bạn. Quà tặng không chỉ là vật phẩm mà còn là lời tri ân sâu sắc dành cho sự đồng hành của bạn cùng chúng tôi.


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

export default PremiumPerks