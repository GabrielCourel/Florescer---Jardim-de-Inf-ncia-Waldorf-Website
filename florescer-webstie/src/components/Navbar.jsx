import { Link } from "react-router-dom"
import pincelada from "../assets/fundos/pincelada.png"
import florescerJardim from "../assets/logos/florescer-jardim.png"
import logo from "../assets/logos/logo.png"
import fundoMobile from "../assets/fundos/fundo-mobile.jpeg"
import style from "./Navbar.module.css";
import { Slant as Hamburger } from 'hamburger-react'
import { useState } from "react"

function Navbar ()
{

    //useStates para abrir e fechar os modais dos tópicos
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [escolaOpen, setEscolaOpen] = useState (false);
    const [ensinoOpen, setEnsinoOpen] = useState (false);
    const [festasOpen, setFestasOpen] = useState (false);

    const scrollEnsinoSection = (selector) => {
        if (window.location.pathname !== "/ensino") return;

        requestAnimationFrame(() => {
            document.querySelector(selector)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    };

    return(
        
        <div className={style.containerPrincipal}>

            {/* navbar background */}
            <svg
                viewBox="0 0 1440 176"          // Define a área de desenho do SVG 
                preserveAspectRatio="none"      //Permite que o SVG estique para preencher o container 
                className={style.fundoRosa}
            >
                <path 
                    d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z"
                    className="fill-rosa-quase"
                />
            </svg>

            {/* logo Florescer */}
            <div className={style.divlogoFlorescer}>   

                <div className={style.logoFlorescer}>
                    <Link to="/">
                        <img src={logo} className={style.logo} />
                    </Link>
                    <img src={florescerJardim} className={style.florescerJardim} />
                </div>

                <div className={style.hamburguer}>
                    <Hamburger color="#A2236A" size={22} duration={0.6} toggled={hamburgerOpen} toggle={setHamburgerOpen}/>           
                </div>

            </div>

            <div className={style.containerAquarelas}>

                {/* tópico escola */}
                <div 
                    className={`${style.divAquarelas} group/nav`}
                    onMouseEnter={ () => setEscolaOpen (true) }
                    onMouseLeave={ () => setEscolaOpen (false) }
                >
                    <Link to="/escola">
                        <img src={pincelada} className={`${style.pincelada} group-hover/nav:scale-105`} />
                    </Link>
                    <div className={`${style.escritoPincelada} text-rosa-quase group-hover/nav:text-white`}>
                        <Link to="/escola"> nossa escola </Link>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={3} 
                            stroke="currentColor" 
                            className={`${style.pinceladaSvg} ${ escolaOpen ? "rotate-180" : "" }`}>
                            <path strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                        {/* modal controlado por useState */}
                        <div className={`${style.useState} ${ escolaOpen ? " pointer-events-auto opacity-100 meio:translate-y-29 laptop:translate-y-30 note:translate-y-24 4k:translate-y-34" : "pointer-events-none opacity-0 meio:translate-y-14.5 laptop:translate-y-13 note:translate-y-4 4k:translate-y-5"}`}>
                            <Link to="/escola#nossa-historia" className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">A história da Florescer</p>
                                <div className={style.divBarra}></div>
                            </Link>
                            <Link to="/escola#a-pedagogia" className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">A pedagogia Waldorf</p>
                                <div className={style.divBarra}></div>   
                            </Link>
                        </div>

                    </div>
                </div>
                
                {/* tópico ensino */}
                <div 
                    className={`${style.divAquarelas} group/nav`}
                    onMouseEnter={ () => setEnsinoOpen (true) }
                    onMouseLeave={ () => setEnsinoOpen (false) }
                >
                    <Link to="/ensino">
                        <img src={pincelada} className={`${style.pincelada} group-hover/nav:scale-105`}/>
                    </Link>
                    <div className={`${style.escritoPincelada} text-rosa-quase group-hover/nav:text-white`}>
                        <Link to="/ensino">ensino</Link>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={3} 
                            stroke="currentColor" 
                            className={`${style.pinceladaSvg} ${ ensinoOpen ? "rotate-180" : "" }`}>
                            <path strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                        {/* modal controlado por useState */}
                        <div className={`${style.useState} ${ ensinoOpen ? "pointer-events-auto opacity-100 meio:translate-y-25 laptop:translate-y-26 note:translate-y-24 4k:translate-y-34" : "pointer-events-none opacity-0 meio:translate-y-11 laptop:translate-y-9 note:translate-y-4 4k:translate-y-5"}`}>
                            <Link
                                to="/ensino#nossa-rotina"
                                onClick={() => scrollEnsinoSection("#nossa-rotina")}
                                className="cursor-pointer group"
                            >
                                <p className="transition-all duration-400 group-hover:text-white">Nossa rotina</p>
                                <div className={style.divBarra}></div>   
                            </Link>
                            <Link
                                to="/ensino#desenvolvimento"
                                onClick={() => scrollEnsinoSection("#desenvolvimento")}
                                className="cursor-pointer group"
                            >
                                <p className="transition-all duration-400 group-hover:text-white">Desenvolvimento</p>
                                <div className={style.divBarra}></div>   
                            </Link>
                        </div>

                    </div>
                </div>

                {/* tópico festas */}
                <div 
                    className={`${style.divAquarelas} group/nav`}
                    onMouseEnter={ () => setFestasOpen (true) }
                    onMouseLeave={ () => setFestasOpen (false) }
                >
                    <Link to="/festas">
                        <img src={pincelada} className={`${style.pincelada} group-hover/nav:scale-105`} />
                    </Link>
                    <div className={`${style.escritoPincelada} text-rosa-quase group-hover/nav:text-white`}>
                        <Link to="/festas">festas</Link>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={3} 
                            stroke="currentColor" 
                            className={`${style.pinceladaSvg} ${ festasOpen ? "rotate-180" : "" }`}>
                            <path strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                        {/* modal controlado por useState */}
                        <div className={`${style.useState} ${ festasOpen ? "pointer-events-auto opacity-100 meio:translate-y-41 laptop:translate-y-35 note:translate-y-33.5 4k:translate-y-47" : "pointer-events-none opacity-0 laptop:translate-y-18 meio:translate-y-27 note:translate-y-13.5 4k:translate-y-18"}`}>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">Festa da lanterna</p>
                                <div className={style.divBarra}></div>   
                            </div>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">Festa da família </p>
                                <div className={style.divBarra}></div>   
                            </div>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">Bazar de natal</p>
                                <div className={style.divBarra}></div>   
                            </div>
                            <div className="cursor-pointer group">
                                <p className="transition-all duration-400 group-hover:text-white">Festa junina</p>
                                <div className={style.divBarra}></div>   
                            </div>
                        </div>
                    </div>               
                </div>

                {/* tópico contato */}
                <div className={`${style.divAquarelaContato} group`}>  
                    <Link to="/contato"> 
                        <img src={pincelada} className={`${style.pinceladaContato} group-hover:scale-105`} />
                    </Link>
                    <Link to="/contato" className={`${style.escritoPincelada} text-rosa-quase group-hover:text-white`}>contato</Link>
                </div>
            </div>

            {/* modal mobile e tablet para a navbar*/}
            <div className={`${style.modalMT} ${ hamburgerOpen ? "visible opacity-100 translate-x-0 pointer-events-auto" : "invisible pointer-events-none translate-x-full opacity-0"}`}>
                <img src={fundoMobile} className={style.fundoM}/>

                <div className={style.containerM}>
                    
                    <div className={style.divsT}>

                        {/* tópico escola mobile */}
                        <div className={style.topicosM}>
                            <Link 
                                to="/escola"
                                onClick={() => setHamburgerOpen(false)}
                                className={style.titulosM}
                            >
                                Nossa escola
                            </Link>
                            <div className={style.subtitulosM}>
                                <Link
                                    to="/escola#nossa-historia"
                                    onClick={() => setHamburgerOpen(false)}
                                >
                                    A história da florescer
                                </Link>
                                <Link
                                    to="/escola#a-pedagogia"
                                    onClick={() => setHamburgerOpen(false)}
                                >
                                    A pedagogia Waldorf
                                </Link>
                            </div>
                        </div>

                        {/* tópico ensino mobile */}
                        <div className={style.topicosM}> 
                            <Link
                                to="/ensino"
                                onClick={() => setHamburgerOpen(false)}
                                className={style.titulosM}
                            >
                                Ensino
                            </Link>
                            <div className={style.subtitulosM}>
                                <Link
                                    to="/ensino#nossa-rotina"
                                    onClick={() => {
                                        setHamburgerOpen(false);
                                        scrollEnsinoSection("#nossa-rotina");
                                    }}
                                >
                                    Nossa rotina
                                </Link>
                                <Link
                                    to="/ensino#desenvolvimento"
                                    onClick={() => {
                                        setHamburgerOpen(false);
                                        scrollEnsinoSection("#desenvolvimento");
                                    }}
                                >
                                    Desenvolvimento
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className={style.divsT}>
                        {/* tópico festas mobile */}                    
                        <div className={style.topicosM}>
                            <Link 
                                to="/festas"
                                onClick={() => setHamburgerOpen(false)}
                                className={style.titulosM}
                            >
                                Festas
                            </Link>
                            <div className={style.subtitulosM}>
                                <p>Festa da lanterna</p>
                                <p>Festa da família</p>
                                <p>bazar de natal</p>
                                <p>Festa junina</p>
                            </div>
                        </div>

                        {/* tópico contato mobile */}
                        <Link 
                            to="/contato" 
                            onClick={() => setHamburgerOpen(false)}
                            className={style.contatoM}
                        >
                            Contato
                        </Link>
                    </div>

                </div>
            </div>

        </div>
        
    )
}
export default Navbar;
