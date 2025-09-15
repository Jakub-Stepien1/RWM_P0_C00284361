<script lang="ts">
    import { cubes, sortNum } from '$lib/filters';
    let raw1 = '1 3 5 7 9 999';
    $: input1 = raw1.trim().split(/\s+/).filter(Boolean).map(Number);
    $: output1 = cubes(input1);
    let raw2 = '1 3 5 7 9 999';
    $: input2 = raw2.trim().split(/\s+/).filter(Boolean).map(Number);
    $: output2 = sortNum(input2);
</script>

<h1>Cube Filter Demo</h1>
<label>
    Input (space-separated integers)
    <input bind:value={raw1} placeholder="e.g., 4 3 2 1 0" />
</label>

<h2>Output</h2>
<p>{output1.join(' ')}</p>

<br>
<br>
<br>

<h1>Sort Filter Demo</h1>
<label>
    Input (space-separated integers)
    <input bind:value={raw2} placeholder="e.g., 4 3 2 1 0" />
</label>

<h2>Output</h2>
<p>{output2.join(' ')}</p>

<style>
    label { display: block; margin: 1rem 0;}
    input { width: 100%; max-width: 30rem;}
</style>