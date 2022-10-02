import { Popup } from '../types/popup';
import Image from 'next/image';

export default function AllPopups({ popups }: { popups: Popup[] }) {
  return (
    <>
      <div className='pt-6'>All popups:</div>
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
      >
        {popups?.map((popup) => (
          <li
            key={popup.id}
            className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'
          >
            <div className='flex w-full items-center justify-between space-x-6 p-6'>
              <div className='flex-1'>
                <div className='flex items-center space-x-3'>
                  <div>
                    <h2 className=' text-lg font-bold text-gray-900'>
                      {popup.name}
                    </h2>
                    <h3 className='inline-block flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800'>
                      {popup.description}
                    </h3>
                  </div>
                </div>
                <p className='mt-1 truncate text-sm text-gray-500'>
                  {popup.categories.map((category) => (
                    <span
                      key={category}
                      className='inline-block bg-gray-100 rounded-full px-2 py-0.5 text-xs font-medium text-gray-800'
                    >
                      {category}
                    </span>
                  ))}
                </p>
                <div className=''>
                  Events:
                  {popup.Events?.map((event) => (
                    <span
                      key={event.id}
                      className='inline-block bg-gray-100 rounded-full px-2 py-0.5 text-xs font-medium text-gray-800'
                    >
                      {event.name ?? popup.name} -{' '}
                      {event.date.getMonth() +
                        1 +
                        '/' +
                        event.date.getDate() +
                        '/' +
                        event.date.getFullYear()}
                    </span>
                  ))}
                </div>
              </div>
              <Image
                className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                src={popup.imageUrl ?? 'https://via.placeholder.com/150'}
                alt='Popup logo'
                height={75}
                width={75}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
