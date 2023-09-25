import { Factory, Model, createServer } from 'miragejs'
import faker from 'faker'
import { type } from 'os'

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
	const server = createServer({
		models: {
			user: Model.extend<Partial<User>>({}),
		},

		factories: {
			user: Factory.extend({
				name() {
					return faker.name.firstName()
				},
				email() {
					return faker.internet.email().toLowerCase()
				},
				createdAt() {
					return faker.date.recent(10)
				},
			}),
		},

		seeds(server) {
			server.createList('user', 53)
		},

		routes() {
			this.namespace = 'api'
			this.timing = 750

			this.get('/users', (schema, request) => {
				const { limit, offset } = request.queryParams

				const users = schema.all('user').models

				let usersToReturn = users

				if (limit && offset) {
					usersToReturn = users.slice(
						Number(offset),
						Number(limit) + Number(offset)
					)
				}

				return { users: usersToReturn, total: users.length }
			})
			this.post('/users')

			this.namespace = ''
			this.passthrough()
		},
	})

	return server
}
