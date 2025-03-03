import {FC, useEffect, useState} from "react";
import axios from "axios";
import {SearchUserType} from "./UsersList.tsx";
// import {Timer} from "./Timer.tsx";
import {Preloader} from "./Preloader.tsx";

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
        {/*<Timer userId={userDetails.id} onShowUserDetails={setUserDetails}/>*/}
        <h1>{userDetails.login}</h1>
        <div>
          <img src={userDetails.avatar_url} alt={userDetails.login}/>
          <div>Followers: {userDetails.followers}</div>
        </div>
      </div>
    }
  </>
}

type UserType = {
  login: string
  id: number
  avatar_url: string
  followers: number
}
type OwnProps = {
  selectedUser: SearchUserType | null
}
