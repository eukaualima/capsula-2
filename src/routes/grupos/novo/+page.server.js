// TODO: Importar 'fail' e 'redirect' do '@sveltejs/kit'
// TODO: Importar GrupoDAO, EmpresaDAO e GrupoModel

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    // TODO: Carregar empresas para o select do Svelte
    // 1. Instancie o EmpresaDAO.
    // 2. Busque todas as empresas.
    // 3. Retorne no formato: { empresas: listaDeEmpresas }
    // 4. Se der erro, retorne a lista vazia.
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        // TODO: Obter os dados do formulário
        // 1. Pegar o formData.
        // 2. Extrair 'empresa' (lembre de converter para Number), 'numero' (converter para Number) e 'nome'.

        // TODO: Instanciar DAO
        // 1. Instancie o GrupoDAO.

        try {
            // TODO: Salvar o Grupo
            // 1. Crie uma nova instância de GrupoModel passando os 3 parâmetros.
            // 2. Chame o método criar() do DAO.
        } 
        catch (erro) {
            // TODO: Tratamento de Erro - DUPLICIDADE
            // Se o usuário tentar cadastrar um grupo com o mesmo NÚMERO em uma mesma EMPRESA, 
            // o banco de dados vai chiar (erro.code === 'ER_DUP_ENTRY').
            
            // 1. Verifique se o código do erro é ER_DUP_ENTRY.
            // 2. Se for, retorne fail(400) com uma mensagem amigável (ex: "Este número já existe para esta empresa.")
            // 3. Para outros erros, retorne fail(400) genérico.
            
            // IMPORTANTE: Em AMBOS os retornos de fail, passe o objeto 'values' com os 
            // dados que o usuário digitou (empresa, numero e nome) para preencher a tela novamente.
        }

        // TODO: Redirecionamento
        // Se salvar com sucesso, redirecione (throw redirect) para a rota '/grupos'.
    }
};