<template>
  <div class="formdiv">
    <div class="form">
      <form class="formcontents" @submit.prevent="handlesubmit" >
        <label>Full Name: </label>
        <input type="text" v-model="fullname" required>
        <label>Email: </label>
        <input type="email" v-model="email"  required>
        <label>password: </label>
        <input type="password" v-model="password" required>
        <label>Confirm Password: </label>
        <input type="password" v-model="cnfpassword" required>
        <label>Sign-in as:</label>
        <select v-model="role">
          <option value="User/Student">User or Student</option>
          <option value="Manager">Manager</option>
        </select>
        <div class="submit">
          <button @click="topFunction">Create Account</button>
        </div>
        <div class="submit">
          <router-link @click="topFunction" to="/login"> Having Account? Login here </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data(){
    return {
      fullname: "",
      email: "",
      password: "",
      cnfpassword: "",
      role: "User/Student",
      
    }
  },
  methods: {
    handlesubmit(){
      console.log("Submit");
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

    }
</style>