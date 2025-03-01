import Bokingbanner from '~/assets/download.jpg'
import Bokingbanner2 from '~/assets/download (1).jpg'
import Bokingbanner3 from '~/assets/4sand.avif'
import creadit1 from '~/assets/1_4_creditCardImage.svg'
import creadit2 from '~/assets/2_2_creditCardImage.svg'
import creadit3 from '~/assets/3_2_creditCardImage.svg'
import creadit4 from '~/assets/6_1_creditCardImage.svg'

import { ButtonBlack } from './Shop/Shopping'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Signup = () => {
  const state = useLocation()?.state?.state || 1
  const { t } = useTranslation()

  return (
    <div className='px-4 lg:px-0 lg:w-[59pc] 2xl:w-[978pt] mx-auto py-[60px]'>
      <div className='py-20'>
        <img src={Bokingbanner2} alt={t('signup.banner')} className='hidden md:block w-full' />
        <img src={Bokingbanner} alt={t('signup.banner')} className=' md:hidden w-full ' />
      </div>
      <h1 className='text-center text-4xl uppercase'>{t('signup.title')}</h1>
      <p className='pb-20 mt-2 text-center uppercase'>
        {t('signup.already_have_account')}{' '}
        <Link to='/login' className='text-black underline'>
          {t('signup.login_here')}
        </Link>
      </p>
      <div className='bg-[#f0f1eb] p-5  flex items-center flex-wrap gap-4 mb-10'>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
          <div
            className={`bg-black size-9 flex items-center justify-center rounded-full text-white ${state >= 1 ? '' : 'opacity-20'
              }`}
          >
            1
          </div>
          <span className={`uppercase hidden md:block ${state >= 1 ? '' : 'opacity-20'}`}>{t('signup.particulars')}</span>
        </div>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
          <div
            className={`bg-black size-9 flex items-center justify-center rounded-full text-white ${state >= 2 ? '' : 'opacity-20'
              }`}
          >
            2
          </div>
          <span className={`uppercase hidden md:block ${state >= 2 ? '' : 'opacity-20'}`}>{t('signup.digital_account')}</span>
        </div>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
          <div
            className={`bg-black size-9 flex items-center justify-center rounded-full text-white ${state >= 3 ? '' : 'opacity-20'
              }`}
          >
            3
          </div>
          <span className={`uppercase hidden md:block ${state >= 3 ? '' : 'opacity-20'}`}>{t('signup.complete')}</span>
        </div>
      </div>
      <div className='mb-10'>
        {state === 1 && (
          <>
            <div className='grid md:grid-cols-2 bg-[#f0f1eb] p-5 md:p-14 gap-x-20 gap-y-10'>
              <div className='flex flex-col   gap-x-10'>
                <div className='w-[178px] md:text-lg'>
                  {t('signup.last_name')}
                  <p className='text-xs'>{t('signup.passport_note')}</p>
                </div>
                <div className='flex-1'>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder={t('signup.last_name')} />
                </div>
              </div>
              <div className='flex flex-col   gap-x-10'>
                <div className='w-[178px] md:text-lg'>
                  {t('signup.first_name')}
                  <p className='text-xs'>{t('signup.passport_note')}</p>
                </div>
                <div className='flex-1'>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder={t('signup.first_name')} />
                </div>
              </div>
              <div className='flex flex-col   gap-x-10'>
                <div className=' md:text-lg'>
                  {t('signup.date_of_birth')}
                  <p className='text-xs'>{t('signup.age_requirement')}</p>
                </div>
                <div className='flex-1 grid grid-cols-3 gap-x-5'>
                  <input className=' border-b border-[#c5c6bc] p-1 w-full' placeholder={t('signup.day')} />
                  <select className='border-b border-[#c5c6bc] p-1 w-full '>
                    <option value='13'>{t('signup.month')}</option>
                    <option value='1'>{t('signup.january')}</option>
                    <option value='2'>{t('signup.february')}</option>
                    <option value='3'>{t('signup.march')}</option>
                    <option value='4'>{t('signup.april')}</option>
                    <option value='5'>{t('signup.may')}</option>
                    <option value='6'>{t('signup.june')}</option>
                    <option value='7'>{t('signup.july')}</option>
                    <option value='8'>{t('signup.august')}</option>
                    <option value='9'>{t('signup.september')}</option>
                    <option value='10'>{t('signup.october')}</option>
                    <option value='11'>{t('signup.november')}</option>
                    <option value='12'>{t('signup.december')}</option>
                  </select>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder={t('signup.year')} />
                </div>
              </div>
              <div className='flex flex-col   gap-x-10'>
                <div className='w-[178px] md:text-lg'>
                  {t('signup.mobile_number')}
                  <p className='text-xs'>{t('signup.mobile_note')}</p>
                </div>
                <div className='flex-1'>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder={t('signup.mobile_number')} />
                </div>
              </div>
              <div className='flex flex-col   gap-x-10'>
                <div className=' md:text-lg'>
                  {t('signup.email')}
                  <p className='text-xs'>{t('signup.email_note')}</p>
                </div>
                <div className='flex-1'>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder={t('signup.email')} />
                </div>
              </div>
              <div className='flex flex-col   gap-x-10'>
                <div className=' md:text-lg'>
                  {t('signup.referral_code')}
                  <p className='text-xs'>{t('signup.optional')}</p>
                </div>
                <div className='flex-1'>
                  <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                </div>
              </div>
            </div>
            <Link to='/SignUpOTPVerification'>
              <ButtonBlack className='mx-0 px-20 ml-0' title={t('signup.next')} /></Link>
          </>
        )}
        {state === 2 && (
          <div className='space-y-10'>
            <div className='bg-[#f0f1eb] py-[56px] px-4 md:px-10 spac'>
              <p className='text-3xl uppercase font-medium'>{t('signup.create_pin')}</p>
              <div className='grid grid-cols-12 gap-x-10'>
                <div className='col-span-12 md:col-span-5 py-5 md:border-r border-[#c5c6bc] md:pr-5'>
                  <p className='text-xl uppercase font-medium'>{t('signup.create_4digit_pin')}</p>
                  <p>{t('signup.pin_description')}</p>
                </div>
                <div className='col-span-12 md:col-span-7 py-5 grid grid-cols-2 gap-x-5'>
                  <div className='flex flex-col gap-y-2'>
                    <p>{t('signup.create_pin_label')}</p>
                    <input type='text' className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    <p>{t('signup.confirm_pin')}</p>
                    <input type='text' className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#f0f1eb] py-[56px] px-4 md:px-10'>
              <p className='text-3xl uppercase font-medium'>{t('signup.create_digital_account')}</p>
              <div className='grid grid-cols-12 gap-x-10'>
                <div className='col-span-12 md:col-span-5 py-5 md:border-r border-[#c5c6bc] md:pr-5'>
                  <p className='text-xl uppercase font-medium'>{t('signup.digital_accounts')}</p>
                  <p>{t('signup.digital_account_description')}</p>
                </div>
                <div className='col-span-12 md:col-span-7 py-5 space-y-5 '>
                  <div className='flex flex-col gap-y-2'>
                    <p>{t('signup.username')}</p>
                    <input type='text' className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    <p>{t('signup.password')}</p>
                    <input type='text' className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    <p>{t('signup.confirm_password')}</p>
                    <input type='text' className='border-b border-[#c5c6bc] p-1 w-full ' placeholder='' />
                  </div>
                </div>
              </div>
            </div>
            <Link to='/signup-successful'>
              <ButtonBlack className='mx-0 px-20 ml-0' title={t('signup.create')} />
            </Link>
          </div>
        )}
        {state === 3 && (
          <div className='flex gap-5 flex-col-reverse md:flex-row'>
            <div className='space-y-5 md:w-2/3'>
              <div className='border border-[#c5c6bc] bg-[#f0f1eb] p-5 '>
                <p className='uppercase text-xl mb-2'>{t('signup.guest_information')}</p>
                <p className='text-sm mb-5'>{t('signup.english_only')}</p>
                <div className='space-y-5 mb-6'>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>{t('signup.title')}</div>
                    <div className='flex-1'>
                      <select className='border-b border-[#c5c6bc] p-1 w-full md:max-w-[178px]'>
                        <option value='1'>{t('signup.mr')}</option>
                        <option value='2'>{t('signup.ms')}</option>
                        <option value='3'>{t('signup.mrs')}</option>
                      </select>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>
                      {t('signup.first_name')}
                      <p className='text-xs'>{t('signup.passport_note')}</p>
                    </div>
                    <div className='flex-1'>
                      <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder={t('signup.first_name')} />
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>
                      {t('signup.last_name')}
                      <p className='text-xs'>{t('signup.passport_note')}</p>
                    </div>
                    <div className='flex-1'>
                      <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder={t('signup.last_name')} />
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>{t('signup.country')}</div>
                    <div className='flex-1'>
                      <select className='border-b border-[#c5c6bc] p-1 w-full '>
                        <option value='1'>a</option>
                        <option value='2'>b</option>
                        <option value='3'>c</option>
                      </select>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>{t('signup.phone_number')}</div>
                    <div className='flex-1 flex items-center gap-2'>
                      <select className='border-b border-[#c5c6bc] p-1 w-[120px]'>
                        <option value='1'>+84</option>
                        <option value='2'>b</option>
                        <option value='3'>c</option>
                      </select>
                      <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder={t('signup.last_name')} />
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>{t('signup.email')}</div>
                    <div className='flex-1'>
                      <input className='border-b border-[#c5c6bc] p-1 w-full ' placeholder={t('signup.email')} />
                    </div>
                  </div>
                </div>
                <p className='uppercase text-xl mb-6'>{t('signup.room_preferences')}</p>
                <div className='space-y-5 mb-6'>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>
                      {t('signup.arrival_time')}
                      <p className='text-xs'>{t('signup.checkin_note')}</p>
                    </div>
                    <div className='flex-1'>
                      <select className='border-b border-[#c5c6bc] p-1 w-full md:max-w-[178px]'>
                        <option value='1'>15:00</option>
                        <option value='2'>15:00</option>
                        <option value='3'>15:00</option>
                      </select>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>{t('signup.celebrating_occasion')}</div>
                    <div className='flex-1 flex gap-10 items-center'>
                      <div className='flex items-center gap-2'>
                        <input type='checkbox' />
                        <p>{t('signup.no')}</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='checkbox' />
                        <p>{t('signup.yes')}</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>{t('signup.room_preferences')}</div>
                    <div className='flex-1 '>
                      <select className='border-b border-[#c5c6bc] p-1 w-full '>
                        <option value='1'>{t('signup.no_preference')}</option>
                        <option value='2'>{t('signup.no_preference')}</option>
                        <option value='3'>{t('signup.no_preference')}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='border border-[#c5c6bc] bg-[#f0f1eb] p-5 '>
                <p className='uppercase text-xl mb-2'>{t('signup.upgrades_addons')}</p>
                <div className='space-y-5 mb-6'>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>{t('signup.upgrade_room')}</div>
                    <div className='flex-1'>
                      <p>{t('signup.upgrade_description')}</p>
                      <ButtonBlack className='mx-0 mb-0' title={t('signup.upgrade_room')} />
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>{t('signup.airport_transfer')}</div>
                    <div className='flex-1'>
                      <p>{t('signup.transfer_description')}</p>
                      <ButtonBlack className='mx-0 mb-0' title={t('signup.book_transfer')} />
                    </div>
                  </div>
                  <p className='text-xs text-right '>{t('signup.tax_note')}</p>
                </div>
              </div>
              <div className='border border-[#c5c6bc] bg-[#f0f1eb] p-5 '>
                <p className='uppercase text-xl mb-2'>{t('signup.payment_method')}</p>
                <div className='space-y-5 mb-6'>
                  <div className='flex flex-col md:flex-row  gap-x-10'>
                    <div className='w-[178px] md:text-lg'>{t('signup.preferred_payment')}</div>
                    <div className='flex-1 flex gap-5 items-center'>
                      <div className='flex items-center gap-2'>
                        <input type='radio' name='payment' />
                        <img src={creadit1} alt='creadit1' className='h-6' />
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='radio' name='payment' />
                        <img src={creadit2} alt='creadit2' className='h-6' />
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='radio' name='payment' />
                        <img src={creadit3} alt='creadit3' className='h-6' />
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='radio' name='payment' />
                        <img src={creadit4} alt='creadit4' className='h-6' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-5 space-y-2'>
                <div className='flex items-start gap-2 text-sm'>
                  <input type='checkbox' />
                  <p className='-translate-y-1'>{t('signup.terms_conditions')}</p>
                </div>
                <div className='flex items-start gap-2 text-sm'>
                  <input type='checkbox' />
                  <p className='-translate-y-1'>{t('signup.marketing_consent')}</p>
                </div>
              </div>
              <ButtonBlack className=' mx-0' title={t('signup.proceed')} />
              <p className='text-sm'>{t('signup.cancellation_policy')}</p>
            </div>
            <div className='border  bg-[#e1e2d6] p-5 md:w-1/3 md:sticky top-[100px] h-max'>
              <div className='flex justify-between items-center mb-2'>
                <p className='uppercase '>{t('signup.booking_dates')}</p>
                <button className='uppercase underline'>{t('signup.edit')}</button>
              </div>
              <div className='uppercase mb-3'>{t('signup.booking_duration')}</div>
              <p className='uppercase mb-2 text-xl'>{t('signup.room_guests')}</p>
              <img src={Bokingbanner3} alt='Bokingbanner3' className='w-full mb-2' />
              <div className='flex justify-between items-center mb-3'>
                <p className='uppercase '>{t('signup.booking_dates')}</p>
                <button className='uppercase underline'>{t('signup.edit')}</button>
              </div>
              <div className='flex justify-between items-center mb-3 text-sm'>
                <p className=' '>{t('signup.book_direct')}</p>
                <p className=' '>{t('signup.price_direct')}</p>
              </div>
              <div className='flex justify-between items-center mb-3 text-sm'>
                <p className=' '>{t('signup.tax_charges')}</p>
                <p className=' '>{t('signup.price_tax')}</p>
              </div>
              <div className='flex justify-between items-center  text-sm'>
                <p className=' text-lg uppercase'>{t('signup.total')}</p>
                <p className='text-lg '>{t('signup.price_total')}</p>
              </div>
              <p className='text-sm text-right'>{t('signup.price_sgd')}</p>
              <p className='text-xs text-right underline mt-4'>{t('signup.payment_policy')}</p>
              <p className='text-xs text-right '>{t('signup.rate_note')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


export default Signup
