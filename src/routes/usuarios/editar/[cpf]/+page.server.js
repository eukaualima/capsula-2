// TODO: Importar 'fail', 'redirect' e 'error' do '@sveltejs/kit'
// TODO: Importar UsuarioDAO, EmpresaDAO e UsuarioModel

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    // TODO: Carregar usuário e lista de empresas
    // 1. Instanciar UsuarioDAO e EmpresaDAO.
    // 2. Capturar o CPF da URL através do 'params.cpf'.
    
    try {
        // 3. Buscar o usuário específico no banco usando o CPF.
        // 4. Buscar a lista de todas as empresas (para popular o <select> no frontend).
        
        // 5. Se o usuário não for encontrado, dispare um erro 404: throw error(404, 'Mensagem');
        
        // 6. Retorne um objeto contendo 'usuario' e 'empresas'.
    } 
    catch (erro) {
        // TODO: Tratamento de erro geral
        // Dispare um erro 500 com a mensagem da falha.
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, params }) => {
        // TODO: Atualizar dados do usuário
        // 1. Obtenha o formData da requisição.
        
        // Dica: Na edição, o CPF (Chave Primária) não muda. 
        // Em vez de pegá-lo do formulário, pegue-o direto da URL (params.cpf).
        
        // 2. Extraia os outros campos: nome, email, telefone, senha e empresa.
        // Lembre-se de converter o ID da empresa para Number.
        
        // 3. Extraia e trate o checkbox de admin (se vier 'on', converta para 1, senão 0).

        try {
            // TODO: Criar modelo e atualizar
            // 1. Crie a instância de UsuarioModel com os dados recebidos.
            // 2. Chame o método atualizar() do UsuarioDAO.
        } 
        catch (erro) {
            // TODO: Tratamento de erro de validação
            // Retorne fail(400) com a mensagem de erro e um objeto 'values' 
            // contendo os dados que o usuário tentou enviar, para não limpar a tela.
        }

        // TODO: Redirecionamento
        // Redirecione (throw redirect) para a rota '/usuarios'.
    }
};