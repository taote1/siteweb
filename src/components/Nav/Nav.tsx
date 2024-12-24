import { Link } from "react-router-dom"
import style from './ui.module.css'

export const Nav = () => {
  return (
    <nav className={style.nav}>
        <ul className={style.ulNav}>
          <li>
            <Link to={"/"} className="link">
              Главная
            </Link>
          </li>
          <li>
            <Link to={"/bookings"} className="link">
              Забронированные квартиры
            </Link>
          </li>
        </ul>
    </nav>
  )
}
