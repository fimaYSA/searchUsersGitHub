import {FC} from 'react';
import s from './header.module.css';
import {Logo} from '../Logo/Logo.tsx';

export const Header: FC = () => {
  return (
    <div className={s.header}>
      <Logo/>
      <div className={s.header_title}>
        Search users to GitHub
      </div>
    </div>
  )
}
