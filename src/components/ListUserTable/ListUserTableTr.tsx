import { Box, Button, Checkbox, Icon, Td, Text, Tr } from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'

interface ListUserTableTrProps {
	name: string
	email: string
	createdAt: string
}

export const ListUserTableTr = ({ createdAt, email, name }: ListUserTableTrProps) => {
	return (
		<Tr>
			<Td px={6}>
				<Checkbox colorScheme={'pink'} />
			</Td>

			<Td>
				<Box>
					<Text fontWeight={'bold'}>
						{name}
					</Text>
					<Text>
						{email}
					</Text>
				</Box>
			</Td>

			<Td>
				{new Date(createdAt).toLocaleDateString('pt-BR', {
					day: '2-digit',
					month: 'long',
					year: 'numeric'
				})}
			</Td>

			<Td>
				<Button
					as={'a'}
					size={'sm'}
					fontSize={'sm'}
					colorScheme={'purple'}
					leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
				>
					Editar
				</Button>
			</Td>
		</Tr>
	)
}