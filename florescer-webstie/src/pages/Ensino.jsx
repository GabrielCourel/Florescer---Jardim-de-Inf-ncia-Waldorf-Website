import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import style from "./Ensino.module.css"
import jabuti from "../assets/images/jabuti.png"
import brincando2 from "../assets/images/brincando2.JPG"
import historia from "../assets/images/história.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (!section) return;

    const startPosition = window.scrollY;
    const targetPosition = section.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    const easeInOut = (progress) => (
        progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2
    );

    const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;

        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        window.scrollTo(0, startPosition + distance * easeInOut(progress));

        if (elapsedTime < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

export default function Ensino () 
{
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: false,
        });
    }, []);

    useEffect(() => {
        if (!location.hash) return;

        requestAnimationFrame(() => {
            scrollToSection(location.hash);
        });
    }, [location.hash]);

    return (
        <div>
            <div className={style.divPrincipal}>
            
                {/* Div para imagem de fundo da home */}
                <div className={style.fundoHome}>
                    <img src={jabuti} className={style.divImagem}/>
                    <div className={style.fundoRoxo}></div>
            
                    {/* Div para o texto da foto */}
                    <div className={style.textoFoto}>
                        <p  
                            className={`${style.degrade} ${style.paragrafo}`}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="350"
                        >
                            O nosso jeito de ensinar
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

                <div className={style.abaixo}>

                    <div className={style.divUm}>
                    
                        <p
                            id="nossa-rotina"
                            className={`${style.tituloUm} ${style.degrade2}`}
                            data-aos="fade-right"
                        >
                            Nossa rotina
                        </p>
                    
                        <div className={`${style.divUmDois} meio:flex-row!`}>
                            <div 
                                className="flex flex-col gap-2 note:gap-4 grande:gap-6 4k:gap-10"
                            >
                                <p className={style.textoUm} data-aos="fade-left"> As crianças que frequentam o Jardim Florescer tem a oportunidade de participar de todos os processos da rotina da escola, desde a preparação dos lanches até os cuidados com o ambiente</p>
                                <p className={style.textoUm} data-aos="fade-right"> Aqui, elas fazem aquarela, música, jardinagem, e tudo isso faz parte do nosso dia-a-dia! O jardim de infância deve ser um lugar onde a criança se reconhece</p>
                                <p className={style.textoUm} data-aos="fade-left"> É como um lar, com suas atividades a serem realizadas: arrumar a mesa, regar as plantas, assar o pão, servir o lanche. Por isso, cada cantinho dessa escola é pensando no acolhimento das crianças, uma escola que se parece com uma casa</p>
                            </div>
                                                
                            <div className={style.fotoDois} data-aos="fade-right">
                                <img src={brincando2} className={style.padrao} />
                            </div>
                        </div>

                        <p  
                            className={`${style.textoDois} ${style.degrade3}`}
                            data-aos="fade-up"
                        >
                            A pedagogia Waldorf enfatiza a importância da brincadeira, da exploração e da criatividade como meio de aprendizado
                        </p>                    

                        <p
                            id="desenvolvimento"
                            className={`${style.tituloDois} ${style.degrade2}`}
                            data-aos="fade-left"
                        >
                            O desenvolvimento da criança
                        </p>
                    
                        <div className={`${style.divUmDois} mb-8 meio:flex-row!`}>
                            <div className={style.fotoUm} data-aos="fade-right">
                                <img src={historia} className={style.padrao} />
                            </div>

                            <div 
                                className="flex flex-col justify-center gap-2 note:gap-4 grande:gap-6 4k:gap-10"
                            >
                                <p className={style.textoUm} data-aos="fade-left"> No ensino infantil de uma escola Waldorf, o foco é no desenvolvimento integral da criança, abrangendo aspectos físicos, emocionais, sociais e cognitivos</p>
                                <p className={style.textoUm} data-aos="fade-right"> A alfabetização não é introduzida de forma explícita até os 6 ou 7 anos de idade. Isso ocorre porque a abordagem Waldorf prioriza o desenvolvimento da imaginação, da criatividade e da capacidade de pensamento crítico, antes de introduzir a leitura e a escrita de forma sistemática</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
