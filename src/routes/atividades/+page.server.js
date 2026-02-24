import { AtividadeDAO } from "$lib/server/DAO/AtividadeDAO";
import { fail } from "@sveltejs/kit";

/*** @type {import('./$types').PageServerLoad} */
export async function load()
{
    const dao = new AtividadeDAO();

    try
    {
        const lista = await dao.buscarTodos();

        // Todo o retorno é incorporado na variável "data" do +page.svelte
        return {
            lista: JSON.parse(JSON.stringify(lista)), // Serializando os dados
            erro: null
        };
    }
    catch (erro)
    {
        console.log(erro);

        return {
            lista: [],
            erro: `Erro ao carregar a lista: ${erro}`
        }
    }
}

/*** @type {import('./$types').Actions} */
export const actions =
{
    deletar: async ({ request }) =>
    {
        const data = await request.formData();
        const id = data.get('id');

        if (!id)
        {
            return fail(400, { erro: 'ID inválido para exclusão.' });
        }

        const dao = new AtividadeDAO();

        try
        {
            await dao.apagar(id);
            
            return { sucesso: true };
        }
        catch (erro)
        {
            console.log(erro);

            return fail(500, { erro: `Erro ao excluir: ${erro.message}` });
        }
    }
}