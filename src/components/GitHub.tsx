import s from './gitHub.module.css'
import {useEffect, useState} from "react";
import {UserDetails} from "./UserDetails.tsx";
import {Search} from "./Search.tsx";
import {SearchUserType, UsersList} from "./UsersList.tsx";

const INITIAL_SEARCH = 'olga'

export const GitHub = () => {
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>(INITIAL_SEARCH)

  useEffect(() => {
    // console.log('GitHub - useEffect')
    if (selectedUser) {
      document.title = selectedUser.login
    }
  }, [selectedUser])

  // console.log('GitHub')
  return (
    <div className={s.content}>
      <div className={s.search_container}>
        <Search searchTerm={searchTerm} onSubmit={setSearchTerm}/>
        <button onClick={() => {
          setSearchTerm('it-kamasutra')
        }}>reset
        </button>
        <UsersList selectedUser={selectedUser}
                   onUserSelect={setSelectedUser}
                   term={searchTerm}
        />
      </div>
      <UserDetails selectedUser={selectedUser}/>
    </div>
  )
}

