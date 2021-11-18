import styles from "./nav.module.scss"

const Nav = () => {
    return (
        <div><nav className={styles.nav}>
            <h1>Srilekha Nuli</h1>
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
        </nav>
            <div className={styles.spacer}></div>
        </div>)
}

export default Nav