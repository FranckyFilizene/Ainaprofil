import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function About() {
  const photoRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();

    tl.from(".photo-frame", {
      opacity: 0,
      x: -30,
      duration: 0.6,
      ease: "power3.out",
    });

    tl.from(
      ".photo-image",
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );

    gsap.to(photoRef.current, {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.1,
    });
  }, photoRef);

  return () => ctx.revert();
}, []);

  return (
    <div className="min-h-screen bg-[#000000]">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2">

        {/* Partie gauche */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#412D15]"
          >
            Bonjour, je suis
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight text-[#E1DCC9] sm:text-5xl lg:text-6xl"
          >
            Aina RAJAONARY
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-2xl font-semibold text-[#E1DCC9] sm:text-3xl"
          >
            Développeur Web
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-8 text-[#E1DCC9]/70 sm:text-lg"
          >
            Étudiant en informatique à l'École Nationale d'Informatique (ENI),
            passionné par le développement web et la création d'applications
            modernes, performantes et utiles.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-[#412D15] px-6 py-3 font-medium text-[#E1DCC9] transition-all duration-300 hover:bg-[#E1DCC9] hover:text-[#000000]"
            >
              Voir mes projets
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[#412D15] px-6 py-3 font-medium text-[#E1DCC9] transition-all duration-300 hover:bg-[#412D15]"
            >
              Télécharger mon CV
            </a>
          </motion.div>
        </motion.div>

        {/* Partie droite */}
        <div ref={photoRef} 
        className="relative mx-auto mt-8 w-full max-w-md md:mt-10 lg:mt-12 lg:justify-self-end">
          
          {/* Decoration superieur gauche */}
           <div className="absolute -left-3 -top-3 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-[#412D15] sm:-left-5 sm:-top-5 sm:h-20 sm:w-20" />

          {/* Décoration inférieure droite */}
           <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-[#412D15] sm:-bottom-5 sm:-right-5 sm:h-20 sm:w-20" />

          {/* Cercle décoratif */}
          <div className = "absolute -right-4 top-10 h-8 w-8 rounded-full bg-[#412D15]/40 blur-sm sm:-right-6 sm:h-12 sm:w-12"/>

          {/* Cadre décalé */}
            <div
              className="photo-frame absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-[#412D15] bg-[#1F150C]"
            />

            <div className="relative overflow-hidden rounded-2xl border border-[#412D15] bg-[#1F150C] p-2 shadow-2xl shadow-[#412D15]/50">
              <img
                src="/images/Aina.jpg"
                alt="Photo de profil"
                className="photo-image h-[420px] w-full rounded-xl object-cover object-top sm:h-[410px] lg:h-[470px]"
               />
            </div>
          </div>

      </div>
    </div>
  );
}

export default About;