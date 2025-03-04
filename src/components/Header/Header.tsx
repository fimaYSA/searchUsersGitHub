import {FC} from "react";
import s from './header.module.css'

export const Header: FC = () => {
  return(
    <div>
      <div className={s.logo}>GitHub Users</div>
    </div>
  )
}
