import { AtividadeDAO } from "$lib/server/DAO/AtividadeDAO";
import { ClassificacaoDAO } from "$lib/server/DAO/ClassificacaoDAO";
import { GrupoDAO } from "$lib/server/DAO/GrupoDAO";

import { fail } from "@sveltejs/kit";

/*** @type {import('./$types').PageServerLoad} */
export async function load({ params })
{
    const daoAtividade = new AtividadeDAO();
    const daoClassificacao = new ClassificacaoDAO();
    const daoGrupo = new GrupoDAO();
    const id = params.id;

    try
    {
        const [atividade, classificacoes, grupos] = await Promise.all([
            daoAtividade.buscarPorId(id),
            daoClassificacao.buscarTodos(),
            daoGrupo.buscarTodos()
        ]);

        if (!atividade)
        {
            throw error(404, 'Atividade não encontrada. Verifique o ID.');
        }

        return {
            atividade: JSON.parse(JSON.stringify(atividade)),
            classificacoes: JSON.parse(JSON.stringify(classificacoes)),
            grupos: JSON.parse(JSON.stringify(grupos)) 
        }
    }
    catch (erro)
    {
        console.log(erro);

        return {
            erro: `Erro ao encontrar atividade: ${erro}`
        }
    }
}

/*** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request, params}) => {
        const data = await request.formData();
        const id = params.id;

        const mes = data.get('mes');
        const ano = data.get('ano');
        const classificacao = data.get('classificacao');
        const grupoComposto = data.get('grupoComposto'); 
        const horas = data.get('horas');
        const qtdestudos = data.get('qtdestudos');
        const participou = data.get('participou');
        const observacao = data.get('observacao');

        // puxa o dao

        // instacia a classe Model de atividades

        // dao.atualizar()

        // trata o erro, caso ocorra
    }
}