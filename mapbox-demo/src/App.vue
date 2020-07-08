<template>
  <div id="app">
    <b-container class="mt-4">
      <b-row>
        <b-col>
          <h2 class="text-center">Mapbox Demo</h2>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <div>
            <app-map></app-map>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <b-card style="width: 100%">
            <div class="text-center">
              More Map Info Here.
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    'app-map': Map,
  },
}
</script>

<style>
</style>
