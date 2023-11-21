import type { Actions } from './$types';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const feedback = data.get('feedback');

        console.log(feedback?.toString().replace(/\n/g, " "));
    }
} satisfies Actions
