import { Button, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'


interface PaginationButtonProps {
	buttonNumber: number
	isCurrent?: boolean
	setOffset: (offset: number) => void
	limit: number
}

export function PaginationButton({ isCurrent, buttonNumber, setOffset, limit }: PaginationButtonProps) {
	if (isCurrent) {
		return (
			<Button
				size={'sm'}
				fontSize={'xs'}
				w={4}
				colorScheme={'pink'}
			>
				{buttonNumber}
			</Button>
		)
	}

	const newOffset = (buttonNumber - 1) * limit

	return (
		<Button
			size={'sm'}
			fontSize={'xs'}
			w={4}
			bg={'gray.700'}
			_hover={{
				bg: 'gray.500'
			}}
			onClick={() => {
				setOffset(newOffset)
			}}
		>
			{buttonNumber}
		</Button>
	)
}