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
        <title>MedTech Edu</title>
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
