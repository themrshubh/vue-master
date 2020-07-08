<template>
  <div id="app">
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <h2 class="text-center">Google Maps Widget</h2>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <google-maps></google-maps>
        </b-col>
      </b-row>
      <b-row v-if="mark" class="mt-3">
        <b-col>
          <b-card style="width: 100%">
            <div class="text-center">You have clicked on <span class="text-danger">{{mark.name}}</span></div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Map from './components/Map'
import { eb } from './main'

export default {
  name: 'App',
  components:{
    'google-maps': Map
  },
  data(){
    return {
      mark: null
    }
  },
  created(){
    eb.$on('markerClicked', (place) => {
      this.mark = place
    })
  }
}
</script>

<style>
</style>
