import florescer2 from "../assets/logos/florescer2.png"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer ()
{
    return (
        <div className="-mt-10">

            <div className="relative bottom-0 z-10">

                {/* SVG para formato do footer */}
                <svg
                    viewBox="0 0 1440 176"          
                    preserveAspectRatio="none"
                    className="rotate-180 h-34 w-full"
                >
                    <path d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" className="fill-roxo-quase"/>
                </svg>

                {/* Div para guardar o conteúdo */}
                <div className="bg-roxo-quase relative z-20 w-full h-24 -mt-24">

                    <div className="flex justify-center items-center mx-8 my-2 h-full">

                        <div className="flex flex-col justify-center items-center">

                            <div className="flex justify-center items-center gap-3 text-rosa-pastel text-4xl">
                                <img src={florescer2} className="w-30" />
                                <p> - </p>
                                <FaFacebookSquare className="hover:scale-110 hover:cursor-pointer transition-all duration-300"/>
                                <FaInstagram className="hover:scale-110 hover:cursor-pointer transition-all duration-300"/>                                
                                <FaWhatsapp className="hover:scale-110 hover:cursor-pointer transition-all duration-300"/>
                            </div>

                            <div className="flex items-center justify-center gap-1 h-10 text-rosa-pastel text-xs">
                                <p>Copyright</p>
                                <FaRegCopyright />
                                <p>2026 Florescer | Todos os direitos reservados</p>
                            </div>
                            <p className=" text-rosa-pastel text-xs -translate-y-2">Criado por Gabriel Gomes Courel</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}