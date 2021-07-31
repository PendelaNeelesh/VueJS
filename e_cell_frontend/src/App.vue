<template>
<div class="app_container">
   <nav class="navbar navbar-expand-sm">
     <span></span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon">abc
        </span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto">
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
    height: 100%;
  }
  nav{
    border-style: outset;
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
