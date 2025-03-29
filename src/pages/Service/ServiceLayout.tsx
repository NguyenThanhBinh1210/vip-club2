import { Link, Outlet } from 'react-router-dom'
// import car from '~/assets/car-icon-vector-image-can-be-used-luxury_120816-387961.jpg'
// import consultant from '~/assets/ly-do-3.jpg'
// import tour from '~/assets/pngtree-coconut-tree-beach-chair-beach-summer-cartoon-illustration-png-image_12498361.png'
// import money from '~/assets/images.jpg'
import car from '~/assets/car1.png'
import consultant from '~/assets/phone1.png'
import tour from '~/assets/gold1.png'
import money from '~/assets/hantram1.png'

const ServiceLayout = () => {
    const services = [
        {
            //   icon: (
            //     <svg className="w-20 h-20 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
            //       <path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-2.5 0-2.512 1.185-2.512 1.185s.977 1.663 1.431 2.593c0 0 .714-.69 1.683-.69h1.886s.689.749.689 2.187c0 1.921-.457 2.562-.574 2.562h-1.325c-1.094 0-1.839.621-2.309 1.241-.287.379-.52.759-.523.762 0-.046-.053-.845-.355-1.679 0 0 .328-.791.328-1.982 0-2.498-1.658-3.477-1.658-3.477h-1.28v11.063h22v-7.844zm-15.739 6.079h-3v-1h3v1zm15-1h-12v-1h12v1z"/>
            //     </svg>
            //   ),
            icon: car,
            title: 'ĐƯA ĐÓN MIỄN PHÍ',
            description: 'Dịch vụ xe riêng đưa đón VIP tận nơi - hoàn toàn miễn phí cho khách của Let\'swin.',
            path: '/service/free-transport'
        },
        {
            //   icon: (
            //     <svg className="w-20 h-20 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
            //       <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
            //     </svg>
            //   ),
            icon: consultant,
            title: 'HỖ TRỢ 24/7',
            description: 'Đội ngũ chăm sóc khách hàng trực 24/7 - sẵn sàng hỗ trợ bất kỳ lúc nào',
            path: '/service/support'
        },
        {
            //   icon: (
            //     <svg className="w-20 h-20 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
            //       <path d="M4.5 9.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm9 4c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-4.5 4c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm10-8c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-2 8c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5z"/>
            //     </svg>
            //   ),
            icon: tour,
            title: 'TOUR NGHỈ DƯỠNG',
            description: 'Tour kết hợp nghỉ dưỡng - giải trí - trải nghiệm sòng bài VIP.\nLịch trình gợi ý (3 ngày 2 đêm):',
            path: '/service/tour'
        },
        {
            //   icon: (
            //     <svg className="w-20 h-20 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
            //       <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 14.083c0-2.145-2.232-2.742-3.943-3.546-1.039-.54-.908-1.829.581-1.916.826-.05 1.675.195 2.443.465l.362-1.647c-.907-.276-1.719-.402-2.443-.421v-1.018h-1v1.067c-1.945.267-2.984 1.487-2.984 2.85 0 2.438 2.847 2.81 3.778 3.243 1.27.568 1.035 1.75-.114 2.011-.997.226-2.269-.168-3.225-.54l-.455 1.644c.894.462 1.965.708 3 .727v.998h1v-1.053c1.657-.232 3.002-1.146 3-2.864z"/>
            //     </svg>
            //   ),
            icon: money,
            title: 'HOA HỒNG HẤP DẪN',
            description: 'Chính sách hoa hồng rõ ràng, minh bạch - phù hợp cho tour, tài xế, cộng tác viên',
            path: '/service/commission'
        }
    ]

    return (
        <div>
            <div className="pt-[160px] px-[33px] bg-gray-50 pb-12">
                <h1 className="mb-10 text-center text-[28px] md:text-[40px] max-w-[980px] md:mx-auto uppercase">
                    Dịch vụ
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto mb-12">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.path}
                            className=" bg-white p-8 rounded-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="mb-6">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-28 h-28 md:w-full md:h-full object-cover"
                                />
                                {/* {service.icon} */}
                            </div>
                            <div className='pt-auto'>
                                <h3 className="font-bold text-xl mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm whitespace-pre-line">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default ServiceLayout 