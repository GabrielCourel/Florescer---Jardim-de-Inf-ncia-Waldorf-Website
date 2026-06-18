import { useEffect } from 'react';
import style from "./Festas.module.css"
import fogueira from "../assets/images/festalanterna.jpeg"
import fogueira2 from "../assets/images/festalanterna2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Festas () 
{

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: false,
        });
    }, []);

    return (
        <div>
            <div className={style.divPrincipal}>
            
                {/* Div para imagem de fundo da home */}
                <div className={style.fundoHome}>
                    <img src={fogueira2} className={style.divImagem}/>
            
                    {/* Div para o texto da foto */}
                    <div className={style.textoFoto}>
                        <p  
                            className={`${style.degrade} ${style.paragrafo}`}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="350"
                        >
                            Conheça nossas festas
                        </p>
                    </div>
                </div>
            </div>

            <div className={style.abaixoDaFoto}>
                {/* SVG para curvatura abaixo da foto */}
                <svg
                    viewBox="0 0 1440 176" 
                    preserveAspectRatio="none"      
                    className={style.svgAbaixo}
                >
                    <path d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" className="fill-rosa-pastel"/>
                </svg>
            </div>
        </div>
    )
}