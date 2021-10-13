import { Component } from "react";
import { Button, Image, Stack, Tooltip } from "@chakra-ui/react";
import Slider from "react-slick";

export default class HomeSecond extends Component {
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
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
      <div className="w-full mt-36 px-24 mb-56 flex justify-between">
        <div className="ml-20 container w-96 h-96 shadow-2xl rounded-xl overflow-hidden">
          <Slider ref={(c) => (this.slider = c)} {...firstSlider}>
            <div>
              <Image src="/images/slider/slider1.png" />
            </div>
            <div>
              <Image src="/images/slider/slider1.png" />
            </div>
          </Slider>
        </div>
        <div className="w-1/2 text-right font-inter">
          <h3 className="text-5xl">Kampus impian berada di depan mata</h3>
          <p className="my-10">
            Telah membantu jutaan alumni dalam masuk universitas yang diingini
            pembangunan lorem lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse varius enim in eros elementum tristique
          </p>
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
      </div>
    );
  }
}
