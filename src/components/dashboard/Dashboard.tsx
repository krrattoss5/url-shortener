import SideBar from '../sideBar/SideBar'
import s from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <main className={s.main}>
      <SideBar />
    </main>
  )
}

export default Dashboard