<script lang="ts">
  import { itemsStore } from "$lib/stores/checklist";
  import type { Item } from "$lib/stores/checklist";

  export let id: number;
  export let label: string;
  export let done: boolean;

  function toggle(event: Event) {
    const target = event.target as HTMLInputElement;
    itemsStore.update(items =>
      items.map(item =>
        item.id === id ? { ...item, done: target.checked } : item
      )
    );
  }
</script>

<label>
  <input type="checkbox" bind:checked={done} on:change={toggle} />
  {label}
</label>