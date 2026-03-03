import { fail, redirect, error } from '@sveltejs/kit';
import { AtividadeDAO } from '$lib/server/DAO/AtividadeDAO';
import { ClassificacaoDAO } from '$lib/server/DAO/ClassificacaoDAO';
import { GrupoDAO } from '$lib/server/DAO/GrupoDAO';
import { AtividadeModel } from '$lib/model/AtividadeModel';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const atividadeDAO = new AtividadeDAO();
    const classificacaoDAO = new ClassificacaoDAO();
    const grupoDAO = new GrupoDAO();
    const id = params.id;

    try {
        const [atividade, classificacoes, grupos] = await Promise.all([
            atividadeDAO.buscarPorId(id),
            classificacaoDAO.buscarTodos(),
            grupoDAO.buscarTodos()
        ]);

        if (!atividade) {
            throw error(404, 'Atividade não encontrada');
        }

        return {
            atividade: JSON.parse(JSON.stringify(atividade)),
            classificacoes: JSON.parse(JSON.stringify(classificacoes)),
            grupos: JSON.parse(JSON.stringify(grupos))
        };
    } catch (erro) {
        console.error(erro);
        throw error(500, "Erro ao carregar dados: " + erro.message);
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();
        const id = params.id; // O ID vem da URL
        
        // 1. Captura os campos
        const mes = data.get('mes');
        const ano = data.get('ano');
        const classificacao = data.get('classificacao');
        const grupoComposto = data.get('grupoComposto'); 
        const horas = data.get('horas');
        const qtdestudos = data.get('qtdestudos');
        const participou = data.get('participou');
        const observacao = data.get('observacao');

        const dao = new AtividadeDAO();

        try {
            if (!grupoComposto || !grupoComposto.includes('|')) {
                throw new Error("Selecione um Grupo válido.");
            }
            const [grupoEmpresa, grupoNumero] = grupoComposto.split('|');

            // 2. Instancia o Model (AGORA COM ID)
            const atividadeAtualizada = new AtividadeModel(
                Number(id),                         // ID da URL
                Number(classificacao),
                Number(grupoEmpresa),
                Number(grupoNumero),
                mes,
                Number(ano),
                participou === 'on' ? 1 : 0,
                horas ? Number(horas) : null,
                qtdestudos ? Number(qtdestudos) : null,
                observacao
            );

            // 3. Atualiza no banco
            await dao.atualizar(atividadeAtualizada);

        } catch (erro) {
            return fail(400, {
                erro: erro.message,
                values: { mes, ano, classificacao, grupoComposto, horas, qtdestudos, participou, observacao }
            });
        }

        throw redirect(303, '/atividades');
    }
};