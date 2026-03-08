import Carousel from "../components/Carousel"
import parque from "../assets/images/parque.jpeg"
import parque2 from "../assets/images/parque2.png"
import dentro1 from "../assets/images/dentro1.jpeg"
import dentro2 from "../assets/images/dentro2.png"
import style from "./Contato.module.css"
import fachada from "../assets/images/fachada.jpeg"
import GoogleMapsComponent from "../components/Map"

export default function Contato () 
{

    const slides = [ fachada, parque, parque2, dentro1, dentro2 ]

    return (
        <div className="h-full flex-1">
            <div className={style.divPrincipal}>

                {/* Div para as fotos da escola */}
                <div className={style.fotos}>

                    <Carousel autoSlide={true}>
                        {slides.map((s) => (
                            <img src={s} className={style.carrossel}/>
                        ))}
                    </Carousel>
                    
                </div>

                {/* SVG para a curvatura ao fim da foto */}
                <svg
                    viewBox="0 0 1440 176" 
                    preserveAspectRatio="none"      
                    className={style.svgAbaixo}
                >
                    <path 
                        d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" 
                        className="fill-rosa-pastel"
                    />
                </svg>

                {/* Conteúdo abaixo da foto */}
                <div className={style.abaixo}>

                    {/* Texto da localização */}
                    <div className={style.localização}>
                        <span className={style.degrade2}> 
                            Saiba onde estamos localizados, conheça nossos espaços e 
                        </span>

                        <div className={`${style.visita} shadow-black/40 shadow-lg rounded-lg my-3 p-1 bg-linear-to-r from-roxo-escuro to-rosa-medio group group-hover:cursor-pointer`}>
                            <button className={`${style.botao} p-3 rounded-sm group-hover:bg-linear-to-r bg-rosa-pastel group-hover:from-roxo-escuro group-hover:to-rosa-medio group-hover:cursor-pointer`}>
                                <a
                                    href="https://wa.me/551438155648"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`${style.estiloBotao} bg-clip-text text-transparent bg-linear-to-r from-roxo-escuro to-rosa-medio group-hover:text-rosa-pastel group-hover:cursor-pointer`}
                                >
                                    venha nos visitar
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