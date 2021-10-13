import React, { useState, useEffect } from "react";
import {
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

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const handlePass = () => setShow(!show);

  const scrollDown = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollDown);
    return () => {
      window.removeEventListener("scroll", scrollDown);
    };
  }, []);

  return (
    <>
      <nav
        className={`transition duration-300 font-inter bg-white px-24 py-3 flex justify-between items-center fixed w-full z-50 ${
          navbar && "shadow-xl"
        } 2xl:px-28`}
      >
        <Image src="/images/logo-nav.png" width={133} height={29} alt="logo" />
        <div className="inline-flex gap-10 text-base items-center">
          <Link href="/">
            <a className="transition duration-200 hover:opacity-70 cursor-pointer">
              Home
            </a>
          </Link>
          <Link href="/404">
            <Tooltip label="Laman belum tersedia">
              <a className="transition duration-200 hover:opacity-70 cursor-pointer">
                Kelas
              </a>
            </Tooltip>
          </Link>
          <Link href="/404">
            <Tooltip label="Laman belum tersedia">
              <a className="transition duration-200 hover:opacity-70 cursor-pointer">
                Blog
              </a>
            </Tooltip>
          </Link>
          <Link href="/404">
            <Tooltip label="Laman belum tersedia">
              <a className="transition duration-200 hover:opacity-70 cursor-pointer">
                Hubungi Kami
              </a>
            </Tooltip>
          </Link>
          <Button
            colorScheme="blackAlpha"
            color="blackAlpha.700"
            variant="outline"
            _focus={{ boxShadow: "white" }}
            ref={btnRef}
            onClick={onOpen}
          >
            Mulai Belajar
          </Button>
        </div>
      </nav>
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

export default Navbar;
