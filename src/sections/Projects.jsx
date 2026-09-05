import { motion } from "motion/react";
import projects from "../data/projects.js";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#000000] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Titre */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#412D15]">
            Mes réalisations
          </p>

          <h2 className="text-3xl font-bold text-[#E1DCC9] sm:text-4xl lg:text-5xl">
            Mes projets
          </h2>

          <p className="mt-4 max-w-2xl text-[#E1DCC9]/70">
            Découvrez quelques-uns des projets que j'ai réalisés
            au cours de mon parcours.
          </p>
        </div>

        {/* Cartes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
             className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#412D15] bg-[#1F150C] transition-colors duration-300 hover:border-[#E1DCC9]/40"
            >

              {/* Image */}
             <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#000000]/0 transition-all duration-300 group-hover:bg-[#000000]/30" />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-1 flex-col">

                <h3 className="text-xl font-semibold text-[#E1DCC9]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#E1DCC9]/70">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#412D15] px-3 py-1 text-xs text-[#E1DCC9]/80"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Liens */}
               <div className="mt-auto flex gap-3 pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[#412D15] px-4 py-2 text-sm font-medium text-[#E1DCC9] transition hover:bg-[#412D15]"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#412D15] px-4 py-2 text-sm font-medium text-[#E1DCC9] transition hover:bg-[#E1DCC9] hover:text-[#000000]"
                  >
                    Voir le projet
                  </a>
                </div>

              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;