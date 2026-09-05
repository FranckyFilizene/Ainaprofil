import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaFacebook ,FaWhatsapp} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Footer = () => {
    return (
        <footer className="w-full bg-[#110c07] text-slate-400 border-t border-[#412D15]">

            <div className="w-[95%] mx-auto py-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="flex flex-col gap-3">

                        <h1 className="text-2xl font-bold tracking-tighter">
                            <span className="text-white">RJ</span>
                            <span className="text-[#412b11]">Aina</span>
                        </h1>

                        <p className="text-xs leading-relaxed max-w-xs">
                            Développeur passionné par la création d'applications modernes,
                            performantes et adaptées aux besoins réels.
                        </p>

                        {/* Réseaux sociaux */}
                        <div className="flex items-center gap-5 mt-2">

                            <a
                                href="https://www.facebook.com/aina.rajaonary.21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors duration-300"
                            >
                                <FaFacebook size={18} />
                            </a>

                            <a
                                href="https://wa.me/+261385975744"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-500 transition-colors duration-300"
                            >
                                <FaWhatsapp size={18} />
                            </a>

                            <a
                                href="https://github.com/aina-rajaonary"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors duration-300"
                            >
                                <BsGithub size={18} />
                            </a>

                        </div>

                    </div>


                    {/* ================= NAVIGATION ================= */}
                    <div className="flex flex-col gap-3">

                        <h2 className="text-lg text-white font-semibold">
                            Navigation
                        </h2>

                        <div className="flex flex-col gap-2 text-xs">

                            <a
                                href="#about"
                                className="hover:text-[#6d4b22] transition-colors duration-300"
                            >
                                Accueil
                            </a>

                            <a
                                href="#projects"
                                className="hover:text-[#6d4b22] transition-colors duration-300"
                            >
                                Projects
                            </a>

                            <a
                                href="#skills"
                                className="hover:text-[#6d4b22] transition-colors duration-300"
                            >
                                Skills
                            </a>

                            <a
                                href="#contact"
                                className="hover:text-[#6d4b22] transition-colors duration-300"
                            >
                                Contact
                            </a>

                        </div>

                    </div>


                    {/* ================= CONTACT ================= */}
                    <div className="flex flex-col gap-3">

                        <h2 className="text-lg text-white font-semibold">
                            Contact
                        </h2>

                        <div className="flex flex-col gap-2 text-xs">

                            <span className="flex items-center gap-2">
                                <CiLocationOn
                                    size={17}
                                    className="text-[#6d4b22]"
                                />
                                Toliara, Madagascar
                            </span>

                            <a
                                href="mailto:ainarajaonary37@gmail.com"
                                className="flex items-center gap-2 hover:text-[#6d4b22] transition-colors duration-300"
                            >
                                <MdEmail
                                    size={17}
                                    className="text-[#6d4b22]"
                                />
                                ainarajaonary37@gmail.com
                            </a>

                            <a
                                href="tel:+261385382860"
                                className="flex items-center gap-2 hover:text-[#6d4b22] transition-colors duration-300"
                            >
                                <BiPhone
                                    size={17}
                                    className="text-[#6d4b22]"
                                />
                                +261 38 597 5744
                            </a>

                        </div>

                    </div>

                </div>


                {/* ================= SÉPARATION ================= */}
                <div className="border-t border-slate-800 my-8"></div>


                {/* ================= BAS DU FOOTER ================= */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[10px]">

                    <p>
                        © 2025–2026 <span className="text-white">Aina RAJAONARY</span>.
                        Tous droits réservés.
                    </p>

                    <p className="text-slate-600">
                        Designed & Developed by
                        <span className="text-red-400 ml-1">
                            IzeflienDEV
                        </span>
                    </p>

                </div>

            </div>

        </footer>

    )
}

export default Footer
