import type { NextPage } from 'next';
import Head from 'next/head';
import Events from '../components/events';
import Nav from '../components/Nav';
import AllPopups from '../components/allPopups';
import { trpc } from '../utils/trpc';
import { useState } from 'react';
import { Event, Location, Popup, Tags } from '../types/popup';
import { z, ZodString } from 'zod';

const Home: NextPage = () => {
  const rawlocations = trpc.useQuery(['location.getLocations']).data;

  const rawevents = trpc.useQuery(['event.getEvents']).data?.map((event) => {
    return {
      ...event,
      location: rawlocations?.find(
        (location) => location.id === event.locationId
      ),
      popup: rawpopups?.find(
        (popup: { id: { toString: () => string } }) =>
          popup.id?.toString() === event.popupId
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
        isHot: popup.isHot,
        orderType: popup.orderType,
        links: {
          imageUrl: popup.imageUrl,
          instagram: popup.instagram,
          facebook: popup.facebook,
          twitter: popup.twitter,
          website: popup.website,
          youtube: popup.youtube,
        },
        events: rawevents
          ?.filter(
            (event: { popupId: string }) =>
              event.popupId === popup.id?.toString()
          )
          .sort(
            (
              a: { date: string | number | Date },
              b: { date: string | number | Date }
            ) => {
              return new Date(a.date).getTime() - new Date(b.date).getTime();
            }
          ),
      };
    });

  console.log(
    trpc.useQuery([
      'tags.getTagsByPopup',
      { popupId: 'cl8yxxwg90000ve40fjxgq181' },
    ])
  );

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
      max-w-7xl mx-auto sm:px-6 lg:px-8 pb-32'
      >
        {/* {rawtags.map((tag) => (
          <div key={tag.id}>
            <div className='pt-6'>{tag.name}:</div>
          </div>
        ))} */}

        <div className='pt-6'>All popups:</div>
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {rawpopups?.map((popup: Popup) => (
            <AllPopups popup={popup} key={popup.id} />
          ))}
        </ul>

        <Events popups={rawpopups} />
      </main>
    </>
  );
};

export default Home;
