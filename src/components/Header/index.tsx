import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { Profile } from './Profile'
import { NotificationNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'


export default function Header() {
	const isWideVersion = useBreakpointValue({
		base: false,
		md: true
	})

	const { onOpen } = useSidebarDrawer()

	return (
		<Flex
			as={'header'}
			w={'100%'}
			maxW={1480}
			h={20}
			mx={'auto'}
			mt={4}
			px={6}
			align={'center'}
		>

			{!isWideVersion && (
				<IconButton
					aria-label={'Open navigation'}
					icon={<Icon as={RiMenuLine} />}
					fontSize={24}
					variant={'unstyled'}
					onClick={onOpen}
					mr={1}
					mt={3}
				/>
			)}

			<Logo />

			{isWideVersion && <SearchBox />}

			<Flex
				align={'center'}
				ml={'auto'}
			>
				<NotificationNav />
			</Flex>

			<Profile showProfileDate={isWideVersion} />
		</Flex>
	)
}