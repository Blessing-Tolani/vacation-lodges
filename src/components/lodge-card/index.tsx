import { Link } from 'react-router-dom'
import { airbnbMockData } from '../../app-constants/data-airbnb'
import { AiFillStar } from 'react-icons/ai'
import { Skeleton } from '@mui/material'
import SwipeableViews from 'react-swipeable-views'
import { useState } from 'react'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'

export default function LodgeCard({
  lodgeDetails,
  isAllFeesChecked,
}: {
  lodgeDetails: (typeof airbnbMockData)[0]
  isAllFeesChecked: boolean
}) {
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <Link className="w-full" to="#">
      {lodgeDetails?.photos ? (
        <div className="relative">
          <SwipeableViews
            index={imageIndex}
            onChangeIndex={(index: number) => setImageIndex(index)}
            resistance
            className="shadow-[0px_16px_32px_rgba(113,135,156,0.2)] rounded-xl slide"
          >
            {lodgeDetails?.photos.length <= 5
              ? lodgeDetails?.photos?.map((photo) => (
                  <div
                    className="w-full h-[269px] rounded-xl bg-neutral-300"
                    style={{
                      backgroundImage: `url(${photo.pictureUrl})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  ></div>
                ))
              : lodgeDetails?.photos?.slice(0, 5).map((photo) => (
                  <div
                    className="w-full h-[269px] rounded-xl bg-neutral-300"
                    style={{
                      backgroundImage: `url(${photo.pictureUrl})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  ></div>
                ))}
          </SwipeableViews>
          {lodgeDetails?.photos?.length && (
            <div className="lgMax:hidden navigationArrows">
              <button
                onClick={() => setImageIndex(imageIndex - 1)}
                className={` ${
                  imageIndex === 0 ? 'hidden' : 'flex'
                } absolute top-[45%] left-3 rounded-full  text-gray items-center w-8 h-8  justify-center bg-white`}
              >
                <BiChevronLeft size={20} />
              </button>
              <button
                onClick={() => setImageIndex(imageIndex + 1)}
                className={` ${
                  imageIndex === 4 ? 'hidden' : 'flex'
                } absolute top-[45%] right-3 rounded-full  text-gray items-center w-8 h-8  justify-center bg-white`}
              >
                <BiChevronRight size={25} />
              </button>
            </div>
          )}
          <div
            className="text-soft flex items-center space-x-2 absolute bottom-4 left-1/2 -translate-x-1/2"
            role="presentation"
          >
            {lodgeDetails?.photos?.slice(0, 5).map((photo, index) => (
              <button
                key={photo?.pictureUrl}
                onClick={() => setImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  imageIndex === index ? 'bg-neutral-400' : 'bg-white'
                }`}
              ></button>
            ))}
          </div>
        </div>
      ) : (
        <Skeleton variant="rounded" animation="wave" height={269} />
      )}
      <div className="pt-3 text-sm font-light">
        <div className="text-gray font-medium flex justify-between">
          <p>
            {lodgeDetails?.city}, {lodgeDetails?.country}
          </p>
          <p className="flex items-center  font-light space-x-1">
            <AiFillStar /> <span>4.9</span>
          </p>
        </div>

        <p className="text-light-gray overflow-hidden whitespace-nowrap">
          {lodgeDetails?.name}
        </p>
        <p className="text-light-gray ">Sep 8 - 13</p>
        {isAllFeesChecked ? (
          <p className="text-gray mt-2">
            <span className="font-medium">
              ${lodgeDetails?.pricing?.rate?.amount * 2}{' '}
            </span>
            total before taxes
          </p>
        ) : (
          <p className="text-gray mt-2">
            <span className="font-medium">
              {lodgeDetails?.pricing?.rate?.amountFormatted}{' '}
            </span>
            night
          </p>
        )}
      </div>
    </Link>
  )
}
