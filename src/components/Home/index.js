import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
           Hi, <br />
           I'm Abdul <br />
           Web Developer
          </h1>
          <h2>Front End Developer / React</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home