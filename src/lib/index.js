import { writable, readable, derived } from "svelte/store";

export const dogArray = writable([]);

import { onMount } from 'svelte';


onMount(async () => {

    try {
      const response = await fetch('https://gist.githubusercontent.com/kastriotadili/acc722c9858189440d964db976303078/raw/ba63ffd45a76e54fd816ff471e9f3ac348e983b7/dog-breeds-data.json');
      if (response.ok) {
        data = await response.json(); 
        console.log(data);
        dogArray.set(data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  });

 function randomDog(){

 }

 export {randomDog};
