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

      <div className="container hex-colors">
          <a className='hex-colors-link' target="_blank" rel="noreferrer" href='https://abdulcodes154.github.io/Hex-Colors/'>Hex colors
          </a>
      </div>

      <div className="container vue3-todo">
          <a className='vue3-todo-link' target="_blank" rel="noreferrer" href='https://thunderous-choux-e8991d.netlify.app/'>Vue todo app
          </a>
      </div>

      <div className="container tic">
          <a className='tic-link' target="_blank" rel="noreferrer" href='https://friendly-duckanoo-154524.netlify.app/'>Tic tac toe
          </a>
      </div>

      <p className="hex-p">Learned how to create a button which changes the color of the page.</p>
      <p className="vue-p">Learned how to create a simple todo app.</p>
      <div className="tic-c">
          <p className="tic-p">Learned how to use Javascript/React to create a tic tac toe game. This helped improve my problem solving skills.</p>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio;