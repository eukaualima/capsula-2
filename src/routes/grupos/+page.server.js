// TODO: Importar GrupoDAO, EmpresaDAO e fail

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    // TODO: Buscar listas no banco
    // 1. Instancie o GrupoDAO e o EmpresaDAO.
    
    try {
        // Dica: Como precisamos das duas listas (Grupos e Empresas), 
        // use 'await Promise.all([ ... ])' para buscar ambas ao mesmo tempo em vez de uma depois da outra.
        
        // TODO: Mesclar os dados
        // 1. Itere sobre a lista de grupos (ex: usando .map).
        // 2. Para cada grupo, procure a empresa correspondente na lista de empresas (onde empresa.id === grupo.empresa).
        // 3. Adicione o 'nome' da empresa ao objeto do grupo para facilitar a exibição na tela.
        
        // 4. Retorne a lista de grupos completa.
    } 
    catch (erro) {
        // TODO: Retornar array vazio e a mensagem de erro.
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    deletar: async ({ request }) => {
        // TODO: Preparar exclusão com CHAVE COMPOSTA
        // 1. Obtenha o formData.
        // 2. Capture o id da 'empresa' e o 'numero' do grupo. Ambas formam a chave primária!
        // 3. Converta ambas para Number. Se faltar alguma, retorne fail(400).

        // 4. Instancie o GrupoDAO.

        try {
            // TODO: Chamar o método de exclusão
            // 1. Chame dao.apagar() passando a empresa e o numero.
            // 2. Retorne { sucesso: true }.
        } 
        catch (erro) {
            // TODO: Tratamento de Integridade (Erro 1451)
            // Se o código do erro for 1451, significa que este grupo possui "Atividades" vinculadas.
            // Retorne um fail(400) com uma mensagem explicando isso ao usuário.
            
            // Para outros erros, retorne fail(500).
        }
    }
};