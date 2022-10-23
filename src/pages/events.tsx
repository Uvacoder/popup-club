import type { NextPage } from 'next';
import Head from 'next/head';
import Events from '../components/events';
import Nav from '../components/Nav';
import { trpc } from '../utils/trpc';
import { Popup } from '../types/popup';

const EventsPage: NextPage = () => {
  const rawpopups = trpc.popups.getAllPopups.useQuery().data;

  return (
    <>
      <Head>
        <title>Popup Club</title>
        <meta
          name='description'
          content='Popup club - The latest and greatest'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main
        className='
      mx-auto max-w-7xl pb-32 sm:px-6 lg:px-8'
      >
        <div className='pt-6'>All Events:</div>
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {rawpopups?.map((popup) => (
            <Events popup={popup as unknown as Popup} key={popup.id} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default EventsPage;
