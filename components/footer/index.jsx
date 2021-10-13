import Iframe from "react-iframe";
import { Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer className="h-96 w-full bg-gray-800 font-inter flex items-center justify-between px-24">
      <div className="flex gap-8">
        <div>
          <Image src="/images/footer/logo-small.png" />
        </div>
        <div className="w-2/4 text-white">
          <h3 className="text-2xl font-bold mb-1">MechTech Indonesia</h3>
          <p className="text-justify">
            MechTech Indonesia adalah sebuah startup pelatihan software teknik
            bagi mahasiswa teknik untuk mempersiapkan diri menghadapi dunia
            kerja di era revolusi industri 4.0 dengan metode pelatihan khusus
            berbentuk “Project Based Learning”
          </p>
        </div>
      </div>
      <div className="w-3/4 overflow-hidden rounded-2xl">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253292.42716058585!2d112.57259700215688!3d-7.27559793655625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Surabaya%20City%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1634141740211!5m2!1sen!2sid"
          className="w-full"
          height="250"
          styles={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
