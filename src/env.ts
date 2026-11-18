import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	ORIGIN: { schema: (input) => input ?? 'http://localhost:5173' },
	BETTER_AUTH_SECRET: {
		schema: (input) => {
			if (!input) throw new Error('expected a BETTER_AUTH_SECRET');
			return input;
		}
	},
	DATABASE_URL: {
		schema: (input) => {
			if (!input) throw new Error('expected a DATABASE_URL');
			return input;
		}
	}
});
