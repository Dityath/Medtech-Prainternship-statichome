import Navbar from "../components/navbar";
import HomeSecond from "../components/home/HomeSecond";
import HomeFirst from "../components/home/HomeFirst";
import HomeThird from "../components/home/HomeThird";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
      <div className="pb-56"></div>
    </>
  );
}
