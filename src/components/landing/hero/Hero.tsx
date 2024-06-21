import { Link } from "react-router-dom";
import s from "./Hero.module.css";
import Sponsors from "./Sponsors";


const Hero = () => {
  return (
    <main className={s.container}>
      <section className={s.containerSection}>
        <div className={s.section1} style={{ padding: "0 5rem" }}>
          <h1 style={{ color: "#252628" }}>
            Build stronger digital{" "}
            <span style={{ color: "#ff6116" }}>conections</span>
          </h1>
          <h2>
            Use our URL shortener, QR Codes, and landing pages to engage your
            audience and connect them to the right information. Build, edit, and
            track everything inside the Bitly Connections Platform.
          </h2>
          <Link to="/crear-usuario" className={s.getStared}>
            Get Stared for Free
          </Link>
        </div>

        <div className={s.section2}>
          <img src="/11.15_hero_desktop@2x.png" alt="" className={s.img} />
        </div>
      </section>

      <Sponsors />
    </main>
  );
};

export default Hero;
