<script>
    import ChecklistItem from "$lib/ChecklistItem.svelte";

    let items = [
        {id: 1, label: "Item 1", done: false},
        {id: 2, label: "Item 2", done: false},
        {id: 3, label: "Item 3", done: false},
        {id: 4, label: "Item 4", done: false},
        {id: 5, label: "Item 5", done: false},
    ]

    $: doneCount = 0;

    
    function handleChange(event)
    {
        const { id, done } = event.detail;
        const index = items.findIndex(i => i.id === id);

        if (index !== -1)
        {
            items[index] = { ...items[index], done };
            items = [...items]; 
        }
        doneCount = items.filter(i => i.done).length;
    }
</script>

<h1 data-testid="title">Progress Checklist</h1>

{#each items as item}
    <ChecklistItem {...item} on:change={handleChange} />
{/each}

<p>{doneCount}/{items.length} done</p>