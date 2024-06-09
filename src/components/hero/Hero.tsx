import s from './Hero.module.css'

const Hero = () => {
  return (
    <section className={s.container}>
      <div className={s.section1} style={{padding: '0 5rem'}}>
        <h1 style={{color: '#252628'}}>Build stronger digital <span style={{color: '#ff6116'}}>conections</span></h1>
        <h2>
          Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform.
        </h2>
      </div>

      <div className={s.section2}>
        <img src="/11.15_hero_desktop@2x.png" alt="" className={s.img} />
      </div>
    </section>
  )
}

export default Hero