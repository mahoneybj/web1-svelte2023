<script>
    import { randomDog } from '$lib/index.js';
    import { onMount } from 'svelte/store';

    let dog;

    onMount(() => {
        dog = randomDog();
  });
</script>

