<script lang="ts">
  export let label: string = 'Submit';
  export let variant: 'primary' | 'secondary' = 'primary';
</script>

<button class="btn" data-variant={variant} on:click={() => console.log('clicked')}>
    {label}
</button>

<style>
    .btn {
        padding: 0.5rem 1rem;
        color: white;
        border-radius: 0.375rem;
    }

    .btn[data-variant='primary'] {
        background: #2563eb;
    }

    .btn[data-variant='secondary'] {
        background: #6b7280;
    }

</style>