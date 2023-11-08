<script>
  import { randomDog } from "$lib/index.js";
</script>

<div class="Outer-box">
<div class="background">
  <h2>Dog</h2>
</div>
<div class="random-button-area">
  <div class="random-button">
      <button class="random-dog" on:click={() => randomDog()}>Random Dog</button>
  </div>
</div>
</div>


