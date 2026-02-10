<script>
    import { enhance } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
    
    export let data;
</script>
<div>
        {#each data.lista as item (item.id)} 
            <p>ID: {item.id}</p>
            <p>CLASSIFICAÇÃO: {item.classificacao}</p>
            <p>MÊS: {item.mes}</p>
            <p>HORAS: {item.horas}</p>
            <p>OBSERVAÇÃO: {item.observacao}</p>
        {/each}
</div>
