<template>
  <div class="wrapper">
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
                      <input type="text" placeholder="type" v-model="jobtypes">
                      {{ jobtypes }}
                      <font-awesome-icon :icon="['far', 'address-card']" />
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import Intern from '../components/Intern.vue'
export default {
    name: "InternsList",
    data(){
        return {
            jobtypes: "",
            jobs: []
        }
    },
    components: { Intern, }

}
</script>

<style scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 30% 70%;
    }
    .filter{
        grid-column-start:1 ;
        grid-column-end: 2;
        display: grid;
        grid-template-rows:33% 33% 33%;
    }

</style>