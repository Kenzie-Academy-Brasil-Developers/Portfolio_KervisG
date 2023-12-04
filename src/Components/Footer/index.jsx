import whatsapp from "../../assets/whatsapp-icon.png"
import linkedin from "../../assets/linkedin-icon.png"
import github from "../../assets/github-icon.png"
import { user } from "../../data/user";
import style from "./style.module.css"
const Footer = () => {
    return (

        <footer className={style.footer}>
            <div className="container">

                <h2 className="title2" >Contato</h2>
                <li> <img src={whatsapp} alt="Logo de whatsapp" /> </li>
                <li> <img src={linkedin} alt="Logo de linkedin" /> </li>
                <li> <img src={github} alt="Logo de github" /> </li>


                <p className="paragraph"> Todos os direitos reservados - {user} </p>
            </div>
        </footer>
    )
}


export default Footer;