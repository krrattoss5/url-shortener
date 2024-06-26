import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavbarDashboard from "./navbarDashboard/NavbarDashboard.tsx";
import SideBar from "./sideBar/SideBar.tsx";
import s from "./Dashboard.module.css";
import CreateShortURL from "./shortURL/CreateShortURL.tsx";
import useUsers from "../../hooks/useUsers.tsx";
import SingleLink from "./links/SingleLink.tsx";
import Loading from "../Loading.tsx";
import UpdateShortURL from "./shortURL/UpdateShortURL.tsx";
const Home = lazy(() => import("./Home.tsx"));
const Links = lazy(() => import("./links/Links.tsx"));
const Settings = lazy(() => import("./settings/Settings.tsx"));

const Dashboard = () => {
  const { links, user, countries } = useUsers();

  return (
    <main className={s.main}>
      <SideBar />

      <section className={s.routeSection}>
        <NavbarDashboard user={user} />
        <div className={s.component}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/links" element={<Links links={links} />} />
              <Route
                path="/settings"
                element={<Settings user={user} />}
              />
              <Route path="/links/create" element={<CreateShortURL />} />
              <Route
                path="/links/update/:id"
                element={<UpdateShortURL links={links} />}
              />
              <Route
                path="/links/single/:id"
                element={<SingleLink links={links} countries={countries} />}
              />
            </Routes>
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
