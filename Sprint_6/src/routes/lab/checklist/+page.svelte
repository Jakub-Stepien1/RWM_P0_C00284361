<script lang="ts ">
  import ChecklistItem from "$lib/ChecklistItem.svelte";

  let items = [
    { id: 1, label: "Item 1", done: false },
    { id: 2, label: "Item 2", done: false },
    { id: 3, label: "Item 3", done: false },
    { id: 4, label: "Item 4", done: false },
    { id: 5, label: "Item 5", done: false }
  ];

  let liveStates = items.map(i => ({ ...i }));
  let submittedCount = 0;

  $: total = items.length;
  $: percentage = Math.round((submittedCount / total) * 100);

  function handleChange(event) {
    const { id, done } = event.detail;
    const index = liveStates.findIndex(i => i.id === id);
    if (index !== -1) {
      liveStates[index] = { ...liveStates[index], done };
      liveStates = [...liveStates]; // trigger reactivity
    }
  }

  function submitProgress() {
    submittedCount = liveStates.filter(i => i.done).length;
  }
</script>

<h1 data-testid="title">Progress Checklist</h1>

{#each liveStates as item (item.id)}
  <ChecklistItem {...item} on:change={handleChange} />
{/each}

<button on:click={submitProgress}>Submit Progress</button>

<p>{submittedCount}/{total} ({percentage}%)</p>