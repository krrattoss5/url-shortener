import { GitHubIcon, LinkedinIcon } from "../icons"
import { Link } from "react-router-dom"
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.container}>
      <img src="/bitly_logo.svg" alt="bitly-clone" />
      <span>
        © 2024 BitlyClone | by Didier Pereira Full Stack Developer.
      </span>
      <section>
        <Link className={s.link} to='https://www.linkedin.com/in/didier-pereira-71145321a/'>
          <LinkedinIcon />
        </Link>

        <Link className={s.link} to='https://github.com/krrattoss5'>
          <GitHubIcon />
        </Link>
      </section>
    </footer>
  )
}

export default Footer