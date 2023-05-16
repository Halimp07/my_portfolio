import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation, CardHomeAnimation } from '@/components/Animations';

const Home = () => {
  return (
    <Layouts>
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          Halim
        </motion.span>

        <motion.div {...ContentAnimation} className="relative order-2 flex w-1/2 justify-end md:order-1 md:w-1/3">
          <motion.div {...CardHomeAnimation} animate={{ rotate: -12 }} className="card-home absolute bg-[#06526D]" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-[#0C98CB]" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-[#BFDBF7]">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <Image src="/images/profile/my-profile.png" priority layout="intrinsic" width={500} height={500} alt="Halim Putra" className="relative" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div {...ContentAnimation} className="relative order-1 w-1/3 md:order-2">
          <h3 className="-mb-2 text-base font-normal">Hi! My name is</h3>
          <h1 className="-ml-1 mb-1 text-7xl font-bold text-[#BFDBF7]">Halim</h1>
          <h4 className="text-sm font-light transition-all duration-500 hover:text-[#BFDBF7]">Front-end Dev | UI/UX</h4>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default Home;
