import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons"
import styles from "./nav.module.scss"
import { useState, useEffect } from 'react'
const Nav = () => {
    const [isMobile, setMobile] = useState(true);
    const [navOpen, setNavOpen] = useState(false);
    const handleResize = () => setMobile(window.innerWidth < styles.MOBILE_BP);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            {(<div>
                <nav className={styles.nav}>
                    <h1>Srilekha Nuli</h1>
                    {isMobile && (<div>
                        <FontAwesomeIcon
                            onClick={() => setNavOpen(!navOpen)}
                            size="lg" icon={navOpen ? faHamburger : faBars}></FontAwesomeIcon>
                    </div>)}
                    <div
                        onClick={() => setNavOpen(false)}
                        className={`${styles.navItemsWrapper} ${navOpen && styles.isVisible}`}>
                        <ul className={styles.navItems}>
                            <li>
                                <a className={styles.navItem} href="#about">About</a>
                            </li>
                            <li>
                                <a className={styles.navItem} href="#experience">Experience</a>
                            </li>
                            <li>
                                <a className={styles.navItem} href="#projects">Projects</a>
                            </li>
                            {/* <li>
                                <a className={styles.navItem} href="#contact">Contact</a>
                            </li> */}
                        </ul>
                    </div>
        </nav>
            <div className={styles.spacer}></div>
            </div>)}
        </div>
    )
}

export default Nav