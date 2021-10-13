import Navbar from "../components/navbar";
import HomeSecond from "../components/home/HomeSecond";
import HomeFirst from "../components/home/HomeFirst";
import HomeThird from "../components/home/HomeThird";
import HomeFourth from "../components/home/HomeFourth";
import HomeFifth from "../components/home/HomeFifth";
import Footer from "../components/footer";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Navbar />
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
      <HomeFourth />
      <HomeFifth />
      <Footer />
    </>
  );
}
