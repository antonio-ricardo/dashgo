import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/router'

type SignInFormData = {
	email?: string
	password?: string
}

const signInFormSchema = yup.object({
	email: yup.string().required('O E-mail é obrigatório'),
	password: yup.string().required('A senha é obrigatório'),
}).required()

export default function SignIn() {
	const router = useRouter()
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>({
		resolver: yupResolver(signInFormSchema)
	})

	const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
		router.push('/dashboard')
	}

	return (
		<Flex
			w={'100vw'}
			h={'100vh'}
			align={'center'}
			justify={'center'}
		>
			<Flex
				as={'form'}
				width={'100%'}
				maxWidth={'360'}
				bg={'gray.700'}
				p={8}
				borderRadius={8}
				flexDir={'column'}
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing={4}>

					<Input
						name={'email'}
						label={'E-mail'}
						type={'email'}
						register={register}
						error={errors.email}
					/>

					<Input
						name={'password'}
						label={'Senha'}
						type={'password'}
						register={register}
						error={errors.password}
					/>

				</Stack>

				<Button
					type={'submit'}
					mt={6}
					colorScheme={'pink'}
					isLoading={isSubmitting}
				>
					Entrar
				</Button>
			</Flex>
		</Flex >
	)
}
