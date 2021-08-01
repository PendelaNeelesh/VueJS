<template>
  <div class="home">
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <router-link class="btn btn-primary btn-lg" to="/internslist" role="button">Get Hired</router-link>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>

  .home{
    height: 100%;
    background-image: repeating-linear-gradient(to bottom,
      rgb(26,198,204),
      rgb(26,198,204) 7%,
      rgb(100,100,100) 10%);
  }
</style>