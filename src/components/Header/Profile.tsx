import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
	showProfileDate?: boolean
}

export function Profile({ showProfileDate = true }: ProfileProps) {
	return (
		<Flex
			align={'center'}
		>
			{
				showProfileDate && (
					<Box
						mr={4}
						textAlign={'right'}
					>
						<Text>
							Antonio Ricardo
						</Text>

						<Text
							color={'gray.300'}
							fontSize={'small'}
						>
							antonio.gugou@gmail.com
						</Text>
					</Box>
				)
			}

			<Avatar
				size={'md'}
				name={'Antonio Ricardo'}
				src={'https://github.com/antonio-ricardo.png'}
			/>

		</Flex>
	)

}