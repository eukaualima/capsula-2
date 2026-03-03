import { ClassificacaoDAO } from '$lib/server/DAO/ClassificacaoDAO';
import { GrupoDAO } from '$lib/server/DAO/GrupoDAO';
import { AtividadeDAO } from '$lib/server/DAO/AtividadeDAO';
import { AtividadeModel } from '$lib/model/AtividadeModel';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) 
{
    const classificacaoDao = new ClassificacaoDAO();
    const grupoDao = new GrupoDAO();

    try
    {
        const [classificacoes, grupos] = await Promise.all([
            classificacaoDao.buscarTodos(),
            grupoDao.buscarTodos()
        ]);

        return {
            classificacoes: JSON.parse(JSON.stringify(classificacoes)),
            grupos: JSON.parse(JSON.stringify(grupos))
        }
    }
    catch (error)
    {
        console.log(error);

        return { classificacoes: [], grupos: [], erro: "Erro ao carregar grupos e classificações." }
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const mes = data.get('mes');
        const ano = data.get('ano');
        const classificacao = data.get('classificacao');
        const grupoComposto = data.get('grupoComposto'); 
        const horas = data.get('horas');
        const qtdestudos = data.get('qtdestudos');
        const participou = data.get('participou');
        const observacao = data.get('observacao');

        const dao = new AtividadeDAO();

        try
        {
            if (!grupoComposto || !grupoComposto.includes('|'))
            {
                throw new Error("Selecione um grupo válido!");
            }

            // O grupo vem, por exemplo, 5|2 e precisamos separar ficando 5 e 2
            const [grupoEmpresa, grupoNumero] = grupoComposto.split('|');

            const novaAtividade = new AtividadeModel(
                null,
                Number(classificacao),
                Number(grupoEmpresa),
                Number(grupoNumero),
                mes,
                Number(ano),
                participou === 'on' ? 1 : 0,
                Number(horas),
                qtdestudos ? Number(qtdestudos) : null,
                observacao
            );

            await dao.criar(novaAtividade);
        }
        catch (error)
        {
            console.log(error);

            return fail(400, { erro: error.message, values: {mes, ano, classificacao, grupoComposto, horas, qtdestudos, participou, observacao} })
        }
    }
};