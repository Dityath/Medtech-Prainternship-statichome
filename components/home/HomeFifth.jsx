import { Input, Button, Image } from "@chakra-ui/react";

const HomeFifth = () => {
  return (
    <>
      <section className="px-24 mt-80 mb-20">
        <div className="bg-red-900 w-full flex relative rounded-xl">
          <div className="absolute bottom-0 right-14">
            <Image src="/images/home5/sma.png" />
          </div>
          <div className="bg-red-600 w-2/3 p-10 text-white rounded-xl font-inter">
            <h3 className="text-4xl font-bold">
              Mulai Bangun Masa Depanmu <br /> Ciptakan Peluangmu
            </h3>
            <p className="mt-5 w-2/4">
              Mulai masa depanmu dengan berlangganan email dari kami, sehingga
              kami dapat mengingatkan anda ketika ada diskon
            </p>
            <div className="flex gap-4 mt-10">
              <Input
                colorScheme="red"
                textColor="red.800"
                variant="filled"
                type="email"
                placeholder="Email-mu"
                _focus={{ boxShadow: "white" }}
                width="40%"
              />
              <Button
                colorScheme="red"
                bgColor="white"
                _hover={{ opacity: 0.8 }}
                variant="outline"
                _focus={{ boxShadow: "white" }}
              >
                Mulai Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFifth;
