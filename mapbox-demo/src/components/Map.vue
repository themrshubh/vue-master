<template>
  <div>
    <MglMap 
    :accessToken="accessToken" 
    :mapStyle="mapStyle"
    :center="coordinates"
    :zoom="zoom"
    style="height: 350px"
    >
      <MglMarker style="cursor: pointer" :coordinates="coordinates" color="#c27474" @click="clicked">
        <MglPopup :offset="offset">
          <div>Hello, I'm popup!</div>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup
  },
  data(){
    return {
      accessToken: 'pk.eyJ1IjoidGhlbXJzaHViaCIsImEiOiJja2NibWNweW4xcTNrMnJwOGc4ODc4djcyIn0.aP1uv1MJm47-PkmcauOc5g',
      mapStyle: 'mapbox://styles/themrshubh/ckcbp6qg76cjb1kputy5mkers/',
      coordinates: [72.820059,19.044495],
      zoom: 15,
      offset:15
    }
  },
  methods: {
    clicked(){
      console.log('Clicked!')
    }
  },
  created() {
    this.mapbox = Mapbox;
  }
}
</script>