import { Box, Stack, Text } from '@chakra-ui/react'
import { PaginationButton } from './PaginationButton'

interface PaginataionProps {
	total: number
	limit: number
	offset: number
	setOffset: (offset: number) => void
}

export function Pagination({ total, limit, offset, setOffset }: PaginataionProps) {
	const page = offset / limit + 1
	const lastPage = Math.ceil(total / limit)
	const penultimatePage = lastPage - 1
	const pageIsHigherThanThree = page > 3
	const isLastPage = page === lastPage
	const isPenultimatePage = page === penultimatePage

	let pageNumbers = [1, 2, 3, 4]

	if (pageIsHigherThanThree) {
		pageNumbers = [page - 1, page, page + 1]
	}

	if (isPenultimatePage) {
		pageNumbers = [page - 2, page - 1, page, page + 1]
	}

	if (isLastPage) {
		pageNumbers = [page - 3, page - 2, page - 1, page]
	}

	return (
		<Stack
			direction={'row'}
			mt={8}
			spacing={6}
			align={'center'}
			justify={'space-between'}
		>

			<Box>
				<strong>{offset}</strong> - <strong>{isLastPage ? total : offset + limit}</strong> de <strong>{total}</strong>
			</Box>

			<Stack
				direction={'row'}
				spacing={2}
			>
				{pageIsHigherThanThree && (
					<>
						<PaginationButton buttonNumber={1} isCurrent={page === 1} setOffset={setOffset} limit={limit} />

						<Text color={'pink.500'} fontSize={'xl'}>...</Text>
					</>
				)}

				{pageNumbers.map((pageNumber) =>
					(
						<PaginationButton buttonNumber={pageNumber} isCurrent={pageNumber === page} setOffset={setOffset} limit={limit} />
					)
				)}

				{page < penultimatePage &&
					<>
						<Text color={'pink.500'} fontSize={'xl'}>...</Text>

						<PaginationButton buttonNumber={lastPage} isCurrent={page === lastPage} setOffset={setOffset} limit={limit} />
					</>
				}
			</Stack>
		</Stack>
	)
}