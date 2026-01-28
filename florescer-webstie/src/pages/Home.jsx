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
            <div className="flex flex-col justify-center items-center">
                {/* SVG para curvatura abaixo da foto */}
                <svg
                    viewBox="0 0 1440 176" 
                    preserveAspectRatio="none"      
                    className="relative -z-20 top-0 w-full rotate-180 h-30 -translate-y-22"
                >
                    <path d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" className="fill-rosa-pastel"/>
                </svg>

                <div className="bg-rosa-pastel max-w-full h-full -translate-y-34 overflow-x-hidden note:w-full">

                    <div className="flex flex-col tablet:flex-row meio:mx-20 4k:mx-40 grande:mx-60">
                        <p  
                            className="text-xl mx-8 font-quaseW text-justify hyphens-auto text-roxo-escuro tablet:text-2xl tablet:w-100 tablet:my-8 laptop:w-140 laptop:mx-0 laptop:mr-8 laptop:flex laptop:items-center note:text-3xl note:w-210 4k:text-4xl 4k:w-230 grande:text-5xl grande:w-300"
                            data-aos="fade-up-right"
                        >
                            Há mais de 100 anos, a Pedagogia Waldorf prega aquilo que se tornou essencial nos dias de hoje: o desenvolvimento de inteligência emocional, pensamento crítico e autonomia. Em um mundo cada vez mais digital e acelerado, nossa abordagem se destaca por oferecer a resposta que os tempos atuais exigem
                        </p>

                        <div className="w-80 h-80 my-8 mr-4 ml-auto rounded-tl-[4em] rounded-br-[4em] overflow-hidden note:w-90 note:h-90 grande:h-140 grande:w-140">
                            <img src={novelo} className="w-full h-full object-cover" data-aos="fade-left"/>
                        </div>
                    </div>

                    <div className="w-full my-8 mr-4 -translate-x-16 flex gap-8 tablet:translate-x-0 tablet:gap-12 note:my-12">

                        <div className="w-70 h-80 note:w-80 note:h-90 grande:h-140 grande:w-130">
                            <img src={corda} className="w-full h-full rounded-br-[4em] object-cover" data-aos="fade-right"/>
                        </div>

                        <p  
                            className={`text-roxo-quase font-quaseW font-semibold text-3xl flex justify-center items-center w-full text-center tablet:mx-auto note:text-4xl 4k:text-5xl grande:text-6xl`}
                            data-aos="fade-up"
                        >
                            Educar para o futuro é, antes de tudo, fortalecer o humano
                        </p>

                        <div className="w-70 h-80 hidden foto:block note:w-80 note:h-90 grande:h-140 grande:w-130">
                            <img src={olhando} className="w-full h-full rounded-tl-[4em] object-cover" data-aos="fade-left"/>
                        </div>
            
                    </div>

                    <div className="flex flex-col tablet:flex-row-reverse meio:mx-20 4k:mx-40 grande:mx-60">
                        <p  
                            className="text-xl mx-8 font-quaseW text-justify hyphens-auto text-roxo-escuro tablet:text-2xl tablet:w-100 tablet:my-8 laptop:w-140 laptop:mx-0 laptop:ml-8 laptop:flex laptop:items-center note:text-3xl note:w-210 4k:text-4xl 4k:w-230 grande:text-5xl grande:w-300"
                            data-aos="fade-up-left"
                        >
                            Aqui, voltamos o olhar para o potencial integral da criança, cultivando o pensar, o sentir e o querer na medida certa para cada idade, a fim de formar indivíduos criativos, resilientes e éticos, capazes de navegar a complexidade do mundo com equilíbrio e propósito
                        </p>

                        <div className="w-80 h-80 my-8 mx-auto rounded-br-4xl rounded-tr-[4em] rounded-bl-[4em] overflow-hidden tablet:ml-4 note:w-90 note:h-90 grande:h-140 grande:w-140">
                            <img src={aquarela} className="w-full h-full object-cover" data-aos="fade-right"/>
                        </div>
                    </div>

                    <div className="flex flex-col tablet:flex-row tablet:justify-between meio:mx-20 note:my-12 4k:mx-40 grande:mx-60">
                        <div    
                            className={`text-xl text-center font-semibold mx-8 font-quaseW text-roxo-quase [&_.Typewriter]:inline tablet:flex tablet:justify-center tablet:items-center tablet:w-100 tablet:text-2xl tablet:my-8 tablet:mx-4 laptop:mx-0 laptop:w-120 note:text-3xl note:w-220 4k:text-4xl 4k:w-260 grande:text-5xl grande:w-280`}
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
                                className="my-8 mx-auto p-4 rounded-xl flex justify-center items-center gap-2 bg-rosa-pastel border-roxo-quase text-roxo-quase border-3 text-xl font-semibold font-Waldorf2 h-16 w-fit shadow-md shadow-black/70 hover:cursor-pointer hover:text-rosa-pastel hover:bg-roxo-quase hover:scale-105 transition-all duration-400 tablet:p-6 tablet:h-20 tablet:text-2xl tablet:my-auto tablet:mx-0 note:text-3xl note:gap-4 note:p-8 4k:text-4xl 4k:p-10 grande:p-12 grande:text-5xl"
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