import type { NextPage } from 'next';
import Head from 'next/head';
import Events from '../components/events';
import Nav from '../components/Nav';
import AllPopups from '../components/allPopups';
import { trpc } from '../utils/trpc';
import { useState } from 'react';
import { Event, Location, Popup, Tags } from '../types/popup';
import { z } from 'zod';

const Home: NextPage = () => {
  const rawlocations: Location[] = trpc
    .useQuery(['location.getLocations'])
    .data?.map((location) => {
      return {
        ...location,
        mapsUrl: location.mapsUrl,
        events: rawevents?.filter((event) => event.locationid === location.id),
      };
    });

  const rawevents: Event[] = trpc
    .useQuery(['event.getEvents'])
    .data?.map((event) => {
      return {
        ...event,
        location: rawlocations?.find(
          (location) => location.id.toString() === event.locationId
        ),
        popup: rawpopups?.find(
          (popup) => popup.id?.toString() === event.popupId
        ),
      };
    });

  const rawpopups: Popup[] = trpc
    .useQuery(['popup.getPopups'])
    .data?.map((popup) => {
      return {
        ...popup,
        // tags: trpc.useQuery(['tags.getTags', { popupId: popup.id }]).data,
        links: {
          imageUrl: popup.imageUrl,
          instagram: popup.instagram,
          facebook: popup.facebook,
          twitter: popup.twitter,
          website: popup.website,
          youtube: popup.youtube,
        },

        events: rawevents
          ?.filter((event) => event.popupId === popup.id)
          .sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          }),
      };
    });

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
        {/* <div>
          I like
          {
            trpc.useQuery([
              'tags.getTags',
              { popupId: 'cl8yxxwg90000ve40fjxgq181' },
            ]).data?.name
          }
        </div> */}
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {rawpopups?.map((popup) => (
            <AllPopups popup={popup} key={popup.id} />
          ))}
        </ul>

        <Events popups={rawpopups} />
      </main>
    </>
  );
};

export default Home;
