<script>
    import { enhance } from '$app/forms';

    export let data;
    export let form;

    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

</script>

<div class="h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
    <h2>Editando a  Atividade #{data.atividade.id}</h2>
    <a href="/atividades"><p class="text-indigo-600">Voltar para a lista de atividades</p></a>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <form method="post" use:enhance>
            <label for="mes">Mês</label>
            <select name="mes" id="mes" required value={form?.values?.mes ?? data.atividade.mes}>
                <option value="">Selecione uma opção...</option>
                {#each meses as m}
                    <option value={m}>{m}</option>
                {/each}
            </select>
            <br>
            <br>
            <label for="ano">Ano</label>
            <input type="number" name="ano" id="ano" required value={form?.values?.ano ?? data.atividade.ano}>
            <br>
            <br>
            <!-- CTRL + SHIFT + SETA (pra cima ou pra baixo) -->
            <label for="classificacao">Classificação</label>
            <select name="classificacao" id="classificacao" required value={form?.values?.classificacao ?? data.atividade.classificacao}>
                <option value="">Selecione uma classificação...</option>
                {#each data.classificacoes as c}
                    <option value={c.id}>{c.nome}</option>
                {/each}
            </select>            
            <br>
            <br>
            <label for="grupoComposto">Grupo / Empresa</label>
            <select name="grupoComposto" id="grupoComposto" required value={form?.values?.grupoComposto ?? `${data.atividade.grupoEmpresa}|${data.atividade.grupoNumero}`}>
                <option value="">Selecione uma classificação...</option>
                {#each data.grupos as g}
                    <option value="{g.empresa}|{g.numero}">{g.nome}</option>
                {/each}
            </select>
            <br>
            <br>
            <label for="horas">Horas</label>
            <input type="number" name="horas" id="horas" value={form?.values?.horas ?? data.atividade.horas}>
            <br>
            <br>
            <label for="qtdestudos">Qtd. Estudos</label>
            <input type="number" name="qtdestudos" id="qtdestudos" value={form?.values?.qtdestudos ?? data.atividade.qtdestudos ?? ' '}>
            <br>
            <br>
            <label for="participou">Participação efetiva</label>
            <input type="checkbox" name="participou" id="participou" value={form?.values ? form.values.participou : (data.atividade.participou === 1)}>
            <br>
            <br>
            <label for="observacao">Observações</label>
            <textarea name="observacao" id="observacao">{form?.values?.observacao ?? data.atividade.observacao}</textarea>
            
            <button type="submit">Salvar alterações</button>
        </form>


    </div>
</div>