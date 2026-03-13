<script>
    import { enhance } from '$app/forms';
    import { invalidateAll } from '$app/navigation';

    export let data;
    // TODO: Receber a variável 'form'
    
    // TODO: Controle do Modal com Chave Composta
    let modalAberto = false;
    let grupoParaExcluir = null; 

    // TODO: Criar função abrirModal(empresa, numero)
    // TODO: Criar função fecharModal()
    // TODO: Criar função para capturar o "Escape (ESC)" no teclado
</script>

<div>
    <table>
        <thead>
            <tr>
                <th>Empresa</th>
                <th>Nº Grupo</th>
                <th>Nome do Grupo</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            </tbody>
    </table>

    </div>