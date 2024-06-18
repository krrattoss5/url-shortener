import { Link } from "react-router-dom";
import s from "./Dashboard.module.css";

const Home = () => {
  return (
    <div className={s.containerSection}>
      <div className={s.containerSectionHead}>
        <h2>Your Clone Connections Platform</h2>
      </div>

      <div className={s.containerSectionBox}>
        <div className={s.sectionBox}>
          <img src="/dashboard-custom-domain.png" alt="" />
        </div>

        <div className={s.sectionBox}>
          <img src="/dashboard-custom-domain.png" alt="" />

          <h3>Replace your brand with “bit.ly clone”.</h3>

          <p>
            Get a custom domain to create links that represent you. Add your own
            short domain or choose a complimentary one when you upgrade.
          </p>

          <Link to="/dashboard/links/create">
            <button>new short</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
