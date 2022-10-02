// import { popupData } from '../../temp/popupData';
import { Event } from '../types/popup';

export default function Events({ events }: { events: Event[] }) {
  return (
    <>
      <div className='pt-6'>All events:</div>
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-6'
      >
        {events?.map((event) => (
          <li
            key={event.id}
            className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'
          >
            <div className='flex w-full items-center justify-between space-x-6 p-6'>
              <div className='flex-1'>
                <div className='flex items-center space-x-3'>
                  <div>
                    <h2 className=' text-lg font-bold text-gray-900'>
                      {event.name ?? event.popup?.name}
                    </h2>
                    <h3 className='inline-block flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800'>
                      {event.date.getMonth() +
                        '/' +
                        event.date.getDate() +
                        '/' +
                        event.date.getFullYear()}
                    </h3>
                  </div>
                </div>
                <p className='mt-1 truncate text-sm text-gray-500'>
                  {event.popup?.categories.map((category) => (
                    <span
                      key={category}
                      className='inline-block bg-gray-100 rounded-full px-2 py-0.5 text-xs font-medium text-gray-800'
                    >
                      {category}
                    </span>
                  ))}
                </p>
              </div>
              <img
                className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                src={event.popup?.imageUrl}
                alt=''
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
