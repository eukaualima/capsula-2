import { UsuarioDAO } from '$lib/server/database/DAO/UsuarioDAO';

// TODO: Implementar a função load
export async function load() {
    // 1. Chamar o método do DAO que lista os usuários
    // 2. Retornar um objeto contendo a lista (ex: { usuarios: listaDeUsuarios })
}

// TODO: Implementar as actions da página
export const actions = {
    deletar: async ({ request }) => {
        // 1. Extrair os dados do formulário (FormData)
        // 2. Pegar o CPF enviado
        // 3. Chamar o método do DAO para deletar
        // 4. Retornar uma mensagem de sucesso ou erro
    }
};