import { UsuarioDAO } from "$lib/server/DAO/UsuarioDAO";
import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions =
{
    default: async ({ request, cookies}) => 
    {
        const dadosFormulario = await request.formData();

        const emailDigitado = dadosFormulario.get('email');
        const senhaDigitada = dadosFormulario.get('senha');

        const dao = new UsuarioDAO();

        try 
        {
            const usuario = await dao.buscarPorEmail(emailDigitado);

            if (!(usuario.getSenha() === senhaDigitada))
            {
                return fail(401, { erro: 'E-mail ou senha incorretos.', email: emailDigitado });
            }

            const dadosSessao = JSON.stringify({ cpf: usuario.getCpf(), email: usuario.getEmail(), nome: usuario.getNome(), admin: usuario.getAdmin(), empresa: usuario.getEmpresa() });

            cookies.set('sessaoSistema', dadosSessao, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 12 // 12 horas
            });
        } 
        catch (error) 
        {
            console.error("Erro na autenticação do usuário: ", error);

            return fail(500, { erro: 'Ocorreu um erro inesperado ao tentar realizar a autenticação.', email: emailDigitado });
        }
    }
}