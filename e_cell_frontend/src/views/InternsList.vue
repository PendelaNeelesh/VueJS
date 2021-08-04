<template>
  <div v-if="verifeidstatus" class="wrapper">
      <div class="filter">
          <div class="type">
              <form class="filterfrom">
                  <div class="fomrdiv">
                      <input type="text" placeholder="type" v-model="jobtypes">
                      {{ jobtypes }}
                      <font-awesome-icon :icon="['far', 'address-card']" />
                  </div>
              </form>
          </div>
          <div class="location">
              <form class="filterfrom">
                  <div class="fomrdiv">
                      <input type="text" placeholder="location" v-model="jobtypes">
                      {{ jobtypes }}
                      <font-awesome-icon :icon="['far', 'address-card']" />
                  </div>
              </form>
          </div>
          <div class="pay">
              <form class="filterfrom">
                  <div class="fomrdiv">
                      <input type="text" placeholder="pay" v-model="jobtypes">
                      {{ jobtypes }}
                      <font-awesome-icon :icon="['far', 'address-card']" />
                  </div>
              </form>
          </div>
      </div>
      <div class="content">
          <div class="contentwrapper">
            <Intern v-for="intern in getinterns" :key="intern.id" :internship="intern" />
          </div>
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
            jobtypes: "",
        }
    },
    computed: {
        ...mapGetters( ['verifeidstatus'] ),
        ...mapGetters( ['getinterns']),
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
        height: inherit;
        display: grid;
        grid-template-columns: 30% 70%;
    }
    .filter{
        min-height: 50px;
        height: fit-content;
        display: grid;
        grid-template-rows:33% 33% 33%;
    }
    .content{
        grid-column-start: 2;
        grid-column-end: 3;
    }
    .contentwrapper{
        min-width: 100%;
        min-height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
    }

</style>