<script>
    import { enhance } from '$app/forms';
    
    // TODO: Declarar a variável que recebe os retornos de erro da action (ex: export let form)
</script>

<div class="h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Nova Classificação</h2>
        <p class="mt-2 text-center text-sm">
            <a href="/classificacoes" class="font-medium text-indigo-600 hover:text-indigo-500">&larr; Voltar para a Lista</a>
        </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow-xl sm:rounded-xl sm:px-10 border border-gray-100">
            
            <form class="space-y-6">
                <div>
                    <label for="nome" class="block text-sm font-medium text-gray-700">Nome da Classificação</label>
                    <div class="mt-1">
                        <input type="text" id="nome" required 
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                </div>

                <div class="pt-2">
                    <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all">
                        Salvar Dados
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>