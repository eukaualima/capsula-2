import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export function GET({ cookies, locals })
{
    cookies.delete('sessaoSistema', { path: '/' });

    locals.usuario = null;
    
    throw redirect(303, '/login');
}