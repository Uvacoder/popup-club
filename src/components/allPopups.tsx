import { Popup } from '../types/popup';
import Image from 'next/image';
import SocialMedia from './socialMedia';
import PopupModal from './popupModal';
import { useState } from 'react';
import PopupTags from './tags';
import { trpc } from '../utils/trpc';

export function getLinksByPopupId(popupId: { popupId: string }) {
  return trpc.tags.getTagsByPopupId.useQuery(popupId).data;
}

export default function AllPopups({ popup }: { popup: Popup }) {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      {isShown && (
        <PopupModal isShown={isShown} setIsShown={setIsShown} popup={popup} />
      )}
      <li
        key={popup.id}
        className='mx-2 flex flex-col divide-y divide-zinc-200 rounded-lg border bg-white shadow-sm transition-colors hover:bg-zinc-50 hover:shadow-md'
        onClick={handleClick}
      >
        <div className='p-4'>
          <div className='flex flex-row space-x-2 object-cover'>
            <div className='flex h-fit space-y-3'>
              <Image
                key={popup.links.id}
                className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                src={popup.links.imageUrl ?? '/hotdog.jpg'}
                alt=''
                width={75}
                height={75}
              />
            </div>
            <div className='flex w-fit shrink flex-col'>
              <div className='flex h-5 flex-row space-x-2'>
                <SocialMedia links={popup.links} showAll={false} />
              </div>
              <div className='-mt-1 text-xl font-bold tracking-tight text-gray-900 antialiased'>
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
          <div className='flex flex-row space-x-1'>
            {popup.tags?.map((tag) => (
              <PopupTags key={tag.tag.id} name={tag.tag?.name} />
            ))}
          </div>
        </div>
      </li>
    </>
  );
}
