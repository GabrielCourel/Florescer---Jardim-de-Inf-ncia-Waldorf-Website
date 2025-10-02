import pincelada from "./assets/fundos/pincelada.png"
import pincel from "./assets/fundos/pincel.png"
import florescerJardim from "./assets/logos/florescer-jardim.png"
import florescer from "./assets/logos/florescer.png"
import logoCompleta from "./assets/logos/logo-completa.png"
import logo from "./assets/logos/logo.png"
import header from "./assets/fundos/header.png"
import headerDebaixo from "./assets/fundos/header debaixo.png"
import fundoMobile from "./assets/fundos/fundo-mobile.png"
import { Slant as Hamburger } from 'hamburger-react'
import { useState } from "react"

function Navbar ()
{

    //useStates para abrir e fechar os modais dos tópicos
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [escolaOpen, setEscolaOpen] = useState (false);
    const [ensinoOpen, setEnsinoOpen] = useState (false);
    const [festasOpen, setFestasOpen] = useState (false);

    return(
        
        <div className="relative t-0 h-20 tablet:flex meio:flex laptop:hidden meio:h-26 note:h-44 note:flex">

            {/* navbar background  // Define a área de desenho do SVG  //Permite que o SVG estique para preencher o container */}
            <svg                   viewBox="0 0 1440 176"              preserveAspectRatio="none" className="w-full absolute -z-20 h-24 tablet:h-36 note:h-58">
                <path d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" className="fill-rosa-quase"/>
            </svg>

            {/* logo Florescer */}
            <div className="mx-3 flex justify-between items-center tablet:w-full tablet:mx-6 tablet:my-auto meio:w-auto meio:mx-0 meio:ml-2 note:ml-4">
                
                <div className="contents justify-between items-center tablet:flex tablet:justify-start note:flex-col note:justify-start">
                    <img src={logo} className="hover:scale-110 duration-300 cursor-pointer  h-13 my-3 tablet:h-20 laptop:ml-0 laptop:my-0 note:h-26" />
                    <img src={florescerJardim} className="h-full w-40 tablet:h-15 tablet:w-60 note:h-13 cursor-pointer" />
                </div>
                
                <div className="z-100 tablet:scale-160 meio:hidden">
                    <Hamburger color="#A2236A" size={22} duration={0.6} toggled={hamburgerOpen} toggle={setHamburgerOpen}/>           
                </div>
            </div>

            <div className="flex items-center mx-auto meio:gap-4 note:gap-10">

                {/* tópico escola */}
                <div 
                    className={`hidden relative h-20 justify-center items-center group/nav meio:flex`}
                    onMouseEnter={ () => setEscolaOpen (true) }
                    onMouseLeave={ () => setEscolaOpen (false) }
                >
                    <img src={pincelada} className="cursor-pointer group-hover/nav:scale-105 transition-all duration-400 meio:w-30 meio:h-12 note:h-16 note:w-60" />
                    <div className="absolute z-10 flex justify-center items-center font-Waldorf1 text-2xl text-rosa-quase group-hover/nav:text-white duration-400 transition-all ease-in-out cursor-pointer">
                        <span> nossa escola </span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={3} // Aumenta a espessura da seta
                            stroke="currentColor" 
                            className={`ml-1 w-6 h-6 transition-transform duration-400 ${ escolaOpen ? "rotate-180" : "" }`}>
                            <path strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                        {/* modal controlado por useState */}
                        <div className={`absolute min-w-63 max-w-fit h-fit p-6 bg-roxo-escuro rounded-xl text-gray-300 text-lg font-Waldorf2 transition-all flex flex-col items-start gap-2 cursor-default ${ escolaOpen ? "opacity-100 translate-y-24 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">A história da Florescer</p>
                                <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-400 ease-in-out transform-gpu"></div>   
                            </div>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">A pedagogia Waldorf</p>
                                <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-400 ease-in-out transform-gpu"></div>   
                            </div>
                        </div>

                    </div>
                </div>
                
                {/* tópico ensino */}
                <div 
                    className={`hidden relative h-20 note:flex justify-center items-center group/nav meio:flex`}
                    onMouseEnter={ () => setEnsinoOpen (true) }
                    onMouseLeave={ () => setEnsinoOpen (false) }
                >
                    <img src={pincelada} className="cursor-pointer group-hover/nav:scale-105 transition-all duration-400 meio:w-30 meio:h-12 note:h-16 note:w-60"/>
                    <div className="absolute z-10 flex justify-center items-center font-Waldorf1 text-2xl text-rosa-quase group-hover/nav:text-white group-hover:scale-110 duration-400 transition-all ease-in-out cursor-pointer">
                        <span>ensino</span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={3} 
                            stroke="currentColor" 
                            className={`ml-1 w-6 h-6 transition-transform duration-400 ${ ensinoOpen ? "rotate-180" : "" }`}>
                            <path strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                        {/* modal controlado por useState */}
                        <div className={`absolute min-w-63 max-w-fit h-fit p-6 bg-roxo-escuro rounded-xl text-gray-300 text-lg font-Waldorf2 transition-all flex flex-col items-start gap-2 cursor-default ${ ensinoOpen ? "opacity-100 translate-y-24 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">Jardim de infância</p>
                                <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-400 ease-in-out transform-gpu"></div>   
                            </div>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">Maternal</p>
                                <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-400 ease-in-out transform-gpu"></div>   
                            </div>
                        </div>

                    </div>
                </div>

                {/* tópico festas */}
                <div 
                    className={`hidden relative h-20 note:flex justify-center items-center group/nav meio:flex`}
                    onMouseEnter={ () => setFestasOpen (true) }
                    onMouseLeave={ () => setFestasOpen (false) }
                >
                    <img src={pincelada} className="cursor-pointer group-hover/nav:scale-105 transition-all duration-400 meio:w-30 meio:h-12 note:h-16 note:w-60" />
                    <div className="absolute z-10 flex justify-center items-center font-Waldorf1 text-2xl text-rosa-quase group-hover/nav:text-white group-hover:scale-110 duration-400 transition-all ease-in-out cursor-pointer">
                        <span>festas</span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={3} 
                            stroke="currentColor" 
                            className={`ml-1 w-6 h-6 transition-transform duration-400 ${ festasOpen ? "rotate-180" : "" }`}>
                            <path strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                        {/* modal controlado por useState */}
                        <div className={`absolute min-w-63 max-w-fit h-fit p-6 bg-roxo-escuro rounded-xl text-gray-300 text-lg font-Waldorf2 transition-all flex flex-col items-start gap-2 cursor-default ${ festasOpen ? "opacity-100 translate-y-33.5 pointer-events-auto" : "opacity-0 translate-y-15 pointer-events-none"}`}>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">Festa da lanterna</p>
                                <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-400 ease-in-out transform-gpu"></div>   
                            </div>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">Festa da família </p>
                                <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-400 ease-in-out transform-gpu"></div>   
                            </div>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">Bazar de natal</p>
                                <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-400 ease-in-out transform-gpu"></div>   
                            </div>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">Festa junina</p>
                                <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-400 ease-in-out transform-gpu"></div>   
                            </div>
                        </div>
                    </div>               
                </div>

                {/* tópico contato */}
                <div className="hidden relative note:flex justify-center items-center cursor-pointer group meio:flex">
                    <img src={pincelada} className="h-16 w-60 group-hover:scale-105 transition-all duration-400 meio:w-30 meio:h-12 note:h-16 note:w-60" />
                    <div className="absolute z-10 flex justify-center items-center font-Waldorf1 text-2xl text-rosa-quase group-hover:text-white duration-400 transition-all ease-in-out">contato</div>
                </div>
            </div>

            {/* modal mobile e tablet para a navbar*/}
            <div className={`meio:hidden fixed top-0 min-h-screen w-full transition-all duration-600 ease-in-out ${ hamburgerOpen ? "-translate-x-0 opacity-100" : "translate-x-full opacity-0"} tablet:flex tablet:justify-center`}>
                <img src={fundoMobile} className="absolute min-h-screen w-full meio:hidden" alt="" />

                <div className="relative max-h-screen max-w-full flex flex-col items-center gap-6 my-16 mx-10 text-white tablet:my-auto tablet:flex-row meio:hidden">
                    
                    <div className="flex flex-col items-center gap-6 tablet:gap-3">

                        {/* tópico escola mobile */}
                        <div className="flex flex-col gap-2 border border-none rounded-xl backdrop-blur-3xl shadow-lg shadow-black/13 p-2 tablet:p-6 tablet:w-full">
                            <div className="flex justify-center">
                                <span className="text-xl font-Waldorf2">Nossa escola</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={3} 
                                    stroke="currentColor" 
                                    className="w-4 ml-2">
                                    <path strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className="text-lg text-rosa-pastel flex flex-col items-center gap-1">
                                <p>A história da florescer</p>
                                <p>A pedagogia Waldorf</p>
                            </div>
                        </div>

                        {/* tópico ensino mobile */}
                        <div className="w-48 flex flex-col gap-2 border border-none rounded-xl backdrop-blur-3xl shadow-lg shadow-black/13 p-2 tablet:p-6 tablet:w-full"> 
                            <div className="flex justify-center">
                                <span className="font-Waldorf2 text-xl">Ensino</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={3} 
                                    stroke="currentColor" 
                                    className="w-4 ml-2">
                                    <path strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className="text-lg text-rosa-pastel flex flex-col items-center gap-1">
                                <p>Jardim de infância</p>
                                <p>Maternal</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col items-center gap-6 tablet:gap-3">
                        {/* tópico festas mobile */}                    
                        <div className="w-48 flex flex-col gap-2 border border-none rounded-xl backdrop-blur-3xl shadow-lg shadow-black/13 p-2 tablet:p-6 tablet:w-full">
                            <div className="flex justify-center">
                                <span className="font-Waldorf2 text-xl">Festas</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={3}
                                    stroke="currentColor" 
                                    className="w-4 ml-2">
                                    <path strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className="text-lg text-rosa-pastel flex flex-col items-center gap-1">
                                <p>Festa da lanterna</p>
                                <p>Festa da família</p>
                                <p>bazar de natal</p>
                                <p>Festa junina</p>
                            </div>
                        </div>

                        {/* tópico contato mobile */}
                        <p className="w-48 font-Waldorf2 text-center text-xl border border-none rounded-xl backdrop-blur-3xl shadow-lg shadow-black/13 p-2 tablet:p-6">Contato</p>
                    </div>

                </div>
            </div>

        </div>
        
    )
}
export default Navbar;