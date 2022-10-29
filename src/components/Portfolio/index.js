import Loader from 'react-loaders'
import './index.scss'

const Portfolio = () => {
  
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
           Portfolio
          </h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio;