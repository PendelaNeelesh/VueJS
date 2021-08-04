<template>
<div class="app_container">
   <!--Nav bar -->
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
          <router-link @click="topFunction" class="nav-link" to="/">
             Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link @click="topFunction" class="nav-link" to="/about">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="!managerstatus" @click="topFunction" class="nav-link btn  btn-primary" to="/internslist">
            Interns
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="managerstatus" @click="topFunction" class="nav-link btn  btn-primary" to="/managerlist">
            Your Interns
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="managerstatus" @click="topFunction" class="nav-link btn  btn-primary" to="/makeintern">
            Add Interns
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="!verifeidstatus" @click="topFunction" class="nav-link btn  btn-primary" to="/login">
            Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="!verifeidstatus" @click="topFunction" class="nav-link btn  btn-primary" to="/signin">
            Signin
          </router-link>
        </li>
        <li class="nav-item">
          <button v-if="verifeidstatus" @click="clearsession" class="nav-link">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <!-- nav bar-->

  <!-- Content Displayer -->
  <div class="container_router">
    <router-view/>
  </div>
  <!-- Content Displayer -->

  <!-- Footer -->
  <footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <h1> Contact Us:</h1>
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
        Hey you can contact the team members regarding any doubts. If you want to add your company to our website 
        <router-link  @click="topFunction" to="/signin"> Login </router-link> as a manager. Further instructions will be provided then.
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
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3751456672608!2d74.79077791479327!3d13.011765890829532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211c2b4691d%3A0xe4546bb53e747b06!2sNITK%20bus%20stand!5e0!3m2!1sen!2sin!4v1627817758104!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
  import { mapGetters } from 'vuex'
  export default{ 
    name:'App',
     methods: {
      loginoff(){
         this.loginactive = false;
       },
      subscribed(){
         console.log("Subscribed");
       },
      topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        },
      clearsession(){
        console.log('in clear session')
        window.sessionStorage.clear();
        window.location.reload();
        console.log(window.sessionStorage)
      }
      },
    computed: {
      ...mapGetters(['verifeidstatus']),
      ...mapGetters(['managerstatus'])
    }
  }

</script>
<style >
  #body{
    padding-top: 110px;
    background: rgb(149,196,252);
    width: fit-content;
    height: fit-content;
  }
  .nav-icon{
    width: 30px;
    height: 30px;
  }
  .logo{
    width: 80px;
    height: 80px;
  }
 html,body{
   min-width: 100%;
   min-height: 100%;
    width: fit-content;
    height: fit-content;

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
    overflow: hidden;
    width: 100%;
    min-height: 900px;
    max-height: fit-content; 
    display: flex;
    justify-content: center;
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
    background: white
  }
  .email{
    width:100%;
    border-radius: 15px;
    margin: 5px;
  }
  .tomiddle{
    float: left;
  }
  footer{
    width: 100%;
  }


</style>
