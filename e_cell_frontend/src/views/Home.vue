<template>
  <div class="home">
    <div class="contentwrapper">
      <div class="image">
        <img src="https://i.pinimg.com/564x/55/09/fd/5509fd81aa5dc951003c79e98c2bb70e.jpg" alt="">
      </div>
      <div class="content">
        <p>Are you Searching.<span>o</span>.<span>o</span>. for jobs?</p>
      </div>
      <div class="content right">
        <p>We help you to reach your goal</p>
      </div>
      <div class="image right">
        <img src="https://i.pinimg.com/564x/9e/65/ef/9e65efd96044960bde2eebc532e946ae.jpg" alt="">
      </div>
      <div class="image">
        <img src="	https://i.pinimg.com/564x/67/52/c2/6752c259b564827f43856b31b1974f67.jpg" alt="">
      </div>
      <div class="content">
        <p>
          Land in your favourate position
          <router-link to="/internslist">
            from here
          </router-link>
        </p>
      </div>
    </div>
    <div class="question">
      Some of the Available Launch Pads
    </div>
    <div class="companies">
      <div class="company">
        Google
      </div>
      <div class="company">
        <router-link to="/internslist">  Google</router-link>
      </div>
      <div class="company">
        Google
      </div>
      <div class="company">
        Google
      </div>
      <div class="company">
        Google
      </div>
      <div class="company">
        Google
      </div>
      <div class="company">
        Google
      </div>
      <div class="company">
        Google
      </div>
      <div class="company">
        Google
      </div>
      <div class="company">
        Google
      </div>
      <div class="company">
        Google
      </div>
      <div class="company">
        Google
      </div>
      <div class="company">
        Google
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

<style scoped>
  .home{
    width: 80%;
    height: 100%;
    background: rgb(149,196,252);
    margin: 0px;
    padding: 0px; 
  }
  
  .companies {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  }
  @media (min-width: 600px) {
  .companies { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 900px) {
  .companies { grid-template-columns: repeat(3, 1fr); }
  }
  img{
      width: 200px;
      height:200px;
    }
  @media (min-width: 400px){
    img{
      width: 400px;
      height: 400px;
    }
    .image{
    display: block;
  }
  }
  span{
    font-size: 15px;
  }
  .content{
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
  @media (min-width: 800px){
    img{
      width: 400px;
      height: 400px;
    }
    .contentwrapper{
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-rows: 400px 400px 400px;
    grid-template-columns:400px 100%;
  }
  .p{
    position: relative;
    top: 200px;
    left:auto;
  }
  .image{
    display: block;
    width: 100%;
    height: 100%;
  }
  .content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
  }
  .company{
    text-align: center;
  }
  .question{
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
</style>