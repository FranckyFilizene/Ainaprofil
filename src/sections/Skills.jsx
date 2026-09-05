import { motion } from "motion/react";
import skills from "../data/skills.js";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const categoryVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
     <section
      id="skills"
      className="bg-[#000000] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= TITRE ================= */}

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#412D15]">
            Mes compétences
          </p>

          <h2 className="text-3xl font-bold text-[#E1DCC9] sm:text-4xl lg:text-5xl">
            Technologies & outils
          </h2>

          <p className="mt-4 max-w-2xl text-[#E1DCC9]/70">
            Les technologies et outils que j'utilise pour concevoir
            des applications modernes et performantes.
          </p>
        </div>

        {/* ================= CATÉGORIES ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {skills.map((category) => (
            <motion.div
              key={category.id}
              variants={categoryVariants}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-[#412D15] bg-[#1F150C] p-4 transition-colors duration-300 hover:border-[#E1DCC9]/30"
            >

              {/* Nom de la catégorie */}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#E1DCC9]">
                  {category.name}
                </h3>

                <div className="mt-3 h-px w-12 bg-[#412D15] transition-all duration-300 group-hover:w-20" />
              </div>

              {/* Technologies */}

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3"
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.id}
                      variants={skillVariants}
                      whileHover={{ y: -4 }}
                      className="group flex items-center gap-4 rounded-xl border border-[#412D15] bg-[#000000]/30 p-4 transition-colors duration-300 hover:border-[#E1DCC9]/40"
                    >
                      {/* Zone de l'icône */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#412D15] bg-[#1F150C] transition-all duration-300 group-hover:border-[#E1DCC9]/30">
                        <motion.div
                          initial={{
                            color: "#E1DCC9",
                            textShadow: "0 0 0px transparent",
                          }}
                          whileHover={{
                            scale: 1.15,
                            color: skill.color,
                            textShadow: `0 0 30px 12px ${skill.color}`,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <Icon className="h-6 w-6" />
                        </motion.div>
                      </div>

                      {/* Nom */}
                      <span className="text-sm font-medium text-[#E1DCC9]/80 transition-colors duration-300 group-hover:text-[#E1DCC9]">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;