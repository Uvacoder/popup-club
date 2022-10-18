/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Popup } from '../types/popup';
import Image from 'next/image';
import UpcomingEvents from './upcomingEvents';
import SocialMedia from './socialMedia';

export default function PopupModal({
  isShown,
  setIsShown,
  popup,
}: {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  popup: Popup;
}) {
  console.log(popup);
  return (
    <Transition.Root show={isShown} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setIsShown}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-700 bg-opacity-25 transition-opacity backdrop-blur-sm' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                <div className='flex absolute right-4 top-2 space-x-2'>
                  <SocialMedia links={popup.links} showAll={false} />
                </div>
                <div>
                  <div className='mx-auto flex items-center justify-center rounded-full'>
                    <Image
                      key={popup.id}
                      src={popup.links.imageUrl || '/hotdog.jpg'}
                      alt='Popup logo'
                      height={125}
                      width={125}
                      className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl font-medium leading-6 text-gray-900'
                    >
                      {popup.name}
                    </Dialog.Title>
                    <div className='mt-1'>
                      {/* TODO: Add a field for a US state to popup properties */}
                      <p className='text-sm text-gray-500 pb-5'>
                        {popup.basedIn}, FL
                      </p>

                      <UpcomingEvents popup={popup} events={popup.events} />
                    </div>
                  </div>
                </div>

                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm'
                    onClick={() => setIsShown(false)}
                  >
                    View Popup
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
