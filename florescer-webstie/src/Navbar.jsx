import pincelada from "./assets/fundos/pincelada.png"
import pincel from "./assets/fundos/pincel.png"
import florescerJardim from "./assets/logos/florescer-jardim.png"
import florescer from "./assets/logos/florescer.png"
import logoCompleta from "./assets/logos/logo-completa.png"
import logo from "./assets/logos/logo.png"
import header from "./assets/fundos/header.png"
import headerDebaixo from "./assets/fundos/header debaixo.png"
import { useState } from "react"

function Navbar ()
{

    //useStates para abrir e fechar os modais dos tópicos
    const [escolaOpen, setEscolaOpen] = useState (false);
    const [ensinoOpen, setEnsinoOpen] = useState (false);
    const [festasOpen, setFestasOpen] = useState (false);

    return(
        
        <div className="t-0 md:h-44 flex items-center relative">

            {/* navbar background  // Define a área de desenho do SVG  //Permite que o SVG estique para preencher o container */}
            <svg                   viewBox="0 0 1440 176"              preserveAspectRatio="none" className="w-full h-90 absolute -z-20">
                <path d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" className="fill-rosa-quase"/>
            </svg>

            {/* logo Florescer */}
            <div className="ml-4 flex flex-col justify-center items-center">
                <img src={logo} className="h-26 hover:scale-110 duration-300 cursor-pointer" />
                <img src={florescerJardim} className="h-13 cursor-pointer" />
            </div>

            <div className="flex items-center gap-10 mx-auto">

                {/* tópico escola */}
                <div 
                    className={`relative h-20 flex justify-center items-center group/nav`}
                    onMouseEnter={ () => setEscolaOpen (true) }
                    onMouseLeave={ () => setEscolaOpen (false) }
                >
                    <img src={pincelada} className="h-16 w-60 group-hover/nav:scale-105 transtition-all duration-400 cursor-pointer" />
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
                    className={`relative h-20 flex justify-center items-center group/nav`}
                    onMouseEnter={ () => setEnsinoOpen (true) }
                    onMouseLeave={ () => setEnsinoOpen (false) }
                >
                    <img src={pincelada} className="h-16 w-60 cursor-pointer group-hover/nav:scale-105 transition-all duration-400"/>
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
                    className={`relative h-20 flex justify-center items-center group/nav`}
                    onMouseEnter={ () => setFestasOpen (true) }
                    onMouseLeave={ () => setFestasOpen (false) }
                >
                    <img src={pincelada} className="h-16 w-60 cursor-pointer group-hover/nav:scale-105 transition-all duration-400" />
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
                <div className="relative flex justify-center items-center cursor-pointer group">
                    <img src={pincelada} className="h-16 w-60" />
                    <div className="absolute z-10 flex justify-center items-center font-Waldorf1 text-2xl text-rosa-quase group-hover:text-white group-hover:scale-110 duration-400 transition-all ease-in-out">contato</div>
                </div>

            </div>

        </div>
    )
}
export default Navbar;