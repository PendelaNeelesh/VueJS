<template>
  <div v-if="verifeidstatus && managerstatus" class="formdiv">
    <div class="form">
      <form class="formcontents" @submit.prevent="handlesubmit" >
        <label>Company: </label>
        <input type="text" required v-model="comp">
        <label>Email: </label>
        <input type="email"   required v-model="email">
        <label>Title: </label>
        <input type="text"  required v-model="title">
        <label>Type: </label>
        <input type="text" required v-model="type">
        <label>Location: </label>
        <input type="text" required v-model="loc">
        <label>Pay: </label>
        <input type="number"  required v-model="pay">
        <label>Description:</label>
        <textarea rows = "5" cols = "60" name = "description" v-model="desc">
            Enter details here...
         </textarea>
        <div class="submit">
          <button>Create Intern</button>
        </div>
      </form>
    </div>
  </div>
  <div v-else>
    Please login
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "AddInterns",
    data(){
      return {
        comp: "",
        email: "",
        loc: "",
        pay: 0,
        desc: "",
        title: "",
        type: "",
      }
    },
    computed: {
      ...mapGetters(['verifeidstatus']),
      ...mapGetters(['managerstatus']),
      ...mapGetters( ['getuser'])
    },
    methods: {
      handlesubmit(){
        var data = {
          comp: this.comp,
          email: this.email,
          loc: this.loc,
          pay: this.pay,
          desc: this.desc,
          title: this.title,
          type: this.type,
          user: this.getuser
        }
        this.$store.dispatch("addintern",data)
      }
    }
}
</script>

<style scoped>
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
    textarea{
        margin-top: 5px;
    }
</style>