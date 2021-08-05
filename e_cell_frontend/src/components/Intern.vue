<template>
  <div class="interncontainer">
    <div class="title"> <h4>Title: <span>{{ internship.title }}</span></h4> </div> 
    <div class="type"> JobType: <span>{{ internship.jobtype }}</span> </div>
    <div class="company">
      Company: <span>{{ internship.company }}</span> 
    </div> 
    <div class="pay">
      pay: <span>{{ internship.pay }}</span> 
    </div>
    <div class="id">
      InternID: <span>{{ internship.auto_id }}</span> 
    </div>
    <div class="location">
      Location: <span>{{ internship.location }}</span>
    </div>
    <div v-if="!managerstatus" class="button">
      <a v-if="!managerstatus" target="_blank" rel="noopener noreferrer" :href="url">
        Apply
      </a>
    </div>
    <div v-if="managerstatus" class="button">
      <button v-if="managerstatus" @click="deleteme(internship.auto_id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Intern',
    props: ['internship'],
    computed:{
      ...mapGetters( ['managerstatus'] ),
      ...mapGetters( ['getuser'] ),
      url: function(){
        return `http://127.0.0.1:8000/users/apply?id=${this.internship.auto_id}&user=${this.getuser}`
      },
    },
    methods: {
        async deleteme(id){
          await this.$store.dispatch("deleteintern",id,this.getuser)
          this.$store.dispatch("getmanagerinterns",this.getuser)
        },
    }
}
</script>

<style>
  .interncontainer{
    float: left;
    display: inline-block;
    margin: 5px;
    padding: 25px;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    opacity: 0.8;
    align-self: center;
  }
  .title{
    color: blue;
    font-weight: bold;
  }
  .pay{
    color: green;
  }
  .type{
    color: black;
  }
  .company{
    color: blue;
  }
  .id{
    color: orange;
  }
</style>