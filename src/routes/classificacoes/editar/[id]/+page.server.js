// TODO: Importar 'fail', 'redirect' e 'error' do '@sveltejs/kit'
// TODO: Importar ClassificacaoDAO e ClassificacaoModel

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    // TODO: Carregar os dados atuais da classificação
    // 1. Instancie o DAO.
    // 2. Pegue o ID que veio na URL através de 'params.id'.
    // 3. Busque a classificação pelo ID.
    // 4. Se a classificação não existir, dispare um erro 404 (throw error(404, 'Mensagem')).
    // 5. Retorne os dados encontrados para preencher o formulário no Svelte.
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, params }) => {
        // TODO: Atualizar a classificação
        // 1. Capture os dados do formulário e o ID da URL (params.id).
        
        try {
            // TODO: Criar modelo e chamar atualização
            // 1. Crie uma instância de ClassificacaoModel (lembre de converter o ID para Number).
            // 2. Use o método do DAO responsável por atualizar o registro.
        } 
        catch (erro) {
            // TODO: Tratamento de erro
            // Retorne fail(400) com a mensagem de erro e os valores tentados (values).
        }

        // TODO: Redirecionamento
        // Se der certo, redirecione para '/classificacoes'.
    }
};