import Carousel from "../components/Carousel"
import parque from "../assets/images/parque.jpeg"
import parque2 from "../assets/images/parque2.jpeg"
import parque3 from "../assets/images/parque3.jpeg"
import style from "./Contato.module.css"
import fachada from "../assets/images/fachada.jpeg"
import { FaWhatsapp } from "react-icons/fa6";

export default function Contato () 
{

    const slides = [ fachada, parque, parque2, parque3 ]

    return (
        <div>
            <div className={style.divPrincipal}>

                {/* Div para a foto da fachada */}
                <div className="relative w-full h-100 -mt-10 overflow-hidden"> {/* fundoHome */}

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

                </div>

            </div>
        </div>
    )
}