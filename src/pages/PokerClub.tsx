import hotrambanner from '~/assets/oker1.jpg'
import hotrambanner2 from '~/assets/oker1.jpg'
import hotrambanner3 from '~/assets/poket1.jpg'
import hotrambanner4 from '~/assets/poker2.jpg'
import { useQuery } from 'react-query'
import { imageApi } from '~/apis/image.api'

const PokerClub = () => {
  const { data: imageData } = useQuery({
    queryKey: ['images', 'event-tournament-promotions'],
    queryFn: () => imageApi.getImages({ pageSlug: 'event-tournament-promotions' })
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
          src={getImageUrl('B1127232-1', hotrambanner)}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block w-full'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={getImageUrl('B1127232-1', hotrambanner2)}
          alt='hotrambanner2'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-[160px] px-[33px]'>
        <h1 className='mb-10 text-center text-[28px] md:text-[40px] max-w-[980px] md:mx-auto uppercase'>
          Poker Club
        </h1>
      </div>
      <div className='py-20'>
        <div className='pl-4 2xl:pl-[180px] lg:pl-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px]'>Phòng Poker riêng tư</h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Là thành viên VIP, bạn sẽ có cơ hội tham gia các giải đấu độc quyền, nơi bạn có thể thể hiện kỹ năng,
                chiến lược và tài năng trong một không gian đẳng cấp. Những giải đấu này không chỉ mang lại thử thách mà
                còn là cơ hội để bạn giành những giải thưởng hấp dẫn và chứng minh bản lĩnh của mình trước cộng đồng
                VIP.
              </div>

            </div>
          </div>
          <div className='lg:col-span-5'>
            <img
              className='mt-5 lg:mt-0 aspect-[9/6] object-cover'
              src={getImageUrl('oker1', hotrambanner3)}
              alt='hotrambanner3'
            />
            <div className='block lg:hidden'>
              <div className='text-[15px] lg:text-[16px] my-4 text-[#333333]'>
                Là thành viên VIP, bạn sẽ có cơ hội tham gia các giải đấu độc quyền, nơi bạn có thể thể hiện kỹ năng,
                chiến lược và tài năng trong một không gian đẳng cấp. Những giải đấu này không chỉ mang lại thử thách mà
                còn là cơ hội để bạn giành những giải thưởng hấp dẫn và chứng minh bản lĩnh của mình trước cộng đồng
                VIP.
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className='py-20'>
        <div className='pr-4 2xl:pr-[180px] lg:pr-[110px] lg:grid grid-cols-7 lg:gap-10 lg:w-[59pc] mx-auto xl:w-[79pc] 2xl:w-[82pc]'>
          <div className='lg:col-span-5'>
            <h2 className='text-[25px] uppercase lg:text-[32px] lg:hidden px-4'>Đến với Poker Club</h2>

            <img
              className='mt-5 lg:mt-0 aspect-[9/6]'
              src={getImageUrl('MICE-Hero-Slider-2', hotrambanner4)}
              alt='hoian'
            />
            <div className='block lg:hidden pl-4 lg:pl-0'>
              <div className='text-[15px] mt-4 mb-8 text-[#333333]'>
                Poker không chỉ là một trò chơi, mà là một trải nghiệm đẳng cấp, nơi những quyết định thông minh và chiến lược tinh tế dẫn đến những phần thưởng xứng đáng. Chơi Poker là bước vào một thế giới của sự sang trọng và quyền lực, nơi những giải thưởng hấp dẫn không chỉ là tiền bạc, mà còn là biểu tượng của sự thành công và danh vọng. Mỗi ván bài là một cuộc thử thách đầy kích thích, nơi chỉ những người thật sự xuất sắc mới có thể chinh phục và sở hữu những giải thưởng giá trị, khẳng định vị thế của mình trong cộng đồng người chơi.
              </div>

            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-[25px] uppercase lg:text-[32px] hidden lg:block'>
              Đến với Poker Club
            </h2>
            <div className='hidden lg:block'>
              <div className='text-[15px] mt-4 mb-4 text-[#333333]'>
                Poker không chỉ là một trò chơi, mà là một trải nghiệm đẳng cấp, nơi những quyết định thông minh và chiến lược tinh tế dẫn đến những phần thưởng xứng đáng. Chơi Poker là bước vào một thế giới của sự sang trọng và quyền lực, nơi những giải thưởng hấp dẫn không chỉ là tiền bạc, mà còn là biểu tượng của sự thành công và danh vọng. Mỗi ván bài là một cuộc thử thách đầy kích thích, nơi chỉ những người thật sự xuất sắc mới có thể chinh phục và sở hữu những giải thưởng giá trị, khẳng định vị thế của mình trong cộng đồng người chơi.
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PokerClub
