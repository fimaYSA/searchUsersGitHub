import {FC, useEffect, useState} from "react";
import axios from "axios";
import {SearchUserType} from "./UsersList.tsx";
import {Timer} from "./Timer.tsx";
import {Preloader} from "./Preloader.tsx";
import {Repos} from "./Repos.tsx";

export const UserDetails: FC<OwnProps> = ({selectedUser}) => {
  const [userDetails, setUserDetails] = useState<null | UserType>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // console.log('UserDetails - useEffect')
    if (!!selectedUser) {
      setLoading(true)
      axios
        .get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
        .then(res => {
          setUserDetails(res.data)
          setLoading(false)
        })
    }
  }, [selectedUser])

  // console.log('UserDetails')
  return <>
    {loading
      ? <Preloader/>
      : userDetails &&
      <div>
        <Timer userId={userDetails.id} onShowUserDetails={setUserDetails}/>
        <h1>{userDetails.login}</h1>
        <img src={userDetails.avatar_url} alt={userDetails.login}/>
        <div>My GitHub page: <a href={userDetails.html_url} target={'_blank'}>Click hear</a></div>
        <div>Followers: {userDetails.followers}</div>
        <Repos repos_url={userDetails.repos_url}/>
      </div>
    }
  </>
}

type UserType = {
  login: string
  id: number
  avatar_url: string
  followers: number
  html_url: string
  repos_url: string
}
type OwnProps = {
  selectedUser: SearchUserType | null
}
