<template>
<div class="app_container">
  <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <router-link class="btn btn-primary btn-lg" to="/login" role="button">Get Hired</router-link>
</div> 
   <nav class="navbar navbar-expand-sm sticky-top">
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span>
          <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
          </svg>
      </span>
    </button>
     <div class="collapse navbar-collapse" id="navCollapse">
    <span>GetHired</span>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">
                   Home
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">
                  About
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link btn  btn-primary" v-if="loginactive"  to="/login">
                  Login
                </router-link>
            </li>
        </ul>
        </div>
    </nav>
  <div class="container_router">
    <router-view/>
  </div>
</div>
</template>

<script>
  export default{ 
    name:'App',
    data(){
      return {
        loginactive: true,
      }
    },
     methods: {
       loginoff(){
         this.loginactive = false;
       }
      }
  }

</script>
<style >
  .nav-icon{
    width: 30px;
    height: 30px;
  }
 html,body{
    width: 100%;
    height: 100%;

 }
 #app{
    width: 100%;
    height: 100%;

 }
  .app_container{
    width: 100%;
    height: 100%;

  }
  .container_router{
    width: 100%;
    height: fit-content;
  }
  .navbar-nav{
    margin-left: auto;
  }
  .nav-link{
    padding: 2.5px;
    margin: 2.5px;
    font-size: 15px;
  }
  .nav-item:hover{
    border-radius: 5px;
    background: rgb(188, 188, 192);
    color: white;
  }
</style>
