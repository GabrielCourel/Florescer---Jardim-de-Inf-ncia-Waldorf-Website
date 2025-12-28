import style from "./Home.module.css"
import caminhando from "../assets/images/caminhando2.jpeg"
import caminhando2 from "../assets/images/caminhando.jpeg"
import novelo from "../assets/images/novelo.jpeg"
import corda from "../assets/images/corda.jpeg"
import aquarela from "../assets/images/aquarela.jpeg"
import aquarela1 from "../assets/fundos/aquarela1 (2).png"
import gotas from "../assets/fundos/gotas.png"
import Typewriter from 'typewriter-effect'
import { BiSolidDoorOpen } from "react-icons/bi";

function Home () 
{
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
                        <p className={`${style.degrade} ${style.paragrafo}`}>
                            A nossa mais elevada tarefa deve ser formar seres humanos livres que sejam capazes de, por si mesmos, encontrar propósito e direção para suas vidas
                        </p>
                        <p className={`${style.degrade} ${style.mencao}`}>
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
                    className="relative -z-20 top-0 max-w-full rotate-180 h-30 -translate-y-22"
                >
                    <path d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" className="fill-rosa-pastel"/>
                </svg>

                <div className="bg-rosa-pastel max-w-full h-full -translate-y-34">

                    <p className="text-xl mx-8 font-quaseW text-justify hyphens-auto text-roxo-escuro">
                        Há mais de 100 anos, a Pedagogia Waldorf prega aquilo que se tornou essencial nos dias de hoje: o desenvolvimento de inteligência emocional, pensamento crítico e autonomia. Em um mundo cada vez mais digital e acelerado, nossa abordagem se destaca por oferecer a resposta que os tempos atuais exigem
                    </p>

                    <div className="w-80 h-80 my-8 mr-4 ml-auto rounded-tl-[4em] rounded-br-[4em] overflow-hidden">
                        <img src={novelo} className="w-full h-full object-cover"/>
                    </div>

                    <div className="w-full my-8 mr-4 -translate-x-16 flex gap-8">

                        <img src={corda} className="w-70 h-80 rounded-br-[4em]"/>
                        <p className={`${style.degrade2} font-quaseW font-semibold text-3xl flex justify-center items-center w-full`}> Educar para o futuro é, antes de tudo, fortalecer o humano</p>
            
                    </div>

                    <p className="text-xl mx-8 font-quaseW text-justify hyphens-auto text-roxo-escuro">
                        Aqui, voltamos o olhar para o potencial integral da criança, cultivando o pensar, o sentir e o querer na medida certa para cada idade, a fim de formar indivíduos criativos, resilientes e éticos, capazes de navegar a complexidade do mundo contemporâneo com equilíbrio e propósito
                    </p>

                    <div className="w-80 h-80 my-8 mx-auto rounded-br-4xl rounded-tr-[4em] rounded-bl-[4em] overflow-hidden">
                        <img src={aquarela} className="w-full h-full object-cover"/>
                    </div>

                    <div className={`text-xl text-center font-semibold mx-8 font-quaseW ${style.degrade3} [&_.Typewriter]:inline`}>
                        <span>
                            Venha conhecer uma educação que respeita o tempo da infância para formar seres humanos {" "}
                            <Typewriter
                                options=
                                {{
                                    strings: ['críticos', 'autônomos', 'equilibrados'],
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

                    <button className="my-8 mx-auto p-4 rounded-xl flex justify-center items-center gap-2 bg-rosa-pastel border-roxo-quase text-roxo-quase border-3 text-xl font-semibold font-Waldorf2 h-16 w-fit shadow-lg shadow-black/70 hover:cursor-pointer hover:text-rosa-pastel hover:bg-roxo-quase hover:scale-105 transition-all duration-400">
                        <BiSolidDoorOpen />
                        AGENDE SUA VISITA
                    </button>

                </div>

            </div>
        </div>
    )
}
export default Home;