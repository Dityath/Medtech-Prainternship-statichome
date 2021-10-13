import { Button } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";

const Custom404 = () => {
  return (
    <div className="font-inter h-screen w-screen flex flex-col justify-center items-center">
      <Head>
        <title>404 tidak ditemukan</title>
      </Head>
      <h1 className="text-4xl font-bold">
        Hi! Website ini belum diselesaikan karena ada beberapa hal.
      </h1>
      <p className="mt-5 w-3/4 text-center">
        Saya telah mengupayakan untuk menambahkan beberapa pages namun tetap
        kalah dengan waktu. Sehingga saya membuat quotes, "Quality over
        Quantity"
      </p>
      <div className="mt-20">
        <Link href="/">
          <Button colorScheme="red" size="lg">
            Kembali ke home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
