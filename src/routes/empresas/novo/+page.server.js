import { fail, redirect } from '@sveltejs/kit';
import { EmpresaDAO } from '../../../lib/server/DAO/EmpresaDAO';
import { EmpresaModel } from '../../../lib/server/Models/EmpresaModel';
// TODO: Importar 'fail' e 'redirect' do '@sveltejs/kit'
// TODO: Importar EmpresaDAO e EmpresaModel

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const nome = formData.get('nome');
        const cidade = formData.get('cidade');
        const estado = formData.get('estado');
        const dao = new EmpresaDAO();

        // TODO: Extrair dados do formulário
        // 1. Obter o formData() da requisição.
        // 2. Extrair os campos 'nome', 'cidade' e 'estado'.

        // TODO: Preparar inserção
        // 1. Instanciar o EmpresaDAO.

        try {

            const dao = new EmpresaDAO();
            const novaEmpresa = new EmpresaModel(null, nome, cidade, estado);
            await dao.criar(novaEmpresa);
            // TODO: Criar a instância e salvar
            // 1. Instanciar o EmpresaModel. 
            // Dica: Como é uma criação, o ID deve ser passado como null (o banco de dados cuida do Auto Increment).
            // 2. Chamar o método de criar do DAO passando a nova empresa.
        } 
        catch (erro) {
            console.log(erro);
            return fail(400, { erro: `Erro ao criar a empresa: ${erro.message}`, values: { nome, cidade, estado } });
            // TODO: Tratamento de Erro
            // Retornar um fail(400) com a mensagem de erro.
            // IMPORTANTE: Devolva também um objeto 'values' com os dados digitados (nome, cidade, estado) 
            // para que o Svelte preencha os inputs e o usuário não perca o progresso.
        }
        throw redirect(303, '/empresas');

        // TODO: Redirecionamento
        // Redirecionar (throw redirect) de volta para a rota '/empresas'.
    }
};