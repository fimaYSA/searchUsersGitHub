import {FC, useEffect, useState} from "react";
import axios from "axios";

export const Repos: FC<OwnProps> = ({repos_url}) => {
  const [repos, setRepos] = useState<RepoType[]>([])

  useEffect(() => {
    axios
      .get<Array<RepoType>>(repos_url)
      .then(res => {
        const arr = res.data.map((el) => ({name: el.name, html_url: el.html_url}))
        setRepos(arr)
      })
  }, [repos_url])

  return (
    <ul>{repos.map(r => <li key={r.name} style={{marginBottom: '8px'}}>
      <a href={r.html_url} style={{
        textDecoration: "none",
        color: "black",
        backgroundColor: '#0074802e',
        padding: '1px 5px',
        borderRadius: '3px'
      }}
      target={'_blank'}>{r.name}</a>
    </li>)}</ul>
  )
}

type RepoType = {
  name: string
  html_url: string
}
type OwnProps = {
  repos_url: string
}
