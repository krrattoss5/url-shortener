import { Route, Routes } from 'react-router-dom'
import {Suspense, lazy} from 'react'
import NavbarDashboard from './navbarDashboard/NavbarDashboard.tsx'
import SideBar from './sideBar/SideBar.tsx'
import s from './Dashboard.module.css'
import CreateShortURL from './createShortURL/CreateShortURL.tsx'
import useUsers from '../../hooks/useUsers.tsx'
import SingleLink from './links/SingleLink.tsx'
import Loading from '../Loading.tsx'
const Home = lazy(() => import('./Home.tsx'))
const Links = lazy(() => import('./links/Links.tsx'))
const Settings = lazy(() => import('./Settings.tsx'))

const Dashboard = () => {
  const {links, user, countries} = useUsers()

  return (
    <main className={s.main}>
      <SideBar />

      <section className={s.routeSection}>
        <NavbarDashboard user={user} />
        {/* {JSON.stringify(user)} */}
        <div className={s.component}>
          <Suspense fallback={
            <Loading />
          }>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/links' element={<Links links={links} />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/links/create' element={<CreateShortURL />} />
              <Route path='/links/single/:id' element={<SingleLink links={links} countries={countries} />} />
            </Routes>
          </Suspense>
        </div>
      </section>
    </main>
  )
}

export default Dashboard