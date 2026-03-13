<script>
    import { enhance } from '$app/forms';
    import { invalidateAll } from '$app/navigation';

    export let data;

    // TODO: Criar variáveis de estado para o Modal (ex: modalAberto, idParaExcluir)

    // TODO: Criar funções para manipular o Modal (abrirModal e fecharModal)

    // TODO (Extra): Criar função para fechar o modal caso o usuário aperte a tecla "Escape(ESC)"
</script>

<div class="h-full py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto">
        
        <div class="md:flex md:items-center md:justify-between mb-8">
            <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Gestão de Classificações
                </h2>
                <p class="mt-1 text-sm text-gray-500">
                    Gerencie os tipos e categorias do sistema.
                </p>
            </div>
            <div class="mt-4 flex md:mt-0 md:ml-4">
                <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all">
                    Nova Classificação
                </a>
            </div>
        </div>

        <div class="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
            <div class="p-6">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 rounded-tl-lg">ID</th>
                            <th scope="col" class="px-6 py-3">Nome da Classificação</th>
                            <th scope="col" class="px-6 py-3 text-center rounded-tr-lg">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        </tbody>
                </table>
            </div>
        </div>
    </div>

    </div>