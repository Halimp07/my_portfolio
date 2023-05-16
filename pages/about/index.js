import Layouts from '@/components/Layouts';
import { Skills } from '@/data/Skills';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation } from '@/components/Animations';

const About = () => {
  return (
    <Layouts pageTitle=" | About">
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          ABOUT
        </motion.span>

        <motion.div {...ContentAnimation} className="relative order-2 flex w-3/4 flex-col items-end justify-end md:order-1 md:w-1/3">
          <div className="my-5 mr-2 text-left font-semibold text-[#BFDBF7]">My Skills</div>
          <div className="flex w-4/5 flex-wrap justify-evenly">
            {Skills.map((skill) => (
              <div key={skill.id} className="skills-icon">
                <svg className="p-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={skill.svg} />
                </svg>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...ContentAnimation} className="relative order-1 my-10 w-3/4 text-justify md:order-2 md:my-0 md:w-1/4">
          <p className="text-md font-light text-[#BFDBF7]">
            {
              `
              Hello! I am Muhamad Daniel Krisna Halim Putra, you can call me Halim, Daniel, Krisna or whatever you want. 
              An associate degree student in Informatics Engineering. Active in campus organization membership (HIMIT PENS). 
              I am a person who focuses on the field of Front-end Developer. As a Front-end Developer, 
              I love creating simple but beautiful websites with great user experience and I really love learning new things, 
              it keeps me at the forefront.
              `
            }
          </p>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default About;
