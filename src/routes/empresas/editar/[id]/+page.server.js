// TODO: Importar 'fail', 'redirect' e 'error' do '@sveltejs/kit'
// TODO: Importar EmpresaDAO e EmpresaModel

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    // TODO: Carregar a empresa para edição
    // 1. Instancie o EmpresaDAO.
    // 2. Capture o ID da URL através do 'params.id'.
    
    try {
        // 3. Busque a empresa pelo ID.
        // 4. Validação: Se a empresa não for encontrada, dispare um erro 404: throw error(404, 'Mensagem');
        // 5. Retorne os dados da empresa (ex: { empresa: dadosEncontrados }).
    } 
    catch (erro) {
        // TODO: Tratamento de erro geral
        // Dispare um erro 500 com a mensagem da falha.
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, params }) => {
        // TODO: Atualizar dados da empresa
        // 1. Obtenha o formData da requisição.
        
        // 2. O ID da empresa não deve vir do formulário por segurança, pegue direto da URL (params.id).
        
        // 3. Extraia os campos 'nome', 'cidade' e 'estado' do formData.

        try {
            // TODO: Criar modelo e atualizar
            // 1. Crie a instância de EmpresaModel. 
            // Dica: O construtor espera um Number no ID. Converta o params.id usando Number(params.id).
            // 2. Chame o método de atualizar do EmpresaDAO.
        } 
        catch (erro) {
            // TODO: Tratamento de falha na validação/banco
            // Retorne fail(400) com a mensagem de erro.
            // IMPORTANTE: Retorne também os 'values' (nome, cidade, estado) que o usuário digitou, 
            // para que a tela não seja resetada para o estado original do banco.
        }

        // TODO: Redirecionamento
        // Se a atualização for bem sucedida, redirecione (throw redirect) para '/empresas'.
    }
};