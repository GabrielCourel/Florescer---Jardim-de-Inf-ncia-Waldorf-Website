import { useEffect } from 'react';
import style from "./Escola.module.css"
import bonecas from "../assets/images/bonecas.jpeg"
import steiner from "../assets/images/Steiner.jpg"
import parque4 from "../assets/images/parque4.jpeg"

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Escola () 
{

    useEffect(() => {
        AOS.init({ duration: 600, once: false});
    }, []);

    return (
        <div>
            <div className={style.divPrincipal}>
            
                {/* Div para imagem de fundo da home */}
                <div className={style.fundoHome}>
                    <img src={bonecas} className={style.divImagem}/>
                    <div className={style.fundoRoxo}></div>
            
                    {/* Div para o texto da foto */}
                    <div className={style.textoFoto}>
                        <p  
                            className={`${style.degrade} ${style.paragrafo}`}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="350"
                        >
                            Escola Florescer, Jardim de Infância Waldorf
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
                            className={`${style.tituloUm} ${style.degrade2}`}
                            data-aos="fade-right"
                        >
                            Nossa história
                        </p>

                        <div className={`${style.divUmDois} meio:flex-row!`}>
                            <p 
                                className={style.textoUm}
                                data-aos="fade-left"
                            >
                                O Jardim Florescer nasceu no final de 2008 quando algumas famílias perceberam a importância de ter uma escola Waldorf, neste caso um Jardim de Infância, no centro de Botucatu, e com a ajuda de todas as famílias que lá estavam, a escola tomou corpo, tornou-se viva e até hoje, as famílias, junto com o corpo pedagógico, são o pulsar deste Florescer <br />
                            </p>
                        
                            <div className={style.fotoDois} data-aos="fade-left">
                                <img src={parque4} className={style.padrao} />
                            </div>
                        </div>

                    </div>

                    <div className={`${style.divUm} overflow-hidden`}>

                        <p 
                            className={`${style.tituloUm} ${style.degrade2}`}
                            data-aos="fade-left"
                        >
                            A pedagogia
                        </p>

                        <div className={`${style.textoDois} meio:flex-row!`}>
                            <div className={`flex flex-col gap-2 text-xl font-quaseW text-justify hyphens-auto text-roxo-escuro tablet:text-2xl meio:gap-4 note:text-3xl note:gap-6 4k:text-4xl 4k:gap-12 grande:text-5xl`}>
                                <p data-aos="fade-right">
                                    Aqui abordamos a Pedagogia Waldorf, um método que se concentra no desenvolvimento integral da criança desde a infância até a idade escolar, enfatizando a brincadeira, a exploração, o fazer junto e a criatividade como meios de aprendizado.
                                </p>

                                <p data-aos="fade-left">
                                    Essa abordagem foi criada em 1919, na Alemanha, por Rudolf Steiner, a pedido do diretor da fábrica Waldorf-Astoria, que buscava uma educação mais humanizada para os filhos dos operários.
                                </p>
                            </div>

                            <div className={`flex flex-col gap-2 text-xl font-quaseW text-justify hyphens-auto text-roxo-escuro tablet:text-2xl meio:gap-4 note:text-3xl note:gap-6 4k:text-4xl 4k:gap-12 grande:text-5xl`}>
                                <div className={style.fotoUm} data-aos="fade-left">
                                    <img src={steiner} className={style.padrao} />
                                </div>

                                <p 
                                    className='mb-8'
                                    data-aos="fade-right"
                                >
                                    O método chegou ao Brasil em 1956 e hoje, consolida-se como um dos movimentos educacionais independentes que mais cresce no mundo, inspirando escolas como a nossa a cultivar indivíduos livres, conscientes e preparados para o futuro
                                </p>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}