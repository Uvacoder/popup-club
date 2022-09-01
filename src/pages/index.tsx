import type { NextPage } from "next";
import Head from "next/head";
import Events from "../components/events";
import Nav from "../components/Nav";
import Working from "../components/working";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

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
        <Working />
        <Events />
      </main>
    </>
  );
};

export default Home;
