import {FC, useEffect, useState} from "react";
import s from "./gitHub.module.css";
import axios from "axios";
import {Preloader} from "./Preloader.tsx";

export const UsersList: FC<OwnPropsType> = ({selectedUser, onUserSelect, term}) => {
  const [users, setUsers] = useState<SearchUserType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // console.log('FoundUsers - useEffect')
    setLoading(true)
    axios
      .get<SearchResultType>(`https://api.github.com/search/users?q=${term}`)
      .then((res) => {
        setUsers(res.data.items)
        setLoading(false)
      })
  }, [term])

  // console.log('FoundUsers')
  return (
    <div>
      {loading
        ? <Preloader/>
        : users.map(u => {
          return <li
            className={u === selectedUser ? s.selectedUser : ''}
            onClick={() => {
              onUserSelect(u)
            }}
            key={u.id}>
            {u.login}
          </li>
        })}
    </div>
  )
}

export type SearchUserType = {
  login: string
  id: number
}
export type SearchResultType = {
  items: SearchUserType[]
}
type OwnPropsType = {
  selectedUser: SearchUserType | null
  onUserSelect: (user: SearchUserType) => void
  term: string
}
