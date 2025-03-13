import {FC} from 'react'
import s from './footer.module.css'

export const Footer: FC = () => {
	const year = new Date().getFullYear()

	return (
		<>
			<div className={s.footer}>
				<a href={'https://github.com/fimaYSA'}>
					{`Efimenko Sergey © ${year}`}
				</a>
			</div>
		</>
	)
}
