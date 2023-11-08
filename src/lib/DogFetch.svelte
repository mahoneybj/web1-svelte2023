<script>
import { onMount } from 'svelte';


onMount(async () => {

    try {
      const response = await fetch('https://gist.githubusercontent.com/kastriotadili/acc722c9858189440d964db976303078/raw/ba63ffd45a76e54fd816ff471e9f3ac348e983b7/dog-breeds-data.json');
      if (response.ok) {
        let data = await response.json(); 
        console.log(data);
        dogArray.set(data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  });

</script>

<div class="card-row">
  <div class="card">
    <div class="image">
    <img src="https://a.pinatafarm.com/671x680/c3c5aee140/homophobic-dog.jpg" alt="Avatar" style="width:100%">
    </div>
    <div class="container">
      <h4><b>Judging sausage</b></h4>
      <p>Strong gaydar</p>
    </div>
  </div>
</div>