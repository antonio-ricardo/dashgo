import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form'


interface InputProps extends ChakraInputProps {
	name: string
	label?: string
	register?: UseFormRegister<any>
	registerOptions?: RegisterOptions
	error?: FieldError
}


export const Input = ({ name, label, register, registerOptions, error, ...props }: InputProps) => {

	if (register) {
		const { ref, onChange } = register(name, registerOptions)

		return (
			<FormControl isInvalid={!!error}>
				{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

				<ChakraInput
					name={name}
					id={name}
					focusBorderColor={'pink.500'}
					bgColor={'gray.900'}
					variant={'filled'}
					_hover={{
						bgColor: 'gray.900'
					}}
					size='lg'
					ref={ref}
					onChange={onChange}
					{...props}
				/>

				{!!error && (
					<FormErrorMessage>
						{error.message}
					</FormErrorMessage>
				)}
			</FormControl>
		)
	}

	return (
		<FormControl>
			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

			<ChakraInput
				name={name}
				id={name}
				focusBorderColor={'pink.500'}
				bgColor={'gray.900'}
				variant={'filled'}
				_hover={{
					bgColor: 'gray.900'
				}}
				size='lg'
				{...props}
			/>
		</FormControl>
	)
}