import {FC} from 'react';
import s from './logo.module.css';

export const Logo: FC = () => {
  return (
    <div>
      <a className={s.logo} href={'https://github.com/Ef-Siarhei'} target={'_blank'}>
        <div className={s.logo_fima}>FIMA</div>
        <div className={s.logo_esa}>YSA</div>
      </a>
    </div>
  )
}
