import style from "./Footer.module.css"
import florescer2 from "../assets/logos/florescer2.png"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer ()
{
    return (
        <div className="-mt-10 relative bottom-0">

            <div className={style.principal}>

                {/* SVG para formato do footer */}
                <svg
                    viewBox="0 0 1440 176"          
                    preserveAspectRatio="none"
                    className="rotate-180 h-34 w-full"
                >
                    <path d="M 1440 0 L 0 0 L 0 135 Q 390 150 640 137 Q 1140 115 1440 135 Z" className="fill-roxo-quase"/>
                </svg>

                {/* Div para guardar o conteúdo */}
                <div className={style.conteudo}>

                    <div className={`${style.flex} ${style.margem}`}>

                        <div className={`${style.flex} flex-col`}>

                            {/* Div com os escritos */}
                            <div className={`${style.flex} ${style.texto}`}>

                                <img src={florescer2} className={style.florescer} />

                                <p> - </p>

                                    <div className={style.textoTablet}>
                                        <div className={`${style.flex} ${style.textoUm}`}>
                                            <p>Copyright</p>
                                            <FaRegCopyright />
                                            <p>2026 Florescer | Todos os direitos reservados</p>
                                            <p className={style.gabriel1}> | Criado por Gabriel Gomes Courel </p>
                                        </div>
                                        <p className={style.gabriel2}> Criado por Gabriel Gomes Courel </p>
                                    </div>

                                <p className="hidden foto:block"> - </p>

                                <a 
                                    href="https://www.facebook.com/florescerjardimwaldorf/"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookSquare className={style.icons}/>
                                </a>
                                <a 
                                    href="https://www.instagram.com/jardimflorescer/"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className={style.icons}/>           
                                </a>                     
                                <a 
                                    href="https://wa.me/551438155648"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp className={style.icons}/>
                                </a>

                            </div>

                            <div className={`${style.flex} ${style.textoDois}`}>
                                <p>Copyright</p>
                                <FaRegCopyright />
                                <p>2026 Florescer | Todos os direitos reservados</p>
                            </div>
                            <p className={style.gabriel3}> Criado por Gabriel Gomes Courel </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}