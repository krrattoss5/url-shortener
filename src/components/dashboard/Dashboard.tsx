import { Route, Routes } from 'react-router-dom'
import {Suspense, lazy} from 'react'
import NavbarDashboard from '../sideBar/NavbarDashboard'
import SideBar from '../sideBar/SideBar'
import s from './Dashboard.module.css'
import CreateShortURL from '../createShortURL/CreateShortURL.tsx'
import useUsers from '../../hooks/useUsers.tsx'
const Home = lazy(() => import('./Home.tsx'))
const Links = lazy(() => import('../links/Links.tsx'))
const Settings = lazy(() => import('./Settings.tsx'))

const Dashboard = () => {
  const {links, user} = useUsers()

  return (
    <main className={s.main}>
      <SideBar />

      <section className={s.routeSection}>
        <NavbarDashboard user={user} />
        <div className={s.component}>
          <Suspense fallback={
            <h1>Loading...</h1>
          }>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/links' element={<Links links={links} />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/links/create' element={<CreateShortURL />} />
            </Routes>
          </Suspense>
        </div>
      </section>
    </main>
  )
}

export default Dashboard