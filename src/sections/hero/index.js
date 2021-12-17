import styles from "./hero.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import HeroImage from "../../assets/hero-image.png"
const Hero = () => {
    return (
        <div id="about" className={styles.hero}>
            <div className={styles.top}>
                <img className={styles.image} src={HeroImage}
                    alt="the top half of Srilekha's face peeks from behind a white piece of paper" />
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.heading}>Hi, I'm Srilekha Nuli!</h1>
                <h2 className={styles.subheading}>A software developer and design enthusiast!</h2>
                <div>
                    <a className={styles.icon} href="http://www.linkedin.com/in/srilekha-nuli">
                        <FontAwesomeIcon size="2x" icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                    <a className={styles.icon} href="http://github.com/snuli375">
                        <FontAwesomeIcon size="2x" icon={faGithub}></FontAwesomeIcon>
                    </a>
                    <a className={styles.icon} href="mailto:srilekhanuli@gmail.com">
                        <FontAwesomeIcon size="2x" icon={faEnvelope}></FontAwesomeIcon>
                    </a>
                    {/** TODO: add resume link */}
                </div>
            </div>

        </div>)
}

export default Hero