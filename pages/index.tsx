import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Marketing,
  Investment,
  Dataquality,
  Funnelanalysis,
} from "../components";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex p-20 w-auto gap-4 flex-wrap">
        <div className=" flex flex-col gap-7">
          <Dataquality prog={89} />
          <div className="flex flex-row gap-7">
            <Marketing />
            <Investment />
            <Investment />
          </div>
        </div>
        <div>
          <Funnelanalysis></Funnelanalysis>
        </div>
      </main>
    </div>
  );
};

export default Home;
