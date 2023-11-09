<script>
import { onMount } from 'svelte';
import { dogArray, dogImageLinks } from '$lib/index.js';

onMount(async () => {

    try {
      const response = await fetch('https://gist.githubusercontent.com/kastriotadili/acc722c9858189440d964db976303078/raw/ba63ffd45a76e54fd816ff471e9f3ac348e983b7/dog-breeds-data.json');
      if (response.ok) {
        let data = await response.json(); 
        dogArray.set(data);
        dogsFetched.set(true);
        console.log($dogArray);
        for (let i = 0; i < dogImageLinks.length; i++) {
          dogArray.update(arr => {
          arr.dogBreeds[i].photo = dogImageLinks[i];
          return arr;
        });
      }
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  });
  
</script>