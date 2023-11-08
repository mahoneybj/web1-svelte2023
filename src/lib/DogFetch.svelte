<script>
import { onMount } from 'svelte';
import { dogArray } from '$lib/index.js';


onMount(async () => {

    try {
      const response = await fetch('https://gist.githubusercontent.com/kastriotadili/acc722c9858189440d964db976303078/raw/ba63ffd45a76e54fd816ff471e9f3ac348e983b7/dog-breeds-data.json');
      if (response.ok) {
        let data = await response.json(); 
        dogArray.set(data);
        console.log($dogArray);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  });

</script>

<div class="card-row">
  {#each $dogArray.dogBreeds as breed}
    <div class="card">
      <div class="image">
        <img src={breed.photo} alt="Dog Photo" style="width:100%">
      </div>
      <div class="container">
        <h4><b>{breed.breed}</b></h4>
        <p>Temperament: {breed.temperament.join(', ')}</p>
      </div>
    </div>
  {/each}
</div>