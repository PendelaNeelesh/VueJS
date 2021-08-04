<template>
  <div class="formdiv">
    <div class="form">
      <div v-if="signindata.existerror" class="errors">
        Please pick a new User name.
      </div>
      <div class="errors" v-if="passerror">
        Password Mismatch
      </div>
      <form class="formcontents" @submit.prevent="handlesubmit" >
        <label>Full Name: </label>
        <input type="text" v-model="signindata.user" required>
        <label>Email: </label>
        <input type="email" v-model="signindata.email"  required>
        <label>password: </label>
        <input type="password" v-model="signindata.pass1" required>
        <label>Confirm Password: </label>
        <input type="password" v-model="signindata.pass2" required>
        <label>Sign-in as:</label>
        <select v-model="signindata.type">
          <option value="user">User or Student</option>
          <option value="manager">Manager</option>
        </select>
        <div class="submit">
          <button>Create Account</button>
        </div>
        <div class="submit">
          <router-link @click="topFunction" to="/login"> Having Account? Login here </router-link>
        </div>
        <div v-if="signindata.existerror" class="errors">
          Please pick a new User name.
        </div>
        <div class="noerrors" v-if="signindata.created" >
          User created sucessfully login here.
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters }  from 'vuex'
export default {
  name: "Signin",
  data(){
    return {
      passerror: false,
    }
  },
  methods: {
    async handlesubmit(){
      let temp = this.signindata;
      if(temp.pass1 === temp.pass2){
        await this.$store.dispatch("createnewuser")
      }
      else{
        this.passerror = true;
      }
      
    },
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      }
  },
  computed: {
    ...mapGetters( ['signindata'])
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

    }
    .errors{
      text-align: center;
      color: red;
      font-size: 15px;
    }
    .noerrors{
      text-align: center;
      color: green;
      font-size: 15px;
    }
</style>