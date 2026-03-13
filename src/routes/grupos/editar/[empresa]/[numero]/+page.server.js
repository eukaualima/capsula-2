// TODO: Importar 'fail', 'redirect' e 'error' do '@sveltejs/kit'
// TODO: Importar GrupoDAO, EmpresaDAO e GrupoModel

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    // TODO: Carregar os dados do Grupo e a lista de Empresas
    // 1. Instancie GrupoDAO e EmpresaDAO.
    // 2. Extraia os parâmetros da URL: params.empresa e params.numero (converta ambos para Number).

    try {
        // 3. Busque o grupo usando o método do DAO que busca pela chave composta.
        // 4. Busque a lista de todas as empresas (para podermos exibir o nome da empresa na tela).
        
        // 5. Validação: Se o grupo não existir, dispare um erro 404: throw error(404, 'Mensagem')
        
        // 6. Retorne um objeto com 'grupo' e 'empresas'.
    } 
    catch (erro) {
        // TODO: Disparar erro 500 informando falha ao carregar os dados.
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, params }) => {
        // TODO: Processar a atualização
        // 1. Pegue o formData da requisição.
        
        // 2. REGRA DE NEGÓCIO: A chave primária (empresa e numero) JAMAIS deve vir do formulário. 
        // Extraia-as diretamente da URL (params.empresa e params.numero) e converta para Number.
        
        // 3. Extraia o campo 'nome' do formData (único campo que o usuário pode alterar).

        // 4. Instancie o GrupoDAO.

        try {
            // TODO: Criar modelo e atualizar
            // 1. Instancie o GrupoModel passando a empresa, numero e o novo nome.
            // 2. Chame o método atualizar() do DAO.
        } 
        catch (erro) {
            // TODO: Tratamento de erro
            // Retorne fail(400) com a mensagem de erro e os 'values' (nome) para manter o que foi digitado.
        }

        // TODO: Redirecionamento
        // Redirecione (throw redirect) para a rota '/grupos'.
    }
};