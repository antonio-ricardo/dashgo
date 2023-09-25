import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import Header from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { RiAddLine } from 'react-icons/ri'
import { Pagination } from '../../components/Pagination'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ListUserTableTr } from '../../components/ListUserTable/ListUserTableTr'
import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { useUsers } from '../../services/hooks/useUsers'


interface User {
	id: string
	email: string
	name: string
	createdAt: string
}

export default function UserList() {
	const [users, setUsers] = useState<Partial<User>[]>([])
	const [total, setTotal] = useState<number>(0)
	const [limit] = useState<number>(5)
	const [offset, setOffset] = useState<number>(0)

	const { data, isLoading, error, isRefetching } = useUsers({ limit, offset })

	useEffect(() => {
		if (data) {
			setUsers(data.users)
			setTotal(data.total)
		}
	}, [data])

	const isUserListReady = !isLoading && !error
	const isRefetchingData = isRefetching && !isLoading

	return (
		<Box>
			<Header />
			<Flex w={'100%'} my={6} maxW={1480} mx={'auto'} px={6}>
				<Sidebar />

				<Box flex={1} borderRadius={8} bg={'gray.800'} p={8}>
					<Flex mb={8} justify={'space-between'} align={'center'}>
						<Heading size={'lg'} fontWeight={'normal'}>
							Usuários

							{isRefetchingData && <Spinner size={'sm'} color={'gray.500'} ml={4} />}
						</Heading>

						<Link href={'/users/create'} passHref>
							<Button
								size={'sm'}
								fontSize={'sm'}
								colorScheme={'pink'}
								leftIcon={<Icon as={RiAddLine} fontSize={20} />}
							>
								Criar novo
							</Button>
						</Link>
					</Flex>
					{isUserListReady &&
						(
							<>
								<Table colorScheme={'whiteAlpha'}>
									<Thead>
										<Tr>
											<Th px={6} color={'gray.300'} width={8}>
												<Checkbox colorScheme={'pink'} />
											</Th>

											<Th>Usuários</Th>

											<Th>Data de cadastro</Th>
											<Th width={8} />
										</Tr>
									</Thead>
									{
										(
											<Tbody>
												{
													users.map((user) =>
														<ListUserTableTr key={user.id} createdAt={user.createdAt} email={user.email} name={user.name} />
													)
												}
											</Tbody>
										)
									}
								</Table>
								<Pagination
									total={total}
									limit={limit}
									offset={offset}
									setOffset={setOffset}
								/>
							</>
						)
					}
					{
						isLoading &&
						(
							<Flex justify={'center'}>
								<Spinner />
							</Flex>
						)
					}
					{
						error &&
						(
							<Flex justify={'center'}>
								<Text>Falha ao obter a listagem de usuarios</Text>
							</Flex>
						)
					}
				</Box>
			</Flex >
		</Box >
	)
}