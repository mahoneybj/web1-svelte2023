<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
  </script>

<svelte:head>
	<link rel="stylesheet" href="css/main.css" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<Header/>

<main>
  <slot />
</main>

<Footer/>