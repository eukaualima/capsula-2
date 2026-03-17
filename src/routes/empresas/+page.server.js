import { EmpresaDAO } from '../../lib/server/DAO/EmpresaDAO';
import { GrupoDAO } from '../../lib/server/DAO/GrupoDAO';
import { fail } from '@sveltejs/kit';    
// TODO: Importar EmpresaDAO, GrupoDAO e fail

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const dao = new EmpresaDAO();
    
    try{
        const listasEmpresas = await dao.buscarTodos();

        return {
            listaEmpresas: JSON.parse(JSON.stringify(listasEmpresas)),
            erro: null
        };
    }
    catch(erro){
        console.log(erro);

        return {
            listaEmpresas: [],
            erro: `Erro ao carregar a lista: ${erro}`
        };  
    }

    // TODO: Buscar lista de empresas
    // 1. Instanciar o EmpresaDAO.
    // 2. Buscar todas as empresas.
    // 3. Retornar um objeto com a 'listaEmpresas' (ou um array vazio em caso de erro).
}

/** @type {import('./$types').Actions} */
export const actions = {
    deletar: async ({ request }) => {
        const data = await request.formData();
        const id = data.get ('id');
        const dao = new EmpresaDAO();
        // TODO: Preparar exclusão
        // 1. Capturar os dados do formulário e pegar o 'id' da empresa.
        // 2. Instanciar o EmpresaDAO.

        try {
            await dao.apagar(id);
            return { sucesso: true };
            // TODO: Tentar excluir
            // 1. Chamar o método para apagar a empresa pelo ID.
            // 2. Se der certo, retornar { sucesso: true }.
        } 
        catch (erro) {
            if (erro.errrno === 1451){
                const grupoDAO = new grupoDAO();
                const gruposVinculados = await grupoDAO.buscarporEmpresa(id);

                return fail(400, { erro: "Não é possível excluir a empresa porque ela possui grupos vinculados.", grupos: JSON.parse(JSON.stringify(gruposVinculados)) });

                console.log(erro);

            return fail((500,  { erro: `Erro ao excluir: ${erro.message}` }));
            }
            // TODO: Tratar o erro de integridade referencial (Empresa possui Grupos)
            // 1. Verifique se o código do erro é 1451 (erro.errno === 1451).
            // 2. Se for 1451:
            //    - Instancie o GrupoDAO.
            //    - Busque os grupos vinculados a essa empresa (buscarPorEmpresa).
            //    - Retorne um fail(400) enviando a mensagem de erro E a lista de grupos encontrada.
            //      Ex: return fail(400, { erro: "Mensagem", grupos: listaDeGruposEncontrados });
            
            // 3. Se for outro erro, retorne um fail(500) genérico.
        }
    }
};