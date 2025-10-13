<script lang="ts">
  import ChecklistItem from "$lib/ChecklistItem.svelte";
  import { itemsStore, completedStore, percentStore } from "$lib/stores/checklist";
  import { get } from "svelte/store";

  // Submitted (visible) state snapshot
  let submittedCount = 0;
  let submittedPercent = 0;

  // Trigger submit: copy current derived store values into submitted vars
  function submitProgress() {
    submittedCount = get(completedStore);
    submittedPercent = get(percentStore);
  }
</script>

<h1 data-testid="title">Progress Checklist</h1>

<!-- Live checklist (reactive store data) -->
{#each $itemsStore as item (item.id)}
  <ChecklistItem {...item} />
{/each}

<button on:click={submitProgress}>Submit Progress</button>

<p>{submittedCount}/{$itemsStore.length} ({submittedPercent}%)</p>
