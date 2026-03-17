import { fail, redirect, error } from '@sveltejs/kit';
import { EmpresaDAO } from '../../../lib/server/DAO/EmpresaDAO';
import { EmpresaModel } from '../../../lib/server/Models/EmpresaModel';
// TODO: Importar 'fail', 'redirect' e 'error' do '@sveltejs/kit'
// TODO: Importar EmpresaDAO e EmpresaModel

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const dao = new EmpresaDAO();
    const id = Number(params.id);

    // TODO: Carregar a empresa para edição
    // 1. Instancie o EmpresaDAO.
    // 2. Capture o ID da URL através do 'params.id'.
    
    try {
        const empresa = await dao.buscarPorId(id);

        if(!empresa){
            throw error(404, 'empresa não encontrada');
        }
        return { empresa: JSON.parse(JSON.stringify(empresa)) };
        // 3. Busque a empresa pelo ID.
        // 4. Validação: Se a empresa não for encontrada, dispare um erro 404: throw error(404, 'Mensagem');
        // 5. Retorne os dados da empresa (ex: { empresa: dadosEncontrados }).
    } 
    catch (erro) {
        console.log(erro);
        throw error(500, `Erro ao carregar a empresa: ${erro.message}`);
        // TODO: Tratamento de erro geral
        // Dispare um erro 500 com a mensagem da falha.
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();
        const id = params.id;

        const nome = data.get('nome');
        const cidade = data.get('cidade');
        const estado = data.get('estado');
        // TODO: Atualizar dados da empresa
        // 1. Obtenha o formData da requisição.
        
        // 2. O ID da empresa não deve vir do formulário por segurança, pegue direto da URL (params.id).
        
        // 3. Extraia os campos 'nome', 'cidade' e 'estado' do formData.

        try {
            const metodoatualizar = new EmpresaModel(Number(params.id), nome, cidade, estado);
            const dao = new EmpresaDAO();
            await dao.atualizar(metodoatualizar);
            // TODO: Criar modelo e atualizar
            // 1. Crie a instância de EmpresaModel. 
            // Dica: O construtor espera um Number no ID. Converta o params.id usando Number(params.id).
            // 2. Chame o método de atualizar do EmpresaDAO.
        } 
        catch (erro) {
            return fail(400, { erro: `Erro ao atualizar a empresa: ${erro.message}`, values: { nome, cidade, estado } });
            // TODO: Tratamento de falha na validação/banco
            // Retorne fail(400) com a mensagem de erro.
            // IMPORTANTE: Retorne também os 'values' (nome, cidade, estado) que o usuário digitou, 
            // para que a tela não seja resetada para o estado original do banco.
        }
        throw redirect(303, '/empresas');

        // TODO: Redirecionamento
        // Se a atualização for bem sucedida, redirecione (throw redirect) para '/empresas'.
    }
};