import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import './index.scss';

const About = () => {

    return (
        <>
          <div className="container about-page">
            <div className="text-zone">
                <h1>
                    About me
                </h1>
                <p>
                    I'm a problem solving front end developer, looking for a role in front end development.
                    I'm naturally curious and love solving problems in small manageable bits of code which make my life easy. 
                </p>
                <p>
                    If you want my services go ahead and reach out to me, i don't bite. 
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={'empty-set'} color="#EC4d28" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4d28" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                </div>
            </div>
          </div>
          <Loader type="pacman" />
        </>
    )
}

export default About