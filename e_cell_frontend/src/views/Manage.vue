<template>
  <div v-if="verifeidstatus && managerstatus" class="wrapper">
      <div class="content">
        <Intern v-for="intern in getinterns" :key="intern.auto_id" :internship="intern" />
      </div>
  </div>
  <div v-else> Please login </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Intern from '../components/Intern.vue'
export default {
    name: "ManageInterns",
    methods: {
        getnext(){
            let p = this.page
            let t = this.total
            if(p*10-t<10){
                this.$store.dispatch("getnext")
            }
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        getprev(){
            if(this.page>0){
                this.$store.dispatch("getprev")
            }
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    },
    computed: {
        ...mapGetters( ['page'] ),
        ...mapGetters( ['total'] ),
        ...mapGetters( ['verifeidstatus'] ),
        ...mapGetters( ['getinterns']),
        ...mapGetters( ['managerstatus'] ),
    },
    components: { Intern, },
    mounted(){
        if(this.verifeidstatus){
            this.$store.dispatch("getmanagerinterns",this.getuser)
        }
        
    }

}
</script>

<style scoped>
    .wrapper{
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: 30% 70%;
    }
    .filter{
        min-height: 50px;
        height: fit-content;
        display: grid;
        grid-template-rows:33% 33% 33%;
        padding-top: 45px;
    }
    .content{
        grid-column-start: 2;
        grid-column-end: 3;
        padding-top: 45px;
    }
    .contentwrapper{
        min-width: 100%;
        min-height: fit-content;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
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
    .buttons{
        width: 100%;
        grid-column-start: 2;
        grid-column-end: 3;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button{
        margin: 5px;
        width: 80px;
        height: 40px;
    }

</style>