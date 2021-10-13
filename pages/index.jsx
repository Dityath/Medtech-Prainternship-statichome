import Navbar from "../components/navbar";
import HomeSecond from "../components/home/HomeSecond";
import HomeFirst from "../components/home/HomeFirst";
import HomeThird from "../components/home/HomeThird";
import HomeFourth from "../components/home/HomeFourth";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
      <HomeFourth />
      <div className="pb-56"></div>
    </>
  );
}
