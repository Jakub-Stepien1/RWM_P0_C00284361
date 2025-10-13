<script lang="ts">
  export let id: number;
  export let label: string;
  export let done: boolean;

  let checked = done;

  function toggle(event: Event) {
    const target = event.target as HTMLInputElement;
    checked = target.checked;
    console.log(`Item ${id} toggled to ${checked}`);
  }
</script>

<label>
  <input type="checkbox" bind:checked on:change={toggle} />
  {label}
</label>