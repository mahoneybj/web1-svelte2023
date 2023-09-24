<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import Nav from "$lib/Nav.svelte";
  import FooterButton from "../lib/FooterButton.svelte";
  </script>

<svelte:head>
	<link rel="stylesheet" href="css/main.css" />
</svelte:head>

<Header/>

<main>
  <slot />
</main>

<FooterButton/>
<Footer/>