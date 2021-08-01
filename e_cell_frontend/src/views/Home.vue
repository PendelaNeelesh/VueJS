<template>
  <div class="home">
    <div class="jumbotron">
    <h1 class="display-4">Hey Searching... for job?</h1>
    <p class="lead">You may have launched different websites for jobs, but not landed yet?</p>
    <hr class="my-4">
    <p>Don't worry you took a right step by launching us we have some of the best landing spots. Click the Get Hired
      button to land in a safe spot.
    </p>
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
  }
</style>