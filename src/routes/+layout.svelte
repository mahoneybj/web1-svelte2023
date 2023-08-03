<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import Nav from "$lib/Nav.svelte";
  </script>

<svelte:head>
	<link rel="stylesheet" href="css/main.css" />
</svelte:head>

<Header/>
<Nav />
<h1>I am the layout file</h1>
<slot />

<Footer/>