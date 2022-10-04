import { Popup } from '../types/popup';
import Image from 'next/image';
import { HeartIcon, ShareIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function AllPopups({ popups }: { popups: Popup[] }) {
  const sortedPopups = popups?.map((popup) => {
    return {
      ...popup,
      Events: popup.Events?.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }),
    };
  });

  return (
    <>
      <div className='pt-6'>All popups:</div>
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
      >
        {sortedPopups?.map((popup) => (
          <li
            key={popup.id}
            className='flex flex-col border divide-y divide-zinc-200 rounded-lg bg-white shadow-sm hover:bg-zinc-50 hover:shadow-md transition-colors'
          >
            <div className='p-4'>
              <div className='flex flex-row object-cover space-x-2'>
                <div className='h-fit space-y-3 flex'>
                  <Image
                    className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                    src={popup.imageUrl ?? 'https://via.placeholder.com/150'}
                    alt='Popup logo'
                    height={75}
                    width={75}
                  />
                </div>
                <div className='flex flex-col w-fit shrink'>
                  <div className='flex flex-row space-x-2'>
                    {popup.instagram ?? (
                      <a
                        href={popup.instagram ?? '#'}
                        className='hover:cursor-pointer'
                      >
                        <Image src={'/instagram.svg'} width={17} height={17} />
                      </a>
                    )}
                    <ShareIcon
                      fill='black'
                      width={17}
                      height={17}
                      className=''
                    />{' '}
                    <HeartIcon fill='red' width={17} height={17} className='' />
                  </div>
                  <div className='text-lg font-bold text-gray-900'>
                    {popup.name}
                  </div>
                  <div className='inline-block flex-shrink-0 text-xs font-normal text-gray-800'>
                    {popup.description}
                  </div>
                  <div className='text-xs font-semibold text-gray-900'>
                    {popup.basedIn}
                  </div>
                </div>
              </div>
              <p className='mt-1 truncate text-sm space-x-1 text-gray-500'>
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
      </ul>
    </>
  );
}
