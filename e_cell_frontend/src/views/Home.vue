<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="question">Hey Searching... for job?</h1>
      <p class="lead">You may have launched different websites for jobs, but not landed yet?</p>
      <hr class="my-4">
      <p>Don't worry you took a right step by launching us we have some of the best landing spots. Click the Get Hired
        button to land on a safe spot.
      </p>
      <router-link class="btn btn-primary btn-lg" to="/internslist" role="button">Get Hired</router-link>
    </div>
    <div class="companies">
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
      <div class="company">
        <img src="" alt="" class="comapnyimage">
      </div>
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
  .companies{
    margin-top: 10px;
    padding: 10px;
    border-radius: 20px;
    width: 100%;
    min-height: 950px;
    height: fit-content;
    background: lightsteelblue;
  }
  .company{
    margin: 5px;
    display: inline-block;
    min-width: 200px;
    min-height: 180px;
    width: fit-content;
    height: fit-content;
    align-self: center;
    background: white;
    align-self: center;
  }
  .home{
    height: 100%;
  }
  .question{
    text-align: center;
  }
</style>