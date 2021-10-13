import { useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeThird = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        width: "100%",
        opacity: 1,
      });
    }
    if (!inView) {
      animation.start({
        width: "0",
        opacity: 0,
      });
    }
  }, [animation, inView]);

  return (
    <>
      <Box
        bg="red.600"
        w="100%"
        h="600px"
        color="white"
        position="relative"
        marginTop="20"
        position="relative"
        marginBottom="20"
      >
        <div ref={ref} className="absolute left-0 -mt-20">
          <motion.svg
            width="975"
            height="167"
            viewBox="0 0 975 167"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={animation}
            transition={{ type: "spring", duration: 2.6, bounce: 0.1 }}
          >
            <path
              opacity="0.4"
              d="M935 -1.74846e-06C957.091 -7.8281e-07 975 17.9086 975 40L975 127C975 149.091 957.091 167 935 167L-7.2998e-06 167L0 -4.26186e-05L935 -1.74846e-06Z"
              fill="#EF4444"
            />
          </motion.svg>
        </div>
        <div className="absolute right-0 -bottom-20">
          <motion.svg
            width="975"
            height="167"
            viewBox="0 0 975 167"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={animation}
            transition={{ type: "spring", duration: 2.6, bounce: 0 }}
          >
            <path
              opacity="0.4"
              d="M40 167C17.9086 167 2.13558e-07 149.091 4.76995e-07 127L1.51446e-06 40C1.7779e-06 17.9086 17.9086 -4.55628e-05 40 -4.52994e-05L975 -3.41496e-05L975 167L40 167Z"
              fill="#991B1B"
            />
          </motion.svg>
        </div>
        <div className="mx-24 h-full flex justify-between items-center font-inter">
          <div>
            <motion.div
              className="w-60 rounded-xl overflow-hidden mb-5 shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <Image src="/images/home3/img1.png" />
            </motion.div>
            <p>Belajar Santai</p>
          </div>
          <div>
            <motion.div
              className="w-60 rounded-xl overflow-hidden mb-5 shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <Image src="/images/home3/img2.png" />
            </motion.div>
            <p>Mentor Berpengalaman</p>
          </div>
          <div>
            <motion.div
              className="w-60 rounded-xl overflow-hidden mb-5 shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <Image src="/images/home3/img3.png" />
            </motion.div>
            <p>Evektivitas Waktu</p>
          </div>
          <div>
            <motion.div
              className="w-60 rounded-xl overflow-hidden mb-5 shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <Image src="/images/home3/img4.png" />
            </motion.div>
            <p>Pilihan Offline atau Online</p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default HomeThird;
