<script>
    import { createEventDispatcher } from "svelte";
    export let id;
    export let label;
    export let done = false;

    const dispatch = createEventDispatcher();

    function toggle() 
    {
        dispatch('change', { id, done });
    }
</script>

<label>
    <input type="checkbox" bind:checked={done} on:change={toggle} />
    {label}
</label>