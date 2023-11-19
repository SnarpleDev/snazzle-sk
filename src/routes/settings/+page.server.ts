import type { Actions } from './$types';

export const actions = {
    theme: async ({ request }) => {
        const data = await request.formData();
        const theme = data.get('theme');
        console.log(theme);
    }
} satisfies Actions