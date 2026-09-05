import { motion } from "motion/react";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#000000] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= TITRE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#412D15]">
            Contact
          </p>

          <h2 className="text-3xl font-bold text-[#E1DCC9] sm:text-4xl lg:text-5xl">
            Parlons de votre projet
          </h2>

          <p className="mt-4 max-w-2xl text-[#E1DCC9]/70">
            Une idée, un projet ou simplement envie d'échanger ?
            N'hésitez pas à me contacter.
          </p>
        </motion.div>

        {/* ================= CONTENU ================= */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* ================= INFORMATIONS ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#412D15] bg-[#1F150C] p-8"
          >
            <h3 className="text-2xl font-semibold text-[#E1DCC9]">
              Échangeons ensemble
            </h3>

            <p className="mt-4 max-w-md leading-7 text-[#E1DCC9]/70">
              Je suis toujours ouvert à discuter de nouveaux projets,
              d'opportunités ou de collaborations.
            </p>

            <div className="mt-8 space-y-5">

              {/* Email */}

             <div className="group flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#412D15] bg-[#000000]/30 transition-all duration-300 group-hover:border-[#E1DCC9]/30">
                  <MdEmail className="h-5 w-5 text-[#E1DCC9]" />
                </div>

                <div>
                  <p className="text-sm text-[#E1DCC9]/50">
                    Email
                  </p>

                  <p className="mt-1 text-[#E1DCC9]">
                    ainarajaonary37@gmail.com
                  </p>
                </div>
              </div>

              {/* Téléphone */}

              <div className="group flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#412D15] bg-[#000000]/30 transition-all duration-300 group-hover:border-[#E1DCC9]/30">
                  <MdPhone className="h-5 w-5 text-[#E1DCC9]" />
                </div>

                <div>
                  <p className="text-sm text-[#E1DCC9]/50">
                    Téléphone
                  </p>

                  <p className="mt-1 text-[#E1DCC9]">
                    +261 38 597 5744
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ================= FORMULAIRE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#412D15] bg-[#1F150C] p-8"
          >
            <form className="space-y-5">

              {/* Nom */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#E1DCC9]"
                >
                  Nom
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-lg border border-[#412D15] bg-[#000000]/40 px-4 py-3 text-[#E1DCC9] placeholder:text-[#E1DCC9]/30 outline-none transition-all duration-300 focus:border-[#E1DCC9]/60 focus:bg-[#000000]/60 focus:ring-1 focus:ring-[#E1DCC9]/10"
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#E1DCC9]"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                 className="w-full rounded-lg border border-[#412D15] bg-[#000000]/40 px-4 py-3 text-[#E1DCC9] placeholder:text-[#E1DCC9]/30 outline-none transition-all duration-300 focus:border-[#E1DCC9]/60 focus:bg-[#000000]/60 focus:ring-1 focus:ring-[#E1DCC9]/10"
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#E1DCC9]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Votre message..."
                  className="w-full resize-none rounded-lg border border-[#412D15] bg-[#000000]/40 px-4 py-3 text-[#E1DCC9] placeholder:text-[#E1DCC9]/30 outline-none transition-all duration-300 focus:border-[#E1DCC9]/60 focus:bg-[#000000]/60 focus:ring-1 focus:ring-[#E1DCC9]/10"
                />
              </div>

              {/* Bouton */}

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full rounded-lg bg-[#412D15] px-6 py-3 font-medium text-[#E1DCC9] transition-colors duration-300 hover:bg-[#E1DCC9] hover:text-[#000000]"
              >
                Envoyer le message
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
