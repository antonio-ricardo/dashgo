import { useQuery } from 'react-query'
import { api } from '../api'

interface useUsersProps {
  limit?: number;
  offset?: number;
}

export function useUsers({ limit, offset }: useUsersProps) {
	const url =
		limit !== undefined && offset !== undefined
			? `/users?limit=${limit}&offset=${offset}`
			: '/users'

	const queryInfo = useQuery(
		[
			'users',
			limit !== undefined && offset !== undefined
				? { limit, offset }
				: undefined,
		],
		async () => {
			const { data } = await api.get(url)

			return data
		},
		{ staleTime: 1000 * 10 }
	)

	return { ...queryInfo }
}
