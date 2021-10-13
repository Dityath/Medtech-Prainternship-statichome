import { Stack, Tooltip, Button, Image } from "@chakra-ui/react";
import { Component } from "react";
import Slider from "react-slick";

export default class HomeFourth extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const firstSlider = {
      dots: false,
      arrow: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
      <>
        <div className="flex px-24 pt-16 items-center">
          <div className="font-inter w-2/3">
            <h3 className="text-5xl">Tersedia berbagai pilihan kelas</h3>
            <p className="my-10 leading-7 text-gray-500">
              Lembaga terdepan dalam edukasi terkini dan pembangunan lorem lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique
            </p>
          </div>
          <Stack direction="row" spacing={4} justifyContent="end" width="100%">
            <Tooltip label="Foto Sebelum">
              <Button
                colorScheme="red"
                variant="ghost"
                height="fit-content"
                _focus={{ boxShadow: "white" }}
                onClick={this.previous}
              >
                <svg
                  width="95"
                  height="95"
                  viewBox="0 0 95 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.8608 47.4999L62.4546 67.0937L56.8575 72.6908L31.6667 47.4999L56.8575 22.3091L62.4546 27.9062L42.8608 47.4999Z"
                    fill="#2D3748"
                  />
                </svg>
              </Button>
            </Tooltip>
            <Tooltip label="Foto Selanjutnya">
              <Button
                colorScheme="red"
                variant="ghost"
                height="fit-content"
                _focus={{ boxShadow: "white" }}
                onClick={this.next}
              >
                <svg
                  width="95"
                  height="95"
                  viewBox="0 0 95 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.1389 47.4999L32.5451 27.9062L38.1422 22.3091L63.333 47.4999L38.1422 72.6908L32.5451 67.0937L52.1389 47.4999Z"
                    fill="#2D3748"
                  />
                </svg>
              </Button>
            </Tooltip>
          </Stack>
        </div>
        <div className="px-24 pb-20">
          <Slider ref={(c) => (this.slider = c)} {...firstSlider}>
            <div className="p-4">
              <div className="container rounded-lg shadow-lg p-5 font-inter">
                <div className="w-full rounded-xl overflow-hidden mb-10">
                  <Image src="/images/slider2/slider1.png" />
                </div>
                <h5 className="font-bold text-xl leading-7 text-gray-900">
                  Kelas Pembelajaran Mesin
                </h5>
                <p className="mt-5 text-gray-500">
                  Nantinya dalam kelas ini akan diajarkan materi lorem ipsum
                  color sit amet
                </p>
                <div className="text-center mt-32">
                  <Tooltip label="Laman belum tersedia">
                    <Button variant="outline">Lihat Selengkapnya</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="container rounded-lg shadow-lg p-5 font-inter">
                <div className="w-full rounded-xl overflow-hidden mb-10">
                  <Image src="/images/slider2/slider2.png" />
                </div>
                <h5 className="font-bold text-xl leading-7 text-gray-900">
                  Kelas Pembelajaran Mesin
                </h5>
                <p className="mt-5 text-gray-500">
                  Nantinya dalam kelas ini akan diajarkan materi lorem ipsum
                  color sit amet
                </p>
                <div className="text-center mt-32">
                  <Tooltip label="Laman belum tersedia">
                    <Button variant="outline">Lihat Selengkapnya</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="container rounded-lg shadow-lg p-5 font-inter">
                <div className="w-full rounded-xl overflow-hidden mb-10">
                  <Image src="/images/slider2/slider3.png" />
                </div>
                <h5 className="font-bold text-xl leading-7 text-gray-900">
                  Kelas Pembelajaran Mesin
                </h5>
                <p className="mt-5 text-gray-500">
                  Nantinya dalam kelas ini akan diajarkan materi lorem ipsum
                  color sit amet
                </p>
                <div className="text-center mt-32">
                  <Tooltip label="Laman belum tersedia">
                    <Button variant="outline">Lihat Selengkapnya</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="container rounded-lg shadow-lg p-5 font-inter">
                <div className="w-full rounded-xl overflow-hidden mb-10">
                  <Image src="/images/slider2/slider4.png" />
                </div>
                <h5 className="font-bold text-xl leading-7 text-gray-900">
                  Kelas Pembelajaran Mesin
                </h5>
                <p className="mt-5 text-gray-500">
                  Nantinya dalam kelas ini akan diajarkan materi lorem ipsum
                  color sit amet
                </p>
                <div className="text-center mt-32">
                  <Tooltip label="Laman belum tersedia">
                    <Button variant="outline">Lihat Selengkapnya</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="container rounded-lg shadow-lg p-5 font-inter">
                <div className="w-full rounded-xl overflow-hidden mb-10">
                  <Image src="/images/slider2/slider5.png" />
                </div>
                <h5 className="font-bold text-xl leading-7 text-gray-900">
                  Kelas Pembelajaran Mesin
                </h5>
                <p className="mt-5 text-gray-500">
                  Nantinya dalam kelas ini akan diajarkan materi lorem ipsum
                  color sit amet
                </p>
                <div className="text-center mt-32">
                  <Tooltip label="Laman belum tersedia">
                    <Button variant="outline">Lihat Selengkapnya</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
