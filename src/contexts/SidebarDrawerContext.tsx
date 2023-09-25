import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ReactNode, createContext, useContext, useEffect } from 'react'


interface SidebarDrawerProviderProps {
	children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
	const disclosureProps = useDisclosure()

	const router = useRouter()

	useEffect(() => {
		disclosureProps.onClose()
	}, [router.asPath])

	return (
		<SidebarDrawerContext.Provider value={disclosureProps}>
			{children}
		</SidebarDrawerContext.Provider>
	)
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)