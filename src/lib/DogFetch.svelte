<script>
  import { onMount } from "svelte";
  import { dogArray, dogImageLinks } from "$lib/index.js";

  let dogsFetched = false; //Allows dog cards to be printed to screen
  let selectedBreed = null; //Allows enlarged card to be shown on screen

  //OnMount async function that fetches json of dog breeds and infomation relating to them. If sucessful sets fetched data to dogArray, changes dogArray
  //photo link to that of dogImageLinks array.
  onMount(async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/kastriotadili/acc722c9858189440d964db976303078/raw/ba63ffd45a76e54fd816ff471e9f3ac348e983b7/dog-breeds-data.json"
      );
      if (response.ok) {
        let data = await response.json();
        dogArray.set(data);
        dogsFetched = true;
        console.log($dogArray);
        for (let i = 0; i < dogImageLinks.length; i++) {
          dogArray.update((arr) => {
            arr.dogBreeds[i].photo = dogImageLinks[i];
            return arr;
          });
        }
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  // Function that sets selectedBreed to passed breed
  function showDetails(breed) {
    selectedBreed = breed;
  }

  // Function that resets selectedBreed to nill when called
  function closeDetails() {
    selectedBreed = null;
  }
</script>

<div class="card-row">
  {#if dogsFetched} <!-- Runs when onMount async function sucessful -->
    {#each $dogArray.dogBreeds as breed} <!-- For each loop going through dogArray -->
      <div class="card" on:click={() => showDetails(breed)}> <!-- kn:click svelte function runs showDetails() when card is clicked -->
        <div class="image">
          <img src={breed.photo} alt="Dog Photo" style="width:100%" />
        </div>
        <div class="container">
          <h4><b>{breed.breed}</b></h4>
          <p>Temperament: {breed.temperament.join(", ")}</p>
          <p>Click for more details!</p>
        </div>
      </div>
    {/each}
  {/if}

  {#if selectedBreed != null}
    <!-- Runs selectedBreed() has a valid breed -->
    <div class="modal">
      <div class="enlarge-card">
        <h4><b>{selectedBreed.breed}</b></h4>
        <p>Origin: {selectedBreed.origin}</p>
        <p>Popularity: {selectedBreed.popularity}</p>
        <p>Temperament: {selectedBreed.temperament.join(", ")}</p>
        <p>Hypoallergenic: {selectedBreed.hypoallergenic}</p>
        <p>Intelligence: {selectedBreed.intelligence}</p>
        <div class="enlargeImage">
          <img src={selectedBreed.photo} alt="Dog Photo" style="width:100%" />
        </div>
        <button class="closeButton" on:click={closeDetails}>Close Details</button>
        <!-- Close details button when clicked runs closeDetails() function resetting selectedBreed to null -->
      </div>
    </div>
  {/if}
</div>
