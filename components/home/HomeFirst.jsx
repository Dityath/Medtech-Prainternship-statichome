import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import Link from "next/link";

const HomeFirst = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [show, setShow] = React.useState(false);
  const handlePass = () => setShow(!show);

  return (
    <>
      <Box bg="red.600" w="100%" color="white" position="relative">
        <div className="absolute bottom-0 left-20">
          <motion.svg
            initial={{ height: 0 }}
            animate={{ height: 460 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
            width="207"
            viewBox="0 0 207 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M0 40C0 17.9086 17.9086 0 40 0H167C189.091 0 207 17.9086 207 40V462H0V40Z"
              fill="#991B1B"
            />
          </motion.svg>
        </div>
        <div className="absolute bottom-0 left-80">
          <motion.svg
            initial={{ height: 0 }}
            animate={{ height: 344 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
            width="207"
            viewBox="0 0 207 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M0 40C0 17.9086 17.9086 0 40 0H167C189.091 0 207 17.9086 207 40V346H0V40Z"
              fill="#991B1B"
            />
          </motion.svg>
        </div>
        <div className="absolute bottom-0 right-10">
          <motion.svg
            initial={{ height: 0 }}
            animate={{ height: 532 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
            width="207"
            viewBox="0 0 207 532"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M0 40C0 17.9086 17.9086 0 40 0H167C189.091 0 207 17.9086 207 40V532H0V40Z"
              fill="#111827"
            />
          </motion.svg>
        </div>
        <div className="font-inter flex px-24 justify-between pt-36 relative">
          <div className="mt-28">
            <h3 className="text-6xl font-bold">MechTech Edu</h3>
            <p className="mt-5 max-w-md leading-7">
              Lembaga terdepan dalam edukasi terkini dan pembangunan lorem lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique
            </p>
            <div className="flex gap-8 mt-8">
              <Button
                colorScheme="red"
                variant="outline"
                bg="white"
                _hover={{ bg: "#E2E8F0" }}
                _focus={{ boxShadow: "white" }}
                ref={btnRef}
                onClick={onOpen}
              >
                Mulai Belajar
              </Button>
              <Link href="/404">
                <Tooltip label="Laman belum tersedia">
                  <Button
                    colorScheme="whiteAlpha"
                    color="white"
                    variant="ghost"
                    _focus={{ boxShadow: "white" }}
                  >
                    Lihat Kelas
                  </Button>
                </Tooltip>
              </Link>
            </div>
          </div>
          <Image
            src="/images/cewek.png"
            boxSize="2xl"
            height="max-content"
            objectFit="scale-down"
          />
        </div>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _focus={{ boxShadow: "white" }} />
          <DrawerHeader>Silahkan masuk sebelum melanjutkan</DrawerHeader>

          <DrawerBody>
            <div className="flex gap-4 flex-col">
              <Input placeholder="Username" _focus={{ boxShadow: "white" }} />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  _focus={{ boxShadow: "white" }}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handlePass}
                    _focus={{ boxShadow: "white" }}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>
            <div className="text-sm mt-8 px-2">
              Sedikit catatan, berikut hanyalah contoh UI dari keseluruhan
              website. Saya tidak memiliki waktu untuk membuat sistem backend,
              copywriting, atau bahkan pages lainnya. Sehingga tolong sangat
              dimaklumi. Untuk Informasi selengkapnya silahkan tekan tombol
              masuk.
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              _focus={{ boxShadow: "white" }}
            >
              Cancel
            </Button>
            <Link href="/404">
              <Button colorScheme="red" _focus={{ boxShadow: "white" }}>
                Masuk
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HomeFirst;
