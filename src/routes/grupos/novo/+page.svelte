<script>
    import { enhance } from '$app/forms';
    
    // TODO: Receber a variável 'data' (contendo a lista de empresas vinda do load)
    // TODO: Receber a variável 'form' (contendo os erros vindo da action)
</script>

<div>
    <form> <div>
            <label for="empresa">Empresa Vinculada</label>
            <select name="empresa" id="empresa" required>
                <option value="">Selecione a empresa...</option>
                </select>
        </div>

        <div>
            <label for="numero">Número do Grupo</label>
            <input type="number" name="numero" id="numero" required min="1">
        </div>

        <div>
            <label for="nome">Nome do Grupo</label>
            <input type="text" name="nome" id="nome" required>
        </div>

        </form>
</div>