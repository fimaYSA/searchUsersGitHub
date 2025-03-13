import {Box, Container} from '@mui/material'
import {useEffect, useState} from 'react'
import {Footer} from '../Footer/Footer.tsx'
import {Header} from '../Header/Header.tsx'
import {Search} from '../Search/Search.tsx'
import {UserDetails} from '../UserDetails/UserDetails.tsx'
import {SearchUserType, UsersList} from '../UsersList/UsersList.tsx'
import s from './gitHub.module.css'

const INITIAL_SEARCH = 'ola'

export const GitHub = () => {
	const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
	const [searchTerm, setSearchTerm] = useState<string>(INITIAL_SEARCH)

	useEffect(() => {
		if (selectedUser) {
			document.title = selectedUser.login
		}
	}, [selectedUser])

	return (
		<Container className={s.container}
		           disableGutters={true}
		           maxWidth={'lg'}
		>
			<Box className={s.wrapper}>
				<Header/>
				<div className={s.github_content}>
					<div className={s.search_container}>
						<Search searchTerm={searchTerm} onSubmit={setSearchTerm}/>
						<UsersList selectedUser={selectedUser}
						           onUserSelect={setSelectedUser}
						           term={searchTerm}
						/>
					</div>
					<UserDetails selectedUser={selectedUser}/>
				</div>
				<Footer/>
			</Box>
		</Container>
	)
}

