import styles from './card.module.scss'

const Card = ({ isExperience, title, location, description, image, alt, styleName, children }) => {
    return (
        <div className={`${styles.card} ${isExperience ? styles.experience : styles.project} ${styleName ? styles[styleName] : ''}`}>
            <img className={styles.image} src={image} alt={alt}></img>
            <h3 className={styles.title}>{title}</h3>
            <h4 className={styles.location}>{location}</h4>
            {description && <p className={styles.description}>{description}</p>}
            {children}
        </div>
    )
}

export default Card