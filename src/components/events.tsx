// import { popupData } from '../../temp/popupData';
import { Popup, Event } from '../types/popup';
import Image from 'next/image';

export default function Events(
  { popups }: { popups: Popup[] },
  { events }: { events: Event[] }
) {
  return (
    <>
      <div className='pt-6'>All Events:</div>
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
      >
        {popups?.map((popup) => (
          <>
            {popup.Events?.map((event) => (
              <li
                key={event.id}
                className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'
              >
                <div className='flex flex-1 flex-col p-4'>
                  <div>
                    <Image
                      className='mx-auto h-32 w-32 flex-shrink-0 rounded-full object-scale-down'
                      src={popup.imageUrl ?? 'https://via.placeholder.com/150'}
                      alt='Popup logo'
                      height={150}
                      width={150}
                    />
                  </div>
                  <h3 className='mt-6 text-sm font-medium text-gray-900'>
                    {event.name}
                  </h3>
                  <dl className='mt-1 flex flex-grow flex-col justify-between'>
                    <dt className='sr-only'>Title</dt>
                    <dd className='text-sm text-gray-500'>
                      {popup.description}
                    </dd>
                    <dd className='text-sm'>
                      {event.date.getMonth() +
                        1 +
                        '/' +
                        event.date.getDate() +
                        '/' +
                        event.date.getFullYear()}
                    </dd>
                    <dt className='sr-only'>Role</dt>
                    <dd className='mt-3'>
                      <span className='rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800'>
                        {event.location}
                      </span>
                    </dd>
                  </dl>
                </div>
              </li>
            ))}
          </>
        ))}
      </ul>
    </>
  );
}
