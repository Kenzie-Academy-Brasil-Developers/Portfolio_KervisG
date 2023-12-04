import { username } from "../../data/user"
import Banner from "../../assets/banner-img.png"
import styles from "./style.module.css"


const BannerSection = () => {
    return (

        <section className={styles.BannerSection}>
            <div className="container">
                <div className={styles.containerText}>
                    <span className="label"> {username} </span>
                    <h1 className="title1"> Bem vindo ao meu portfólio</h1>
                    <p className="paragraph">Uma frase interessante sobre mim</p>
                    <button className="btn">Saiba mais</button>
                </div>
                <img src={Banner} alt="logo de banner" />
            </div>
        </section>

    )
}

export default BannerSection;