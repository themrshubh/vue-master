<template>
  <div style="height:350px">
    <l-map
    :center = "center"
    :zoom = "zoom"
    @ready="doSomethingOnReady()">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker v-for="place in zone" :lat-lng="place.latlng" @click="clicked(place)" :key="place.id">
        <l-popup>{{ place.info }}</l-popup>
      </l-marker>
    </l-map>
  </div>    
</template>

<script>
import { eventBus } from '../main'

export default {
  data(){
    return {
      zone:[
        {
          id: 0,
          name: 'Fr.Agnel Ashram',
          info:'I am an Ashram.',
          latlng: [19.04452, 72.82008]
        },
        {
          id: 1,
          name: 'Fr.Conceicao Rodrigues College of Engineering',
          info:'I am an Engineering College.',
          latlng: [19.0442, 72.82102]
        },
        {
          id: 2,
          name: 'Taj Lands End',
          info:'I am a Hotel.',
          latlng: [19.04346, 72.81947]
        }
      ],
      center: [19.04452, 72.82008],
      zoom: 17,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      markerLatLng: [19.04452, 72.82008],
      clickLat: 0,
      clickLng: 0
    }
  },
  methods: {
    doSomethingOnReady(){
      console.log("I'm Ready")
    },
    clicked(place){
      eventBus.$emit('markerClicked', place)
    }
  }
}
</script>

<style scoped>

</style>