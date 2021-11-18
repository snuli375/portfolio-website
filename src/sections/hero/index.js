import styles from "./hero.module.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Hero = () => {
    return (
        <div id="about" className={styles.hero}>
            <div className={styles.heroTop}>
            </div>
            <div className={styles.heroBottom}>
                <h1 className={styles.heroHeading}>Hi, I'm Srilekha Nuli!</h1>
                <h2 className={styles.heroSubheading}>A software developer and design enthusiast!</h2>

                {/* <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> */}
            </div>

        </div>)
}

export default Hero