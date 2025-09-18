import pincelada from "./assets/fundos/pincelada.png"
import pincel from "./assets/fundos/pincel.png"
import florescerJardim from "./assets/logos/florescer-jardim.png"
import florescer from "./assets/logos/florescer.png"
import logoCompleta from "./assets/logos/logo-completa.png"
import logo from "./assets/logos/logo.png"
import header from "./assets/fundos/header.png"
import headerDebaixo from "./assets/fundos/header debaixo.png"


function Navbar ()
{
    return(
        
        <div className="t-0 md:h-44 flex items-center relative">

            {/* navbar background  // Define a área de desenho do SVG  //Permite que o SVG estique para preencher o container */}
            <svg                   viewBox="0 0 1440 176"              preserveAspectRatio="none" className="w-full h-90 absolute -z-20">
                <path d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" className="fill-rosa-quase"/>
            </svg>

            {/* logo Florescer */}
            <div className="ml-4 flex flex-col justify-center items-center">
                <img src={logo} className="h-26 hover:scale-110 duration-300 cursor-pointer" />
                <img src={florescerJardim} className="h-13" />
            </div>

            <div className="flex items-center gap-10 mx-auto">

                {/* tópico escola */}
                <div className="relative flex justify-center items-center cursor-pointer group">
                    <img src={pincelada} className="h-16 w-60" />
                    <div className="absolute z-10 flex justify-center items-center font-Waldorf1 text-2xl text-rosa-quase group-hover:text-white group-hover:scale-110 duration-400 transition-all ease-in-out">nossa escola</div>
                </div>
                
                {/* tópico ensino */}
                <div className="relative flex justify-center items-center cursor-pointer group">
                    <img src={pincelada} className="h-16 w-60" />
                    <div className="absolute z-10 flex justify-center items-center font-Waldorf1 text-2xl text-rosa-quase group-hover:text-white group-hover:scale-110 duration-400 transition-all ease-in-out">ensino</div>
                </div>

                {/* tópico festas */}
                <div className="relative flex justify-center items-center cursor-pointer group duration-300">
                    <img src={pincelada} className="h-16 w-60" />
                    <div className="absolute z-10 flex justify-center items-center font-Waldorf1 text-2xl text-rosa-quase group-hover:text-white group-hover:scale-110 duration-400 transition-all ease-in-out">festas</div>
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