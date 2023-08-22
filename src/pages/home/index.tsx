import { IoSearch } from 'react-icons/io5'
import { IoIosArrowUp } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'
import { BiChevronRight } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { Avatar, Switch, styled } from '@mui/material'
import { CATEGORIES } from '../../app-constants'
import { airbnbMockData } from '../../app-constants/data-airbnb'
import LodgeCard from '../../components/lodge-card'
import { useState } from 'react'

const IOSSwitch = styled(Switch)({
  width: 50,
  height: 32,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '& + .MuiSwitch-track': {
      backgroundColor: '#222222 !important',
    },
    '&.Mui-checked': {
      transform: 'translateX(17px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        border: 0,
      },
      '& .MuiSwitch-thumb': {
        '&:before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12"><path fill="${encodeURIComponent(
            '#000'
          )}" d="m10.5 1.939 1.061 1.061-7.061 7.061-.53-.531-3-3-.531-.53 1.061-1.061 3 3 5.47-5.469z"/></svg>')`,
        },
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 29,
    height: 29,
  },
  '& .MuiSwitch-track': {
    borderRadius: 60,
  },
})

export default function Home() {
  const [isAllFeesChecked, toggleAllFeesSwitch] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Rooms')

  return (
    <section className="relative bg-white">
      <header className="sticky top-0 bg-white z-[100] ">
        <div className="px-5 sm:px-10 lg:px-20 xl:h-20 lgMax:py-5  flex items-center justify-between md:border-b md:border-neutral-200">
          <a href="https://www.airbnb.com/">
            <img
              src="/airbnb-image.png"
              width={102}
              height={32}
              className="lgMax:hidden"
            />
            <img
              src="/airbnb.png"
              width={46}
              height={64}
              className="lg:hidden mdMax:hidden"
            />
          </a>

          <button className="bg-white mdMax:hidden font-medium pr-2 pl-6 text-sm text-gray flex items-center rounded-full shadow-md hover:shadow-sm  border border-neutral-300 py-2 space-x-4">
            <p>Anywhere</p>
            <p className="border-l border-r border-neutral-200 px-3.5">
              Any week
            </p>
            <div className="flex items-center space-x-2.5 font-light">
              <p className="text-light-gray">Add guests</p>
              <div className="bg-primary w-8 h-8 text-white grid place-items-center rounded-full">
                <IoSearch />
              </div>
            </div>
          </button>
          <div className="text-sm mdMax:hidden text-gray font-medium flex items-center gap-x-5">
            <a href="#" className="p-2 hover:bg-neutral-100 rounded-full">
              Airbnb your home
            </a>
            <TbWorld size={20} />
            <div className="flex ml-1 hover:shadow-lg items-center border border-neutral-200 rounded-full px-1.5 py-1 gap-x-3">
              <FiMenu size={20} />
              <Avatar
                src=""
                sx={{ width: 30, height: 30, backgroundColor: '#717171' }}
              />
            </div>
          </div>
          <div className="bg-white md:hidden w-full pr-2 pl-6 text-sm text-gray flex items-center rounded-full shadow-lg border border-neutral-300 py-2 justify-between">
            <div className="flex items-center gap-x-4">
              <IoSearch size={20} />
              <div>
                <p className="font-medium">Anywhere</p>
                <p className="text-xs font-light text-light-gray flex items-center gap-x-1">
                  <span>Any week</span>
                  <span>·</span>
                  <span>Add guests</span>
                </p>
              </div>
            </div>
            <div className="bg-white border border-neutral-300 text-gray hover:shadow-xl w-8 h-8  grid place-items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                width={16}
                height={16}
                fill="#222222"
              >
                <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </div>
          </div>
        </div>

        <section className="px-5 sm:px-10 lg:px-20 flex items-start bg-white justify-between md:mt-6 mdMax:border-b border-neutral-200 md:pt-3 ">
          <div className="flex gap-x-10 items-center overflow-x-auto hide-scrollbar ">
            {CATEGORIES.map((category) => (
              <button
                onClick={() => setActiveCategory(category.title)}
                className={`${
                  activeCategory === category.title
                    ? 'opacity-100 text-black  border-gray'
                    : 'opacity-70 text-[#717171]  border-white hover:text-gray hover:opacity-100  hover:border-neutral-300'
                }    whitespace-nowrap pb-3  border-b-2   font-semibold text-xs`}
              >
                <img src={category.url} className="w-6 h-6 mx-auto" />
                <p className="mt-2 font-medium">{category.title}</p>
              </button>
            ))}
          </div>
          <div className="flex items-center xlMax:hidden gap-x-5">
            <div className="bg-white border border-light-gray text-gray hover:shadow-xl w-7 h-7  grid place-items-center rounded-full">
              <BiChevronRight size={25} />
            </div>
            <div className="flex items-center  space-x-3 text-xs text-gray font-medium border border-neutral-200 rounded-xl p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                width={16}
                height={16}
                fill="#222222"
              >
                <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
              <span> Filters</span>
            </div>
          </div>
        </section>
      </header>
      <main className="px-5 sm:px-10 lg:px-20 ">
        <div className="mx-auto w-full lg:w-1/2 border mt-5 md:mt-4  rounded-xl flex justify-between  border-neutral-200 px-4 py-3">
          <div className="md:flex items-center">
            <p className="text-gray font-medium md:border-r pr-4 border-neutral-200">
              Display total price
            </p>
            <p className="text-light-gray text-sm md:pl-4 font-light">
              Include all fees, before taxes
            </p>
          </div>
          <IOSSwitch
            checked={isAllFeesChecked}
            onChange={(e) => toggleAllFeesSwitch(e.target.checked)}
          />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-6  gap-y-10 mt-6 mb-20">
          {airbnbMockData.map((data, index) => (
            <LodgeCard
              lodgeDetails={data}
              key={index}
              isAllFeesChecked={isAllFeesChecked}
            />
          ))}
        </section>
      </main>
      <footer className="xlMax:hidden py-4 border-t flex  justify-between items-center fixed top-[94vh] text-gray  text-sm border-neutral-300  px-5 lg:px-20 bg-white w-full">
        <div className="flex item-center gap-x-3 font-light">
          <p>© 2023 Airbnb, Inc.</p>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Sitemap</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">
            Your Privacy Choices
          </span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Destinations</span>
        </div>
        <div className="flex items-center font-medium gap-x-4">
          <div className="flex space-x-1">
            <TbWorld size={20} />
            <p className="hover:underline cursor-pointer">English (US)</p>
          </div>
          <div className="flex space-x-1">
            <span>$</span>
            <p className="hover:underline cursor-pointer">USD</p>
          </div>
          <div className="flex space-x-1">
            <p className="hover:underline cursor-pointer">
              Support & resources
            </p>
            <IoIosArrowUp />
          </div>
        </div>
      </footer>
    </section>
  )
}
