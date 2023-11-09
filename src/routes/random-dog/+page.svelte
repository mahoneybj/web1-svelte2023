<script>
    import { dogArray } from '$lib/index.js';


    let dogs = null;

    function randomDog(){
        const randomIndex = Math.floor(Math.random() * $dogArray.dogBreeds.length);
        const rand = $dogArray.dogBreeds[randomIndex];
        return rand;
 }


const myrandDog = randomDog();
console.log(myrandDog);

</script>


