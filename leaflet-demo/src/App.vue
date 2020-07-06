<template>
  <div id="app">
    <b-container class="mt-4">
      <b-row>
        <b-col>
          <h2 class="text-center">Leaflet JS Demo</h2>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <app-map></app-map>
        </b-col>
      </b-row>
      <b-row v-if="markClicked" class="mt-2">
        <b-col>
          <b-card style="width: 100%">
            <div class="text-center">
              You just clicked on <span class="text-primary">{{ clickedPlace.name }}</span>
              <br>
            <b-button class="btn-light" @click="markClicked = false">Clear</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-row v-else class="mt-2">
        <b-col>
          <b-card style="width:100%">
            <div class="text-center">
              This is a basic implementation of LeafletJS and it uses Open Street Map to render maps. 
              <br>
              Click on the marked places to interact with the map. 
            </div>
          </b-card>
        </b-col>
      </b-row> 
    </b-container>
  </div>
</template>

<script>
import Map from './components/Map.vue';
import { eventBus } from './main'

export default {
  name: 'App',
  components: {
    'app-map':Map
  },
  data(){
    return {
      markClicked: false,
      clickedPlace: {}
    }
  },
  created(){
    eventBus.$on('markerClicked', (place) => {
      this.clickedPlace = place;
      this.markClicked = true
    });
  }
}
</script>

<style>
</style>
