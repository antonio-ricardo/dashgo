import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import Header from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'

type CreateUserFormData = {
	name?: string
	email?: string
	password?: string
	confirmPassword?: string
}

const CreateUserFormSchema = yup.object({
	email: yup.string().required('O E-mail é obrigatório'),
	name: yup.string().required('O Nome é obrigatório'),
	password: yup.string().required('A senha é obrigatória'),
	confirmPassword: yup.string().required('A confirmação de senha é obrigatória'),
}).required()

export default function CreateUser() {
	const router = useRouter()
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateUserFormData>({
		resolver: yupResolver(CreateUserFormSchema)
	})

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
		router.push('/users')
	}

	return (
		<Box>
			<Header />

			<Flex as={'form'} onSubmit={handleSubmit(handleCreateUser)} w={'100%'} my={6} maxW={1480} mx={'auto'} px={6}>
				<Sidebar />

				<Box flex={1} borderRadius={8} bg={'gray.800'} p={8}>
					<Heading size={'lg'} fontWeight={'normal'}>Criar usuário</Heading>

					<Divider my={6} borderColor={'gray.700'} />

					<VStack spacing={8}>
						<SimpleGrid minChildWidth={'240px'} spacing={8} w={'100%'}>
							<Input
								name={'name'}
								label={'Nome completo'}
								register={register}
								error={errors.name}
							/>

							<Input
								name={'email'}
								type={'email'}
								label={'E-mail'}
								register={register}
								error={errors.email}
							/>
						</SimpleGrid>

						<SimpleGrid minChildWidth={'240px'} spacing={8} w={'100%'}>
							<Input
								name={'password'}
								type={'password'}
								label={'Senha'}
								register={register}
								error={errors.password}
							/>

							<Input
								name={'confirmPassword'}
								typeof={'password'}
								label={'Confirmação de senha'}
								register={register}
								error={errors.confirmPassword}
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt={8} justify={'flex-end'}>
						<HStack spacing={4}>
							<Link href={'/users'} passHref>
								<Button as='a' colorScheme={'whiteAlpha'}>Cancelar</Button>
							</Link>

							<Button type={'submit'} colorScheme={'pink'} isLoading={isSubmitting}>Salvar</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}