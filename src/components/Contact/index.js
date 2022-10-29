import Loader from 'react-loaders'
import './index.scss'

const Contact = () => {

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            Contact me
          </h1>
          <p>
            I am interested in freelance, full-time and part-time opportunities However, if you have any other requests or
            questions, don't hesitate to contact me through my social media.
          </p>
          <p className="eyes">
            Psst. Bottom left :)
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact