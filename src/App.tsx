import './App.css'
import {FC} from 'react';
import {GitHub} from './components/GitHub/GitHub.tsx';

export const App: FC = () => {
  return (
    <div className={'app_container'}>
      <GitHub/>
    </div>
  )
}
