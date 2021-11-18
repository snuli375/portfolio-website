import styles from './work.module.scss'
import Card from '../../components/Card'
import Jupiter from '../../assets/jupiter.svg'

const Work = () => {
    return (
        <div className={styles.work}>
            <h2 id="work">Recent Work Experience</h2>
            <Card title="Data Visualization Intern"
                isExperience
                location="NASA Jet Propulsion Laboratory"
                image={Jupiter}>
                <p>Prototyped and developed features for an interactive data visualization application (DTAT) in Python and Javascript.</p>
                <p>Presented visualization work to 50+ engineers and scientists at the Europa Clipper Science Series.</p>
            </Card>

            <Card title="Software Engineering Co-Op"
                isExperience
                location="Priceline.com">
                <p>Assisted with developing and maintaining React/Redux/GraphQL code on the Packages team.</p>
                <p>Authored test scripts using Jest and React Testing Library to preserve 100% test coverage for repositories.</p>
            </Card>

            <Card title="Interactive Front-End Developer Co-op"
                isExperience
                location="Wunderkind (formerly BounceX)">
                <p>Developed custom cross-browser interactive web experiences to increase sales on clients’ websites.</p>
                <p>Created an internal Chrome extension written in React to improve developer productivity.</p>
            </Card>
        </div>
    )
}

export default Work