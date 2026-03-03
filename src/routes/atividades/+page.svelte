<script>
    import { enhance } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
    
    export let data;

    let modalAberto = false;
    let idParaExcluir = null;

    function abrirModal(id)
    {
        idParaExcluir = id;
        modalAberto = true;
    }

    function fecharModal()
    {
        modalAberto = false;
        idParaExcluir = null;
    }

    function tratarTeclado(event)
    {
        if (event.key === "Escape" && modalAberto)
        {
            fecharModal();   
        }
    }

    console.log(data);
</script>
<div class="h-full py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen font-inter">
    <div class="max-w-7xl mx-auto">
        <div class="md:flex md:items-center md:justify-between mb-8">
            <table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>CLASSIFICAÇÃO</th>
                        <th>MÊS</th>
                        <th>HORAS</th>
                        <th>OBSERVAÇÃO</th>
                        <th>AÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    {#if data.lista && data.lista.length > 0}
                        {#each data.lista as item (item.id)} 
                            <tr>
                                <td class="px-6 py-4">#{item.id}</td>
                                <td class="px-6 py-4">{item.classificacao}</td>
                                <td class="px-6 py-4">{item.mes}</td>
                                <td class="px-6 py-4">{item.horas}</td>
                                <td class="px-6 py-4">{item.observacao ? item.observacao : 'Sem observações.'}</td>
                                <td class="px-6 py-4"><a href="/atividades/editar/{item.id}">✏️</a> <button type="button" on:click={() => abrirModal(item.id)}>Apagar</button></td>
                            </tr>
                        {/each}
                    {:else}
                        <tr>
                            <td>Lista de atividades vazia.</td>
                        </tr>
                    {/if}
                </tbody>
            </table>
        </div>
    </div>
</div>

{#if modalAberto}
    <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm"></div>
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-gray-100">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Excluir Atividade</h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            Tem certeza que deseja excluir este registro de atividade #{idParaExcluir}?
                                            Esta ação removerá o lançamento de horas permanentemente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <form action="?/deletar" method="post" use:enhance={() => {
                               return async ({result}) => {
                                    if(result.type == 'success')
                                    {
                                        await invalidateAll();
                                        fecharModal();
                                    }
                               } 
                            }}>
                                <input type="hidden" name="id" value={idParaExcluir}>
                                <button type="submit" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto transition-colors">
                                    Sim, Excluir
                                </button>
                            </form>
                            
                            <button type="button" on:click={fecharModal} class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto transition-colors">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/if}

