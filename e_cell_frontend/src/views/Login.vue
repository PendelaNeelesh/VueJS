<template>
  <div class="formdiv">
    <div class="form">
      <form class="formcontents" @submit.prevent="handlesubmit" >
        <label>Full Name/ Email </label>
        <input type="text/email" v-model="userstatus.username" required>
        <label>password: </label>
        <input type="password" v-model="userstatus.password" required>
        <div class="submit">
          <button>Login</button>
        </div>
        <div class="errors" v-if="userstatus.errors"> Username or Password is wrong please try again 
          <div>
            <router-link @click="topFunction" to="/signin"> new user? sign_in here </router-link>
          </div>
        </div>
        <div class="noerrors" v-if="verifeidstatus">
          <div v-if="!userstatus.ismanager">
            <router-link @click="topFunction" to="/internslist">reach your goal from here.</router-link>
          </div>
          <div v-if="userstatus.ismanager">
            <router-link @click="topFunction" to="/makeintern">Add your spot here.</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Signin",
  computed: {
    ...mapGetters( ['userstatus'] ),
    ...mapGetters( ['verifeidstatus'])
  },
  methods: {
    async handlesubmit(){
      await this.$store.dispatch("verifyuser")
      if(this.userstatus.verified) console.log('verified');
      else console.log("not verified")
    },
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      }
  }
}
</script>

<style  scoped>
    .formdiv{
        background-image: url('../assets/background.jpg');
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .form{
      width: 50%;
      min-height: 50%; 
      height: fit-content;
      background: white;
      border-radius: 15px;
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
      opacity: 0.8;
      padding: 5px;
    }
    form{
      margin-right: 0px;
      width: 100%;
      text-align: left;
      padding: 40px;
    }
    label{
      color: black;
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
      font-size: 15px;
    }
    input{
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid black;
      color: black;
      font-weight: bold;
    }
    button{
      background: rgb(26, 26, 182);
      border: 0px;
      padding: 10px 20px;
      margin-top: 20px;
      color: white;
      border-radius: 20px;
    }
    .submit{
      text-align: center;
      height: fit-content;
    }
    .errors{
      color: red;
      text-align: center;
      width: inherit;
    }
    .noerrors{
      color: green;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
      color: white;
    }
</style>