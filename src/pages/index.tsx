import type { NextPage } from 'next';
import Head from 'next/head';
import Events from '../components/events';
import Nav from '../components/Nav';
import AllPopups from '../components/allPopups';
import { trpc } from '../utils/trpc';
import { useState } from 'react';
import { Event, Popup } from '../types/popup';

const Home: NextPage = () => {
  // const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  const rawevents: Event[] = trpc
    .useQuery(['event.getEvents'])
    .data?.map((event) => {
      return {
        id: event.id,
        popupId: event.popupId,
        name: event.name,
        date: event.date,
        location: event.location,
        popup: rawpopups?.find(
          (popup) => popup.id?.toString() === event.popupId
        ),
      };
    });

  const rawpopups: Popup[] = trpc
    .useQuery(['popup.getPopups'])
    .data?.map((popup) => {
      return {
        id: popup.id,
        name: popup.name,
        description: popup.description,
        basedIn: popup.basedIn,
        imageUrl: popup.imageUrl,
        categories: popup.categories,
        instagram: popup.instagram,
        isHot: popup.isHot,
        orderType: popup.orderType,
        Events: rawevents?.filter((event) => event.popupId === popup.id),
      };
    });

  // console.table(rawevents);
  // console.table(rawpopups);

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
      max-w-7xl mx-auto sm:px-6 lg:px-8'
      >
        <AllPopups popups={rawpopups} />

        <Events popups={rawpopups} />
      </main>
    </>
  );
};

export default Home;
