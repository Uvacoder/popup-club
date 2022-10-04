// import { popupData } from '../../temp/popupData';
import { Popup, Event } from '../types/popup';
import Image from 'next/image';
import { HeartIcon, ShareIcon } from '@heroicons/react/solid';

export default function Events({ popups }: { popups: Popup[] }) {
  //Returns a list of popups with the events sorted by date
  const sortedPopups = popups?.map((popup) => {
    return {
      ...popup,
      Events: popup.Events?.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }),
    };
  });

  function convertTime(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hours12 = hours % 12 || 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return hours12 + ':' + minutesStr + ampm;
  }

  return (
    <>
      <div className='pt-6'>All Events:</div>
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
      >
        {sortedPopups?.map((popup) => (
          <>
            {popup.Events?.slice(0, 1).map((event) => (
              <li
                key={event.id}
                className='flex flex-col border divide-y divide-zinc-200 rounded-lg bg-white shadow-sm hover:bg-zinc-50 hover:shadow-md transition-colorss'
              >
                <div className='p-4'>
                  <div className='flex flex-row object-cover space-x-2'>
                    <div className='h-fit space-y-3 flex'>
                      <span className='relative inline-block'>
                        <Image
                          className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                          src={
                            popup.imageUrl ?? 'https://via.placeholder.com/150'
                          }
                          alt=''
                          width={75}
                          height={75}
                        />
                        {popup.isHot ? (
                          <span className='absolute -top-2.5 -left-2.5 block  rounded-full bg-orange-200'>
                            🔥
                          </span>
                        ) : null}
                      </span>
                      {/* <Image
                        className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                        src={
                          popup.imageUrl ?? 'https://via.placeholder.com/150'
                        }
                        alt='Popup logo'
                        height={75}
                        width={75}
                      /> */}
                    </div>
                    {/* Social media */}
                    <div className='flex flex-col w-full'>
                      {/* <div className='flex flex-col'></div> */}
                      {/* Social media */}
                      <div className='flex flex-col w-full '>
                        <div className='grid grid-cols-3 h-fit'>
                          <div className='text-xs font-semibold text-gray-900 col-span-2'>
                            {event.date.getMonth() +
                              1 +
                              '/' +
                              event.date.getDate() +
                              '/' +
                              event.date.getFullYear()}
                            {' • '}@{convertTime(event.date)}
                          </div>

                          <div className='flex flex-row space-x-2  col-start-3 justify-end'>
                            {typeof popup.instagram === 'string' ? (
                              <a
                                target={'_blank'}
                                href={popup.instagram}
                                className='hover:cursor-pointer'
                              >
                                <Image
                                  src={'/instagram.svg'}
                                  width={17}
                                  height={17}
                                />
                              </a>
                            ) : null}
                            <ShareIcon
                              fill='black'
                              width={17}
                              height={17}
                              className=''
                            />{' '}
                            <HeartIcon
                              fill='red'
                              width={17}
                              height={17}
                              className=''
                            />
                          </div>
                        </div>
                      </div>
                      <div className='text-lg font-bold text-gray-900 '>
                        {typeof event.name === 'string'
                          ? event.name
                          : popup.name}
                      </div>
                      <div className='inline-block flex-shrink-0 text-sm font-normal text-gray-900'>
                        @{event.location}
                      </div>
                      <div className='inline-block flex-shrink-0 text-xs font-semibold text-gray-900'>
                        Full address
                      </div>
                    </div>
                  </div>
                  <p className='mt-1 truncate text-sm space-x-1 py-2 text-gray-500'>
                    {popup.categories.map((category) => (
                      <span
                        key={category}
                        className='inline-block bg-gray-100 hover:bg-gray-200 hover:cursor-pointer rounded-full px-2 py-0.5 text-xs font-medium text-gray-800'
                      >
                        {category}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </>
        ))}
      </ul>
    </>
  );
}
