import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
import { SidebarNav } from './SidebarNav'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'



export function Sidebar() {
	const isDrawerSideBar = useBreakpointValue({
		base: true,
		lg: false
	})

	const { isOpen, onClose } = useSidebarDrawer()

	if (isDrawerSideBar) {
		return (
			<Drawer isOpen={isOpen} onClose={onClose} placement={'left'}>
				<DrawerOverlay>
					<DrawerContent bg={'gray.800'} p={4}>
						<DrawerHeader mt={6}>
							Navegação
						</DrawerHeader>

						<DrawerBody>
							<SidebarNav />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		)
	}


	return (
		<Box as={'aside'} w={64} mr={8}>
			<SidebarNav />
		</Box>
	)
}