import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { Projects } from '@/data/Projects';
import { withRouter } from 'next/router';
import { ContentAnimation } from '@/components/Animations';

const ProjectDetail = withRouter(
  ({
    router: {
      query: { id },
    },
  }) => {
    const getProject = Projects.find((project) => project.slug === id);

    return (
      <Layouts pageTitle=" | Works">
        <section className="relative flex w-full items-center justify-center py-40 md:h-screen">
          <span className="title-page">WORKS</span>

          <motion.div {...ContentAnimation} className="relative flex w-72 flex-col rounded-xl bg-[#BFDBF7] p-2 md:w-3/4 md:flex-row md:justify-between">
            {id != undefined ? (
              <>
                <div className="mb-3 w-full overflow-hidden rounded-lg md:mb-0 md:w-[480px]">
                  <div className="relative mb-[6px] h-44 w-full md:h-[294px]">
                    <Image src={`/images/projects/${getProject.img}.png`} priority layout="fill" alt={getProject.name} className="relative" />
                  </div>
                  <div className="flex w-full justify-between bg-[#022B3A] text-center font-semibold text-[#BFDBF7]">
                    <a href={getProject.demo} target="_blank" rel="noreferrer" className="w-[238px] rounded-bl-lg border-2 border-[#022B3A] py-1 transition-all duration-500 hover:bg-[#BFDBF7] hover:text-[#022B3A]">
                      <span>View Demo</span>
                    </a>
                    <div className="w-[5px] bg-[#BFDBF7]" />
                    <a href={getProject.sourceCode} target="_blank" rel="noreferrer" className="w-[238px] rounded-br-lg border-2 border-[#022B3A] py-1 transition-all duration-500 hover:bg-[#BFDBF7] hover:text-[#022B3A]">
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                <div className="h-2 w-full rounded-lg bg-[#022B3A] md:h-auto md:w-2" />

                <div className="mt-3 flex w-full flex-col justify-center overflow-hidden rounded-lg bg-[#022B3A] p-5 md:mt-0 md:w-[480px]">
                  <h1 className="relative mb-5 text-center text-4xl text-[#BFDBF7] md:text-5xl">{getProject.name}</h1>
                  <p className="relative text-justify">{getProject.description}</p>
                </div>
              </>
            ) : (
              ''
            )}
          </motion.div>
        </section>
      </Layouts>
    );
  }
);

export default ProjectDetail;
