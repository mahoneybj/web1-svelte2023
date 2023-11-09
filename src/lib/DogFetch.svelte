<script>
import { onMount } from 'svelte';
import { dogArray, dogImageLinks } from '$lib/index.js';

let dogsFetched = false;
let selectedBreed = null;

onMount(async () => {

    try {
      const response = await fetch('https://gist.githubusercontent.com/kastriotadili/acc722c9858189440d964db976303078/raw/ba63ffd45a76e54fd816ff471e9f3ac348e983b7/dog-breeds-data.json');
      if (response.ok) {
        let data = await response.json(); 
        dogArray.set(data);
        dogsFetched = true;
        console.log($dogArray);
        for(let i = 0; i < dogImageLinks.length; i++){
          $dogArray.dogBreeds.photo.set(dogImageLinks[i]);
        }
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  });

  function showDetails(breed) {
    selectedBreed = breed;
    console.log(selectedBreed);
  }

  function closeDetails() {
    selectedBreed = null;
  }
  


</script>

<div class="card-row">
  {#if dogsFetched}
    {#each $dogArray.dogBreeds as breed}
      <div class="card">
        <div class="image">
          <img src={breed.photo} alt="Dog Photo" style="width:100%">
        </div>
        <div class="container">
          <h4><b>{breed.breed}</b></h4>
          <p>Temperament: {breed.temperament.join(', ')}</p>
          <div class="more-button">
            <button class="more-details" on:click={() => showDetails(breed)}>More Details</button>
          </div>
        </div>
      </div>
    {/each}
  {/if}

  {#if selectedBreed != null}
    <div class="modal">
      <div class="enlarge-card">
        <h4><b>{selectedBreed.breed}</b></h4>
        <p>Origin: {selectedBreed.origin}</p>
        <p>Popularity: {selectedBreed.popularity}</p>
        <p>Temperament: {selectedBreed.temperament.join(', ')}</p>
        <p>Hypoallergenic: {selectedBreed.hypoallergenic}</p>
        <p>Intelligence: {selectedBreed.intelligence}</p>
        <img src={selectedBreed.photo} alt="Dog Photo" style="width:100%">
        <button on:click={closeDetails}>Close Details</button>
      </div>
    </div>
  {/if}
</div>