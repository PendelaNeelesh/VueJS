<template>
  <div v-if="verifeidstatus" class="wrapper">
      <div class="filter">
          <div class="location">
              <form @submit.prevent="filter" class="filterfrom">
                  <div class="fomrdiv">
                      <input type="text" placeholder="location" v-model="filele">
                  </div>
                  <div class="buttons">
                      <button  type="submit" class="btn btn-primary">
                          filter
                      </button>
                      <button @click="getall" class="btn btn-primary">
                          cancel
                        </button>
                      <div>ensure that 1st letter is capital</div>
                  </div>
              </form>
          </div>
      </div>
      <div class="content">
        <Intern v-for="intern in getinterns" :key="intern.auto_id" :internship="intern"/>
      </div>
    <div  class="buttons">
        <button class="btn  btn-primary" @click="getprev">
            prev
        </button>
        <button  class="btn  btn-primary" @click="getnext">
            next
        </button>
    </div>
  </div>
  <div v-else> Please login </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Intern from '../components/Intern.vue'
export default {
    name: "InternsList",
    data(){
        return {
            filele: "default"
        }
    },
    methods: {
        getall(){
            console.log('in get all')
            this.filele = "default"
            this.$store.dispatch("getinterns")
        },
        getnext(){
            console.log("in herherherhe")
            console.log(this.managerstatus)
            let p = this.page
            let t = this.total
            if(p*10-t<10){
                if(!this.managerstatus){
                    this.$store.dispatch("getnext")
                }
            }
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        getprev(){
            console.log("ihddiwnhin")
                console.log(this.managerstatus)
            if(this.page>0){
                console.log(this.managerstatus)
                if(!this.managerstatus){
                    this.$store.dispatch("getprev")
                }
            }
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        async filter(){
                await this.$store.dispatch("changeele",this.filele)
                this.$store.dispatch("getinterns")
            
        }
    },
    computed: {
        ...mapGetters( ['page'] ),
        ...mapGetters( ['total'] ),
        ...mapGetters( ['verifeidstatus'] ),
        ...mapGetters( ['getinterns']),
        ...mapGetters( ['filterele']),
        ...mapGetters( ['managerstatus'] ),
    },
    components: { Intern, },
    mounted(){
        if(this.verifeidstatus){
            this.$store.dispatch("getinterns")
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