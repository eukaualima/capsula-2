import { ClassificacaoDAO } from '$lib/server/database/DAO/ClassificacaoDAO';
import { fail } from '@sveltejs/kit';

export async function load() {
    // TODO: Buscar classificações
    // 1. Instancie o ClassificacaoDAO.
    // 2. Busque todos os registros no banco.
    // 3. Retorne um objeto com a 'listaClassificacoes'. Trate possíveis erros retornando a lista vazia e a mensagem de erro.
}

export const actions = {
    deletar: async ({ request }) => {
        // TODO: Excluir classificação
        // 1. Capture o 'id' enviado pelo formulário (formData).
        // 2. Valide se o ID existe (se não, retorne fail(400)).
        // 3. Use o DAO para apagar o registro.
        // 4. Retorne sucesso ou trate o erro (fail(500)).
    }
};