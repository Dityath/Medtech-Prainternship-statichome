import Navbar from "../components/navbar";
import HomeSecond from "../components/home/HomeSecond";
import HomeFirst from "../components/home/HomeFirst";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeFirst />
      <HomeSecond />
      <div className="pb-56"></div>
    </>
  );
}
