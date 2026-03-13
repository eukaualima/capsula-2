import { fail, redirect } from '@sveltejs/kit';
// TODO: Importar UsuarioDAO, EmpresaDAO e UsuarioModel

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    // TODO: Buscar lista de empresas para o <select> do formulário
    // 1. Instanciar o EmpresaDAO
    // 2. Usar um bloco try/catch
    // 3. No try, buscar todas as empresas e retornar no formato: { empresas: listaDeEmpresas }
    // 4. No catch, registrar o erro no console e retornar { empresas: [] }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        // TODO: Extrair dados do formulário
        // 1. Obter o formData da requisição

        // TODO: Tratar os dados recebidos
        // 1. Pegar o CPF e limpar a formatação (remover pontos e traços, deixando só números)
        // 2. Pegar nome, email e telefone
        // 3. Pegar o ID da empresa e converter para número (Number)
        // 4. Verificar o checkbox de admin (lembre-se: HTML envia 'on' se marcado, ou null se desmarcado. Converta para 1 ou 0)

        // TODO: Instanciar DAO e preparar salvamento
        // 1. Instanciar UsuarioDAO
        
        try {
            // TODO: Criar a instância do UsuarioModel
            
            // 2. Chamar o método criar() do DAO passando o modelo criado
        } 
        catch (erro) {
            // TODO: Tratamento de Erros
            // 1. Verificar se o erro é de duplicidade no banco (erro.code === 'ER_DUP_ENTRY')
            // Se for duplicidade, retornar um fail(400) com uma mensagem (ex: "CPF ou E-mail já cadastrado") 
            // e devolver os values preenchidos para não limpar a tela do usuário.
            
            // 2. Retornar um fail(400) genérico para outros erros, também devolvendo os values.
        }

        // TODO: Redirecionamento
        // Se o try for executado com sucesso, redirecionar (throw redirect) o usuário para a lista '/usuarios'
    }
};