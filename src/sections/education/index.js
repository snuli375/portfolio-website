import Card from '../../components/Card'
import styles from './education.module.scss'

const Education = () => {
    return (
        <div className={styles.education}>
            <h2 id="education">Education</h2>
            <Card title="Bachelors of Science in Computer Science and Interaction Design"
                isExperience
                location="Northeastern University"
                styleName="education">
                <p>GPA: 3.6/4.0</p>
                <h4>Relevant Coursework</h4>
                <div>
                    <h5>Graduate-level: </h5>
                    <ul>
                        <li>Foundations of Software Development<span aria-hidden="true">, </span></li>
                        <li>Algorithms<span aria-hidden="true">, </span></li>
                        <li>Human-Computer Interaction<span aria-hidden="true">, </span></li>
                        <li>Web Development</li>
                    </ul>
                </div>
                <div>
                    <h5>Undergraduate-level: </h5>
                    <ul>
                        <li>Interaction Design II<span aria-hidden="true">, </span></li>
                        <li>Information Design I</li>
                    </ul>
                </div>
            </Card>

        </div>
    )
}

export default Education