import {FC, useEffect, useState} from "react";
import s from './userDetails.module.css'
import axios from "axios";
import {SearchUserType} from "../UsersList/UsersList.tsx";
import {Timer} from "../Timer.tsx";
import {Preloader} from "../Preloader.tsx";

export const UserDetails: FC<OwnProps> = ({selectedUser}) => {
  const [userDetails, setUserDetails] = useState<null | UserType>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
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

  return <>
    {loading
      ? <Preloader/>
      : userDetails ?
        <div className={s.details}>
          <div className={s.details_item}>
            <Timer userId={userDetails.id} onShowUserDetails={setUserDetails}/>
            <h1>{userDetails.name ? userDetails.name : userDetails.login}</h1>
            <ul className={s.description}>
              <li>Date of created: {userDetails.created_at.substr(0, 10).split('-').reverse().join('-')}</li>
              <li>Date of updating: {userDetails.updated_at.substr(0, 10).split('-').reverse().join('-')}</li>
              <li>Public repositories: {userDetails.public_repos}</li>
              <li>Followers: {userDetails.followers}</li>
              <li>Following: {userDetails.following}</li>
            </ul>
            <button className={s.details_item_button}>
              <a href={userDetails.html_url} target={'_blank'}>My GitHub page</a>
            </button>
          </div>
          <img
            className={s.details_img}
            src={userDetails.avatar_url} alt={userDetails.login}
          />
        </div>
        : <div className={s.not_details}>
          <p>Select a user from the list</p>
          <p>of</p>
          <p>Find a new github user</p>
          <p>by entering the login in the search bar</p>
          <p>Once the timer expires, the user's card will be closed</p>
        </div>
    }
  </>
}

type UserType = {
  login: string
  name: string
  id: number
  avatar_url: string
  followers: number
  following: number
  html_url: string
  repos_url: string
  public_repos: number
  created_at: string
  updated_at: string
}
type OwnProps = {
  selectedUser: SearchUserType | null
}
