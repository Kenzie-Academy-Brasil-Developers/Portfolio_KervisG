import logo from "../../assets/portfolio.png"
import styles from "./style.module.css"
 const Header = () => {
    return (

        <header className={styles.header}>
            <div>
                <img src={logo} alt="Logo do site" />
                <nav>
                    <a className="paragraph" href="#about">Sobre</a>
                    <a className="paragraph" href="#stack">Stack</a>
                    <a className="paragraph" href="#projects"> Projetos</a>
                </nav>
                <button className="btn">Contato</button>

            </div>
        </header>

    );
};

export default Header;