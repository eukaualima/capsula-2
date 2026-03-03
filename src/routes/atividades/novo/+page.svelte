<script>
    import { enhance } from '$app/forms';

    export let data;
    export let form;

    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

</script>

<div class="container">
    <h2>Nova atividade</h2>
    <a href="/atividades">Voltar para a lista de atividades</a>

    <div class="content">
        {#if form?.erro }
            <div class="erro-box">
                {form.erro}
            </div>
        {/if}

        <form method="post" use:enhance>
            <div class="form-group">
                <label for="mes">Mês de referência</label>
                <select name="mes" id="mes" required>
                    <option value="">Selecione uma opção...</option>
                    {#each meses as m}
                        <option value={m} selected={form?.values?.mes === m}>{m}</option>
                    {/each}
                </select>
            </div>

            <div class="form-group">
                <label for="ano">Ano</label>
                <input type="number" name="ano" id="ano" required value={form?.values?.ano || new Date().getFullYear()}>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="classificacao">Classificação</label>
                    <select name="classificacao" id="classificacao" required>
                        <option value="">Selecione uma opção...</option>
                        {#each data.classificacoes as c}
                            <option value={c.id} selected={form?.values?.classificacao === c.id}>{c.nome}</option>
                        {/each}
                    </select>
                </div>
                <!-- CTRL + D -->
                <div class="form-group"> 
                    <label for="grupoComposto">Grupo</label>
                    <select name="grupoComposto" id="grupoComposto" required>
                        <option value="">Selecione uma opção...</option>
                        {#each data.grupos as g}
                            <option value={g.empresa}|{g.numero} selected={form?.values?.grupoComposto === `${g.empresa}|${g.numero}`}>{g.nome}</option>
                        {/each}
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="horas">Total de horas</label>
                    <input type="number" name="horas" id="horas" value={form?.values?.horas || ''}>
                </div>

                <div class="form-group">
                    <label for="qtdestudos">Qtd. estudos</label>
                    <input type="number" name="qtdestudos" id="qtdestudos" value={form?.values?.qtdestudos || ''}>
                </div>
            </div>

            <div class="form-group-inline">
                <label for="participou">Participação efetiva</label>
                <input type="checkbox" name="participou" id="participou" checked={form?.values?.participou}>
            </div>

            <div class="form-group">
                <label for="observacao">Observações</label>
                <textarea name="observacao" id="observacao" rows="3">{form?.values?.observacao || ''}</textarea>
            </div>

            <div class="form-group">
                <button type="submit">Salvar dados</button>
            </div>
        </form>
    </div>
</div>


<style>
    /* Centralização principal */
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
        font-family: sans-serif;
    }

    .header, .footer {
        text-align: center;
        margin-bottom: 2rem;
    }

    .footer {
        margin-top: 2rem;
        font-size: 0.875rem;
        color: #666;
    }

    /* Estrutura do formulário */
    .form-row {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .form-group {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    .form-group-inline {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    label {
        margin-bottom: 0.5rem;
        font-weight: bold;
        font-size: 0.9rem;
    }

    /* Bordas e estilo dos inputs */
    input[type="number"],
    select,
    textarea {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc; /* Borda simples */
        border-radius: 4px;     /* Cantos levemente arredondados */
        box-sizing: border-box;
    }

    /* Botão */
    button {
        width: 100%;
        padding: 0.75rem;
        background-color: #4f46e5;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
    }

    button:hover {
        background-color: #4338ca;
    }

    /* Caixa de erro */
    .erro-box {
        background-color: #fee2e2;
        color: #b91c1c;
        padding: 1rem;
        border: 1px solid #f87171;
        border-radius: 4px;
        margin-bottom: 1.5rem;
    }
</style>