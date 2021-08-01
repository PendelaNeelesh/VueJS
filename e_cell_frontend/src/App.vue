<template>
<div class="app_container">
   
  <nav class="navbar navbar-expand-sm fixed-top">
    <router-link to="/" class="navbar-brand">
      <img class="logo" src="./assets/logo.jpg" alt="">
    </router-link>
    <span class="navbar-brand">GetHired</span>
    <button class="navbar-toggler collapsed"  data-bs-toggle="collapse" data-bs-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span>
          <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="10"></rect>
              <rect y="20" width="100" height="10"></rect>
              <rect y="40" width="100" height="10"></rect>
          </svg>
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navCollapse">
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
  <!-- Footer -->
<footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button"
        ><font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" role="button"
        ><font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/PendelaNeelesh/VueJS" role="button"
        ><font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </section>
    <!-- Section: Social media -->

    <!-- Section: Form -->
    <section class="">
      <form action="">
        <!--Grid row-->
        <div class="row d-flex justify-content-center">
          <!--Grid column-->
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-5 col-12">
            <!-- Email input -->
            <form @submit.prevent="" class="form-outline form-white mb-4">
              <input class="email" type="email" placeholder="email adress" id="form5Example2" />
              <br>
              <input @click="subscribed" class="subscribe" type="submit" value="Subscribe">
            </form>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </form>
    </section>
    <!-- Section: Form -->

    <!-- Section: Text -->
    <section class="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
    <!-- Section: Text -->

    <!-- Section: Links -->
    <section class="">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="tomiddle">
          <h5 class="text-uppercase">Team Members</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="https://www.linkedin.com/in/neelesh-pendela-38ab8318b/" class="text-white">Pendela Neelesh</a>
            </li>
            <li>
              <a href="https://ecell.nitk.ac.in/" class="text-white">E-Cell NITK</a>
            </li>
            <li>
              <a href="https://nitk.ac.in/" class="text-white">NITK</a>
            </li>
            <li>
              <a href="https://iris.nitk.ac.in/" class="text-white">IRIS</a>
            </li>
          </ul>
        </div>
      </div>
      <!--Grid row-->
    </section>
    <!-- Section: Links -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
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
       },
       subscribed(){
         console.log("Subscribed");
       }
      },
  }

</script>
<style >
  body { padding-top: 110px; }
  .nav-icon{
    width: 30px;
    height: 30px;
  }
  .logo{
    width: 80px;
    height: 80px;
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
    height: 1200px;
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
  .navbar{
    background: rgba(228, 225, 225,0.9);
  }
  .email{
    width:100%;
    border-radius: 15px;
    margin: 5px;
  }

</style>
