<script>
    import { enhance } from '$app/forms';
    
    // TODO: Receber os dados do load (data) e os possíveis erros de action (form)

    // Função auxiliar para melhorar a exibição do CPF na tela
    function formatarCpfVisual(cpf) {
        if (!cpf) return "";
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
</script>

<div class="h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
    <div class="sm:mx-auto sm:w-full sm:max-w-2xl">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Editar Usuário
        </h2>
        <p class="mt-2 text-center text-sm font-medium text-gray-600">
            CPF: XXXXX
        </p>
        <p class="mt-2 text-center text-sm">
            <a href="/usuarios" class="font-medium text-indigo-600 hover:text-indigo-500">&larr; Voltar para a Lista</a>
        </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div class="bg-white py-8 px-4 shadow-xl sm:rounded-xl sm:px-10 border border-gray-100">
            
            <form class="space-y-6" method="POST" use:enhance>
                <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    
                    <div class="sm:col-span-6">
                        <label for="nome" class="block text-sm font-medium text-gray-700">Nome Completo</label>
                        <div class="mt-1">
                            <input type="text" name="nome" id="nome" required 
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium text-gray-700">E-mail Corporativo</label>
                        <div class="mt-1">
                            <input type="email" name="email" id="email" required 
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="telefone" class="block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                        <div class="mt-1">
                            <input type="text" name="telefone" id="telefone" required maxlength="11" 
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="empresa" class="block text-sm font-medium text-gray-700">Empresa Vinculada</label>
                        <div class="mt-1">
                            <select id="empresa" name="empresa" required class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border shadow-sm">
                                <option value="">Selecione a empresa...</option>
                                </select>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="senha" class="block text-sm font-medium text-gray-700">Senha de Acesso</label>
                        <div class="mt-1">
                            <input type="text" name="senha" id="senha" required 
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono text-indigo-600">
                        </div>
                    </div>
                </div>

                <div class="relative flex items-start pt-2">
                    <div class="flex items-center h-5">
                        <input id="admin" name="admin" type="checkbox" 
                            class="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded cursor-pointer">
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="admin" class="font-medium text-gray-700 cursor-pointer select-none">Acesso Administrador</label>
                        <p class="text-gray-500">Concede permissão total ao sistema.</p>
                    </div>
                </div>

                <div class="pt-4 border-t border-gray-100">
                    <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all">
                        Salvar Alterações
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>