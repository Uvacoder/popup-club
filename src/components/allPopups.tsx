import { Popup } from '../types/popup';
import Image from 'next/image';
import SocialMedia from './socialMedia';
import Tags from './tags';

export default function AllPopups({ popups }: { popups: Popup[] }) {
  const sortedPopups = popups?.map((popup) => {
    return {
      ...popup,
      Events: popup.events?.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }),
    } as Popup;
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
                    src={
                      typeof popup.links?.imageUrl === 'string'
                        ? popup.links?.imageUrl
                        : '/hotdog.jpg'
                    }
                    alt='Popup logo'
                    height={75}
                    width={75}
                  />
                </div>
                <div className='flex flex-col w-fit shrink'>
                  <div className='flex flex-row space-x-2 h-5'>
                    <SocialMedia links={popup.links} />
                  </div>
                  <div className='text-xl font-bold text-gray-900 -mt-1 tracking-tight antialiased'>
                    {popup.name}
                  </div>
                  <div className='inline-block flex-shrink-0 text-xs font-normal text-gray-800'>
                    {popup.description}
                  </div>
                  <div className='text-xs font-semibold text-gray-900'>
                    Based in: {popup.basedIn}
                  </div>
                </div>
              </div>
              <Tags tags={popup.categories} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
