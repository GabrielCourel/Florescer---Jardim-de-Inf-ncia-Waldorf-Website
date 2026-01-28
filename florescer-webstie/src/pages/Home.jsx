import { useEffect } from 'react';
import style from "./Home.module.css"
import caminhando from "../assets/images/caminhando2.jpeg"
import caminhando2 from "../assets/images/caminhando.jpeg"
import novelo from "../assets/images/novelo.jpeg"
import corda from "../assets/images/corda.jpeg"
import aquarela from "../assets/images/aquarela.jpeg"
import olhando from "../assets/images/olhando.jpeg"
import aquarela1 from "../assets/fundos/aquarela1 (2).png"
import gotas from "../assets/fundos/gotas.png"
import Typewriter from 'typewriter-effect'
import { BiSolidDoorOpen } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home () 
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
                    <img src={caminhando2} className={style.divImagem}/>
                    <img src={caminhando} className={`${style.divImagem} meio:hidden`}/>
                    <div className={style.fundoRoxo}></div>

                    {/* Div para o texto da foto */}
                    <div className={style.textoFoto}>
                        <p  
                            className={`${style.degrade} ${style.paragrafo}`}
                            data-aos="fade-up"
                            data-aos-duration="1400"
                        >
                            A nossa mais elevada tarefa deve ser formar seres humanos livres que sejam capazes de, por si mesmos, encontrar propósito e direção para suas vidas
                        </p>
                        <p  
                            className={`${style.degrade} ${style.mencao}`}
                            data-aos="fade-up"
                            data-aos-duration="1400"
                            data-aos-delay="350"
                        >
                            - Rudolf Steiner
                        </p>
                    </div>
                </div>
            </div>    
            
            {/* Div para o conteúdo abaixo da foto */}
            <div className={style.abaixoDaFoto}>
                {/* SVG para curvatura abaixo da foto */}
                <svg
                    viewBox="0 0 1440 176" 
                    preserveAspectRatio="none"      
                    className={style.svgAbaixo}
                >
                    <path d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" className="fill-rosa-pastel"/>
                </svg>

                <div className={style.abaixo}>

                    <div className={`${style.divUmTres} tablet:flex-row!`}>
                        <p  
                            className={style.textoUmTres}
                            data-aos="fade-up-right"
                        >
                            Há mais de 100 anos, a Pedagogia Waldorf prega aquilo que se tornou essencial nos dias de hoje: o desenvolvimento de inteligência emocional, pensamento crítico e autonomia. Em um mundo cada vez mais digital e acelerado, nossa abordagem se destaca por oferecer a resposta que os tempos atuais exigem
                        </p>

                        <div className={style.fotoUm}>
                            <img src={novelo} className={style.padrao} data-aos="fade-left"/>
                        </div>
                    </div>

                    <div className={style.divDois}>

                        <div className={style.fotosDois}>
                            <img src={corda} className={`${style.padrao} rounded-br-[4em]`} data-aos="fade-right"/>
                        </div>

                        <p  
                            className={style.textoDois}
                            data-aos="fade-up"
                        >
                            Educar para o futuro é, antes de tudo, fortalecer o humano
                        </p>

                        <div className={`${style.fotosDois} hidden foto:block`}>
                            <img src={olhando} className={`${style.padrao} rounded-tl-[4em]`} data-aos="fade-left"/>
                        </div>
            
                    </div>

                    <div className={`${style.divUmTres} tablet:flex-row-reverse!`}>
                        <p  
                            className={style.textoUmTres}
                            data-aos="fade-up-left"
                        >
                            Aqui, voltamos o olhar para o potencial integral da criança, cultivando o pensar, o sentir e o querer na medida certa para cada idade, a fim de formar indivíduos criativos, resilientes e éticos, capazes de navegar a complexidade do mundo com equilíbrio e propósito
                        </p>

                        <div className={style.fotoTres}>
                            <img src={aquarela} className={style.padrao} data-aos="fade-right"/>
                        </div>
                    </div>

                    <div className={style.divQuatro}>
                        <div    
                            className={style.textoQuatro}
                            data-aos="fade-right"
                        >
                            <span>
                                Venha conhecer uma educação que respeita o tempo da infância para formar seres humanos {" "}
                                <Typewriter
                                    options=
                                    {{
                                        strings: ['críticos', 'autônomos', 'equilibrados', 'resilientes'],
                                        autoStart: true,
                                        loop: true,
                                        cursor: "",
                                        delay: 50,
                                        deleteSpeed: 50,
                                        pauseFor: 1750,
                                    }}
                                />
                            </span>
                        </div>

                        <div data-aos="fade-left" className='flex justify-center items-center'>
                            <button 
                                className={style.botao}
                            >
                                <BiSolidDoorOpen />
                                AGENDE SUA VISITA
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Home;