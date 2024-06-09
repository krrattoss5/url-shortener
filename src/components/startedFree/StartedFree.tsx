import { LinkIcon } from '../icons'
import s from './StartedFree.module.css'
const StartedFree = () => {
  return (
    <>
      <section className={s.container}>

        <h5>Great connections start with a click</h5>
        <h3>Sign up for a free account and put Bitly to work</h3>

        <div className={s.dashboard}>
          <div className={s.buttonContainer}>
            <span><LinkIcon /> Short link</span>
          </div>
          <div className={s.board}>
            <p>Shorten a long link</p>
            <label>Paste a long URL</label>
            <input type="text" placeholder='Example: http://super-long-link.com/short-it' />
            <button>Sigin up and get your link</button>
            <strong>No credit card required this is FREE.</strong>
          </div>
        </div>


      </section>
      <div className={s.slogan}>
        <h3>More than a free link shortener</h3>
        <button>Get Stared</button>
      </div>
    </>
  )
}

export default StartedFree