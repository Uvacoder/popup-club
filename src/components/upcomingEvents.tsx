import { useState } from 'react';
import { Popup } from '../types/popup';
import { convertTime } from './events';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function UpcomingEvents({ popup }: { popup: Popup }) {
  const [remainingEvents, setRemainingEvents] = useState(
    popup.events.length - 3
  );
  const [upperLimit, setUpperLimit] = useState(3);
  const [parent] = useAutoAnimate<HTMLOListElement>();

  const handleClick = () => {
    setUpperLimit(upperLimit + 3);
    setRemainingEvents(remainingEvents - 3);
  };
  return (
    <>
      <div className='overflow-hidden rounded-md border border-gray-300 bg-white'>
        <ol ref={parent} role='list' className='divide-y divide-gray-300'>
          {popup.events?.slice(0, upperLimit).map((event) => (
            <li key={event.id} className='px-6 py-4 mx-5'>
              <span className='flex flex-row justify-between text-xs'>
                {event.date
                  .toLocaleString('default', { month: 'long' })
                  .slice(0, 3) +
                  ' ' +
                  event.date.getDate() +
                  ', ' +
                  event.date.getFullYear()}
                <span className='flex flex-row'>@{event.location.name}</span>
              </span>
              <span className='flex flex-row justify-between text-xs'>
                {convertTime(event.date)}
                <span className='flex flex-row'>
                  {event.location.address} {event.location.city}
                  {', '}
                  {event.location.state}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className='flex justify-center pt-3'>
        {remainingEvents >= 1 ? (
          <button
            type='button'
            className='inline-flex items-center rounded-lg border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={() => handleClick()}
          >
            See {remainingEvents >= 3 ? remainingEvents - 3 : null} more
          </button>
        ) : null}
      </div>
    </>
  );
}
