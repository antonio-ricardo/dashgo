import { Stack } from '@chakra-ui/react'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'


export function SidebarNav() {
	return (
		<Stack spacing={12} align={'flex-start'}>
			<NavSection title={'Geral'}>
				<NavLink icon={RiDashboardLine} title={'Dashboard'} href='/dashboard'/>

				<NavLink icon={RiContactsLine} title={'Usuários'} href='/users'/>
			</NavSection>

			<NavSection title={'Geral'}>
				<NavLink icon={RiInputMethodLine} title={'Formulários'} href='/forms'/>

				<NavLink icon={RiGitMergeLine} title={'Automação'} href='/automation'/>
			</NavSection>
		</Stack>
	)
}