<script>
  import Nav from "../components/Nav.svelte";

  export let segment;

  const siteName = "Healthy Living Community";
</script>

<style type="text/postcss">
  main {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 175px;
    box-sizing: border-box;
  }

  header,
  footer {
    background-color: #225917;
  }

  header {
    height: 90px;
  }

  footer {
    @apply text-lg mt-5;
    height: 60px;

    div {
      @apply px-6 text-white;
      margin: auto 0;
    }
  }
</style>

<header>
  <Nav {segment} />
</header>

<main>
  <slot {siteName} />
</main>

<footer class="flex">
  <div class="flex-grow">
    © {new Date().getFullYear()} Healthy Living Community
  </div>
</footer>
