import { redirect } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve })
{
    // recupera o cookie da sessão de login do usuário
    const cookieSessao = event.cookies.get('sessaoSistema');

    // !event.url.pathname.startsWith('/login') - Exclusão da página login
    if (!cookieSessao && !event.url.pathname.startsWith('/login'))
    {
        throw redirect(303, '/login');
    }

    // Evita que o usuário autenticado faça login novamente
    if (cookieSessao && event.url.pathname === '/login')
    {
        throw redirect(303, '/atividades');
    }

    if (cookieSessao)
    {
        event.locals.usuario = JSON.parse(cookieSessao);
    }

    const resposta = await resolve(event);

    return resposta;
}