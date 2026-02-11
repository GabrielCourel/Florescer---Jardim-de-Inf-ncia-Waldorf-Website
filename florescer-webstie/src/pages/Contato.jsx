import Carousel from "../components/Carousel"
import parque from "../assets/images/parque.jpeg"
import parque2 from "../assets/images/parque2.png"
import parque3 from "../assets/images/parque3.jpeg"
import dentro1 from "../assets/images/dentro1.jpeg"
import dentro2 from "../assets/images/dentro2.png"
import style from "./Contato.module.css"
import fachada from "../assets/images/fachada.jpeg"
import { FaWhatsapp } from "react-icons/fa6";
import GoogleMapsComponent from "../components/Map"

export default function Contato () 
{

    const slides = [ fachada, parque, parque2, dentro1, dentro2 ]

    return (
        <div className="h-full flex-1">
            <div className={style.divPrincipal}>

                {/* Div para as fotos da escola */}
                <div className="relative w-full h-100 -mt-10 overflow-hidden tablet:h-140 laptop:h-160 note:h-180 4k:h-220 grande:h-290"> {/* fundoHome */}

                    <Carousel autoSlide={true}>
                        {slides.map((s) => (
                            <img src={s} className="h-full w-full object-cover min-w-full shrink-0"/>
                        ))}
                    </Carousel>
                    
                </div>

                {/* SVG para a curvatura ao fim da foto */}
                <svg
                    viewBox="0 0 1440 176" 
                    preserveAspectRatio="none"      
                    className={style.svgAbaixo}
                >
                    <path d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" className="fill-rosa-pastel"/>
                </svg>

                {/* Conteúdo abaixo da foto */}
                <div className={style.abaixo}>

                    {/* Texto da localização */}
                    <div className="flex flex-col items-center justify-center text-center mx-14 my-10 font-quaseW text-xl font-bold">
                        <span className={style.degrade2}> Saiba onde estamos localizados, conheça nossos espaços e </span>

                        <div className="w-fit shadow-lg shadow-black/40 my-3 p-1 rounded-lg bg-linear-to-r from-roxo-escuro to-rosa-medio group group-hover:cursor-pointer transition-all duration-400">
                            <button className="p-3 flex h-full w-full items-center jusitfy-center rounded-sm bg-rosa-pastel group group-hover:bg-linear-to-r group-hover:from-roxo-escuro group-hover:to-rosa-medio group-hover:cursor-pointer transition-all duration-400">
                                <a
                                    href="https://wa.me/551438155648"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-linear-to-r from-roxo-escuro to-rosa-medio bg-clip-text font-bold text-transparent group-hover:text-rosa-pastel group-hover:cursor-pointer transition-all duration-400"
                                >
                                    venha nos conhecer
                                </a>
                            </button>
                        </div>

                        <GoogleMapsComponent />

                    </div>

                </div>

            </div>
        </div>
    )
}