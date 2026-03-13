<script>
    import { enhance } from '$app/forms';
    
    // TODO: Receber data e form
    
    // TODO: Lógica de Exibição
    // Como a chave primária guarda apenas o ID da empresa, faça um 'find' na lista de 
    // data.empresas para encontrar o nome da empresa atual e exibir para o usuário, 
    // assim ele não fica olhando apenas para um número solto.
</script>

<div>
    <form> <div>
            <label>Empresa Vinculada (Inalterável)</label>
            </div>

        <div>
            <label>Número do Grupo (Inalterável)</label>
            </div>

        <div>
            <label for="nome">Nome do Grupo</label>
            <input type="text" name="nome" id="nome" required>
        </div>

        </form>
</div>