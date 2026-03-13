// TODO: Importar 'fail' e 'redirect' do '@sveltejs/kit'
// TODO: Importar EmpresaDAO e EmpresaModel

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        // TODO: Extrair dados do formulário
        // 1. Obter o formData() da requisição.
        // 2. Extrair os campos 'nome', 'cidade' e 'estado'.

        // TODO: Preparar inserção
        // 1. Instanciar o EmpresaDAO.

        try {
            // TODO: Criar a instância e salvar
            // 1. Instanciar o EmpresaModel. 
            // Dica: Como é uma criação, o ID deve ser passado como null (o banco de dados cuida do Auto Increment).
            // 2. Chamar o método de criar do DAO passando a nova empresa.
        } 
        catch (erro) {
            // TODO: Tratamento de Erro
            // Retornar um fail(400) com a mensagem de erro.
            // IMPORTANTE: Devolva também um objeto 'values' com os dados digitados (nome, cidade, estado) 
            // para que o Svelte preencha os inputs e o usuário não perca o progresso.
        }

        // TODO: Redirecionamento
        // Redirecionar (throw redirect) de volta para a rota '/empresas'.
    }
};