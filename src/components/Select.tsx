import { useState } from 'react'
// import { useTranslation } from 'react-i18next'
import Flag from 'react-world-flags'

export const Select = ({
  initialView,
  selected,
  setSelected,
  classNames
}: {
  initialView: {
    name: string
    value: string
    countryCode?: string
  }[]
  selected: string
  setSelected: (value: string) => void
  classNames?: {
    header?: string
    li?: string
    ul?: string
  }
}) => {
  const [isOpen, setIsOpen] = useState(false)
  // const { t } = useTranslation()

  const selectedLangData = initialView.find((item) => item.value === selected)

  return (
    <div className='relative w-max ml-auto flex-shrink-0'>

      {/* Header (Desktop) */}
      <div
        className={`py-1.5 uppercase w-[100px] lg:w-[140px] text-sm hidden lg:flex justify-between items-center cursor-pointer ${classNames?.header}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center gap-2'>
          {selectedLangData?.countryCode && (
            <Flag code={selectedLangData.countryCode} style={{ width: 24, height: 16 }} />
          )}
          {selectedLangData?.name}
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2.5}
          stroke='currentColor'
          className={`size-4 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        </svg>
      </div>

      {/* Header (Mobile) */}
      <div
        className={`py-1.5 uppercase w-max lg:w-[140px] gap-1 text-sm flex lg:hidden justify-between items-center cursor-pointer ${classNames?.header}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center gap-2'>
          {selectedLangData?.countryCode && (
            <Flag code={selectedLangData.countryCode} style={{ width: 24, height: 16 }} />
          )}
          {selectedLangData?.value}
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2.5}
          stroke='currentColor'
          className={`size-4 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        </svg>
      </div>

      {/* Dropdown */}
      <div
        className={`bg-[#f8f8f5] z-[51] text-sm transition-all duration-300 absolute top-full right-0 w-max overflow-hidden ${isOpen ? 'max-h-[1000px] py-4' : 'max-h-0'} ${classNames?.ul}`}
      >
        {initialView.map((item) => (
          <div
            key={item.value}
            className={`w-full cursor-pointer uppercase hover:bg-[#dcddd7] px-5 py-1 ${classNames?.li} flex items-center gap-2`}
            onClick={() => {
              setSelected(item.value)
              setIsOpen(false)
            }}
          >
            {item.countryCode && (
              <Flag code={item.countryCode} style={{ width: 24, height: 16 }} />
            )}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
