<template>
  <form @submit.prevent="handleSubmit">
      <label>Email: </label>
      <input type="email" required v-model='email'>
      <label>Password: </label>
      <input type="password" required v-model='pass1'>
      <label>Confirm Password: </label>
      <input type="password" required v-model='pass2'>
      <div class="errors"> {{ passerror }}</div>
      <label>Skills: </label>
      <div v-if="shownote" class='note'>Use <span>ALT + ','</span> save a skill</div>
      <input type="text"  v-model='tempskill' @click="showNote" @keyup.alt='addSkill' @keydown="showNote">
      <div v-for='skill in skills' :key='skill' class="pill" @click="deleteSkill(skill)">
          {{ skill }}
      </div>
      <label>Role: </label>
      <select v-model='role'>
          <option value="developer"> Web Developer</option>
          <option value="designer">Web Designer</option>
      </select>
      <div class="terms">
          <input type="checkbox" required v-model='terms'>
          <label>Accept T and C</label>
      </div>
      <div class="submit">
        <button>Create an Account</button>
      </div>
  </form>
</template>

<script>
import $ from 'jquery';
export default {
    data(){
        return {
            email: '',
            pass1: '',
            pass2: '',
            role: '',
            terms: false,
            tempskill: '',
            skills: [],
            shownote: false,
            passerror: '',
        }
    },
    methods: {
        showNote(){
            this.shownote = true;
            setTimeout(()=>{ this.shownote = false },3000)
        },
        addSkill( e ){
            if(e.key === ',' && this.tempskill ){
                if (!this.skills.includes(this.tempskill)){
                this.skills.push(this.tempskill)
                this.tempskill = ''}
            }
        },
        deleteSkill(delskill){
            console.log(this.skills);
            let skill;
            this.skills = this.skills.filter(skill => skill!==delskill);
            
        },
        handleSubmit(){
            if(this.pass1 !== this.pass2) this.passerror = "Mis-Match between passwords"
            else{
                console.log('near request')
                $.ajax('http://localhost:5000/').then((res)=>{
                    console.log(res);
                })
            } 
        }
    }
}
</script>

<style>
    form{
        max-width: 420px;
        margin: 30px auto;
        background: white;
        padding: 40px;
        border-radius: 10px;
    }
    label{
        text-align: left;
        height: 12px;
        width: 100%;
        color: #aaa;
        display: inline-block;
        margin: 25px 0px 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;

    }
    .terms label{
        height: 12px;
        width: fit-content;
    }
    input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }
    .pill{
        align-self: left;
        margin: 4.5px;
        min-width: 40px;
        width: fit-content;
        min-height: 25px;
        border-radius: 10px;
        background: rgb(241, 239, 239);
        text-align: center;
        justify-content: center;
        display: inline-block;
        padding: 3.5px;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 15px;

    }
    .pill:hover{
        background: rgb(202, 166, 166);
        color: rgb(233, 36, 36);
    }
    .note{
        text-align: left;
        font-size: 13px;
        color: rgb(45, 45, 150);
        margin-bottom: 3px;
        margin-top: 2px;

    }
    .note>span{
        font-weight: bold;
        color: rgb(16, 16, 201);
        font-size: 16px;
    }
    .submit{
        align-items: right;
    }
    .submit>button{
        border: none;
        margin: 5px;
        border-radius: 20px;
        padding: 15px;
        background: rgb(93, 93, 201);
        font-weight: bold;
        color: rgb(221, 213, 213);
    }
    button:hover{
        cursor: pointer;
    }
    .errors{
        color: red;
        text-align: left;
        font-size: 10px;
    }
</style>