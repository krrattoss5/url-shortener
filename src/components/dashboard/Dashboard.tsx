import { Route, Routes } from 'react-router-dom'
import {Suspense, lazy} from 'react'
import NavbarDashboard from '../sideBar/NavbarDashboard'
import SideBar from '../sideBar/SideBar'
import s from './Dashboard.module.css'
const Home = lazy(() => import('./Home.tsx'))
const Links = lazy(() => import('./Links.tsx'))
const Settings = lazy(() => import('./Settings.tsx'))

const Dashboard = () => {
  return (
    <main className={s.main}>
      <SideBar />

      <section className={s.routeSection}>
        <NavbarDashboard />
        <div className={s.component}>
          <Suspense fallback={
            <h1>Loading...</h1>
          }>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/links' element={<Links />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </Suspense>
        </div>
      </section>
    </main>
  )
}

export default Dashboard