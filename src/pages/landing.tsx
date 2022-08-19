import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto flex flex-col items-center justify-start min-h-screen p-4 bg-slate-200'>
        <h1 className='text-4xl md:text-[5rem] leading-normal font-extrabold text-gray-700 text-center'>
          We love <span className='text-red-400'>popups</span>
        </h1>
        <p className='text-2xl text-gray-700'>Discover your favorite</p>
        <div className='grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3'></div>
        <div className='pt-6 text-2xl text-blue-500 flex justify-center items-center w-full'>
          HELLO FROM TRPC NOT REALLY
        </div>
      </main>
    </>
  );
};

export default Landing;
