import Link from 'next/link';
import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { Projects } from '@/data/Projects';
import { useEffect, useRef } from 'react';
import { ProjectCardAnimation, FadeAnimation } from '@/components/Animations';

const Works = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const scrollToLeft = () => (element.style.transform = `translateX(${-window.scrollY}px)`);

    window.addEventListener('scroll', scrollToLeft);
    return () => window.removeEventListener('scroll', scrollToLeft);
  }, []);

  return (
    <Layouts pageTitle=" | Works">
      <section className="relative flex h-[450vh] items-center justify-center">
        <motion.span {...FadeAnimation} className="title-page">
          WORKS
        </motion.span>

        <div className="fixed left-1/2 top-[30%] flex md:left-1/4" ref={ref}>
          {Projects.map((project) => (
            <div key={project.id}>
              <motion.div {...ProjectCardAnimation} className="mx-12 flex w-72 flex-col items-center justify-center rounded-md border-4 border-[#BFDBF7] bg-[#BFDBF7] p-[2px]">
                <Link href={`/works/${project.slug}`}>
                  <motion.a {...FadeAnimation} className="relative h-44 w-full overflow-hidden rounded-md bg-[#022B3A]">
                    <Image src={`/images/projects/${project.img}.png`} layout="fill" alt={project.name} className="relative transition-all duration-500 hover:scale-125" />
                  </motion.a>
                </Link>
                <div className="py-2 text-xl font-medium text-[#022B3A]">{project.name}</div>
                <div className="flex w-full justify-between px-3 pt-1 pb-4">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <span className="rounded-md border-2 border-[#022B3A] px-3 py-2 font-semibold text-[#022B3A] transition-all duration-500 hover:bg-[#022B3A] hover:text-[#BFDBF7]">View Demo</span>
                  </a>
                  <a href={project.sourceCode} target="_blank" rel="noreferrer">
                    <span className="rounded-md border-2 border-[#022B3A] px-1 py-2 font-semibold text-[#022B3A] transition-all duration-500 hover:bg-[#022B3A] hover:text-[#BFDBF7]">Source Code</span>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="fixed top-0 -right-1 h-screen w-1/12 bg-[#022B3A]" />
        <div className="fixed top-0 -left-1 hidden h-4/5 w-1/12 bg-[#022B3A] md:block" />

        <div className="fixed bottom-40 flex flex-col items-center">
          <span className="text-[#BFDBF7]">Scroll</span>
          <div className="absolute top-6 h-4 w-4 rotate-45 rounded border-b-4 border-r-4 border-[#E1E5F2]" />
          <div className="absolute top-6 h-7 w-7 rotate-45 rounded border-b-4 border-r-4 border-[#BFDBF7]" />
        </div>
      </section>
    </Layouts>
  );
};

export default Works;
