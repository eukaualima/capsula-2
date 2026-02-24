<script>
    import { enhance } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
    
    export let data;

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

