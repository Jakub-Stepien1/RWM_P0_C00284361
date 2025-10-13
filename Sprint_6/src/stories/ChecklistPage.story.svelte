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

<div class="checklist-container">
  <h1 data-testid="title">Progress Checklist</h1>

  <!-- Live checklist (reactive store data) -->
  {#each $itemsStore as item (item.id)}
    <ChecklistItem {...item} />
  {/each}

  <button on:click={submitProgress}>Submit Progress</button>

  <p>{submittedCount}/{$itemsStore.length} ({submittedPercent}%)</p>
</div>

<style>
  .checklist-container {
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  button {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    background: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background: #0052a3;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
</style>