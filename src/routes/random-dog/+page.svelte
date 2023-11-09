<script>
    import { dogArray } from '$lib/index.js';
    import { onMount } from 'svelte';

    let myrandDog;

    function getRandomDog() {
        const randomIndex = Math.floor(Math.random() * $dogArray.dogBreeds.length);
        const rand = $dogArray.dogBreeds[randomIndex];
        return rand;
    }


    myrandDog = getRandomDog();
    console.log(myrandDog);





</script>

<div class="random-header">
    <p>You're random dog is a {myrandDog.breed}!</p>
</div>

<div class="card-row">
        <div class="card">
          <div class="image">
            <img src={myrandDog.photo} alt="Dog Photo" style="width:100%">
          </div>
          <div class="container">
            <h4><b>{myrandDog.breed}</b></h4>
            <p>Origin: {myrandDog.origin}</p>
            <p>Popularity: {myrandDog.popularity}</p>
            <p>Temperament: {myrandDog.temperament.join(', ')}</p>
            <p>Hypoallergenic: {myrandDog.hypoallergenic}</p>
            <p>Intelligence: {myrandDog.intelligence}</p>
          </div>
        </div>
</div>