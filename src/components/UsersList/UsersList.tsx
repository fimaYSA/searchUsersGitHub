import {FC, useEffect, useState} from 'react';
import s from './usersList.module.css';
import axios from 'axios';
import {Preloader} from '../Preloader.tsx';

export const UsersList: FC<OwnPropsType> = ({selectedUser, onUserSelect, term}) => {
  const [users, setUsers] = useState<SearchUserType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get<SearchResultType>(`https://api.github.com/search/users?q=${term}`)
      .then((res) => {
        setUsers(res.data.items)
        setLoading(false)
      })
  }, [term])

  return (
    <ul className={s.users_list}>
      {loading
        ? <Preloader/>
        : users.map(u => {
          return <li
            className={u === selectedUser ? `${s.selectedUser} ${s.users_list_item}` : s.users_list_item}
            onClick={() => {
              onUserSelect(u)
            }}
            key={u.id}>
            <img src={u.avatar_url} alt={'img'}/>
            <div>{u.login}</div>
          </li>
        })}
    </ul>
  )
}

export type SearchUserType = {
  login: string
  id: number
  avatar_url: string
}
export type SearchResultType = {
  items: SearchUserType[]
}
type OwnPropsType = {
  selectedUser: SearchUserType | null
  onUserSelect: (user: SearchUserType) => void
  term: string
}
