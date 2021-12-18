import Card from '../../components/Card'
import styles from './projects.module.scss'
import DoggoGif from '../../assets/construction-working.gif'

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h2 id="projects">Projects</h2>
            <div className={styles.projects}>
                <Card title="Filmify"
                    location="Interaction Design Team Capstone">
                </Card>
                <Card title="Unfilter."
                    location="Interaction Design I">
                    <p>Designed mock news aggregator app which collects US focused policy and politics news articles from multiple viewpoints to expose news media bias.</p>
                </Card>
                <Card title="She<Hacks/> 2018: Audie"
                    location="She<Hacks/> 2018">
                    <p>Collaborated to invent a IoT toy to improve hospital experiences for children. Created an interface in d3.js to track moods of children.</p>
                    <p>Winner of: She&#60;/Smiles&#62; Award, Optum Category Award</p>
                </Card>
                <Card title="Bookify"
                    location="CS 5610: Web Development">
                    <p></p>
                </Card>
            </div>
            {/* <p>In progress!!! Will be updated soon!</p>
            <img src={DoggoGif} /> */}
        </div>
    )
}

export default Projects