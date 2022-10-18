import { Links, Popup, Tags, TagsOnPopups } from '../types/popup';
import Image from 'next/image';
import SocialMedia from './socialMedia';
import { trpc } from '../utils/trpc';
import PopupTags from './tags';
import { getLinksByPopupId } from './allPopups';
import { PopupSchema } from '../types/popup';

export function convertTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const hours12 = hours % 12 || 12;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return hours12 + ':' + minutesStr + ampm;
}

export function getTagsByPopupId(popupid: { popupid: string }) {
  return trpc.useQuery(['tags.getTagsByPopup', popupid], {
    enabled: true,
  });
}

export function getEventsByPopupId(popupid: { popupid: string }) {
  return trpc.useQuery(['event.getEventByPopupId', popupid], {
    enabled: true,
  });
}

export default function Events({ popup }: { popup: Popup }) {
  console.log(popup);
  return (
    <>
      {popup.events?.slice(0, 1).map((event) => (
        <li
          key={event.id}
          className='flex flex-col border border-collapse divide-y divide-zinc-200 rounded-lg shadow-sm hover:bg-zinc-50 hover:shadow-md transition-colors'
        >
          <div className='p-4 '>
            <div className='flex flex-row object-cover space-x-2'>
              <div className='h-fit space-y-3 flex'>
                <span className='relative inline-block'>
                  <Image
                    key={popup.id}
                    className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                    src={popup.links.imageUrl ?? '/hotdog.jpg'}
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
              </div>
              <div className='flex flex-col w-full'>
                <div className='grid grid-cols-3 h-4'>
                  <div className='text-xs font-semibold text-gray-900 col-span-2'>
                    {event.date.getMonth() +
                      1 +
                      '/' +
                      event.date.getDate() +
                      '/' +
                      event.date.getFullYear()}
                    {' • '}
                    <span className='font-bold'>
                      @{convertTime(event.date)}
                    </span>
                  </div>
                  <div className='flex flex-row space-x-2 col-start-3 justify-end'>
                    <SocialMedia links={popup.links} showAll={false} />
                  </div>
                </div>
                <div className='text-xl font-bold text-gray-900 tracking-tight antialiased'>
                  {typeof event.name === 'string' ? event.name : popup.name}
                </div>
                <div className='inline-block flex-shrink-0 text-sm font-normal text-gray-900 -mt-1'>
                  {typeof event.name === 'string' ? (
                    <>
                      <span className='text-xs font-medium'>
                        by {popup.name}
                      </span>
                      {' • '}
                    </>
                  ) : null}
                  @{event.location.name}
                </div>
                <div className='-mt-1'>
                  <a
                    href={event.location.mapsUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-block flex-shrink-0 text-xs tracking-tight hover:cursor-pointer'
                  >
                    {event.location.address} {event.location.city},
                    {event.location.state}, {event.location.zip}
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-row space-x-1'>
              {popup.tags?.map((tag) => (
                <PopupTags key={tag.tag.id} name={tag.tag.name} />
              ))}
            </div>
            <p className='text-sm text-semibold text-gray-800'>
              {typeof event.description === 'string' ? (
                <span className='font-medium'>
                  {' '}
                  On special: {event.description}
                </span>
              ) : (
                popup.description
              )}
            </p>
          </div>
        </li>
      ))}
    </>
  );
}
