// TODO: Importar 'fail' e 'redirect' do '@sveltejs/kit'
// TODO: Importar ClassificacaoDAO e ClassificacaoModel

export const actions = {
    default: async ({ request }) => {
        // TODO: Extrair os dados do formulário
        // 1. Obtenha o formData da requisição.
        // 2. Extraia o campo 'nome'.

        // TODO: Preparar a inserção no banco
        // 1. Instancie o ClassificacaoDAO.
        
        try {
            // TODO: Criar o modelo e salvar
            // 1. Crie uma nova instância de ClassificacaoModel. 
            // Dica: O construtor recebe (id, nome). Como é uma criação, o ID pode ser nulo.
            // 2. Chame o método do DAO para criar passando o modelo.
        } 
        catch (erro) {
            // TODO: Tratamento de erro
            // Retorne um fail(400) contendo a mensagem de erro e os valores (values) 
            // que o usuário digitou, para que a tela não seja apagada.
        }

        // TODO: Redirecionamento
        // Faça o redirecionamento (throw redirect) para a rota '/classificacoes'
    }
};