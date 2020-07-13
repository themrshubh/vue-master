<template>
  <div id="app">
    <b-container fluid>
      <b-row class="mt-5">
        <b-col>
          <h2 class="text-center">Tables Prototype</h2>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
            <b-table 
            selectable hover bordered 
            sticky-header="450px" 
            select-mode="single" 
            selected-variant="primary" 
            ref="table1" 
            :items = 'items' 
            @row-clicked="clicked">
            </b-table>
        </b-col>
        <b-col>
            <!-- <b-table hover bordered sticky-header="450px" ref="table2" :items = 'zones' @row-clicked="fetchNewMeters"></b-table> -->
            <b-card style="width:100%;height:450px">
              <div v-if="selectedItem == null" class="text-center mt-5">I am showing default info</div>
              <div v-else class="text-center mt-5">
                You clicked on <span class="text-danger">{{ selectedItem.name }}</span>. <br>
                So now I'm showing that information.
              </div>
            </b-card>
        </b-col>
        <b-col>
            <!-- <b-table hover bordered sticky-header="450px" ref="table3" :items = 'building'></b-table> -->
            <b-card style="width:100%;height:450px">
              <div v-if="selectedItem == null" class="text-center mt-5">I am showing default info</div>
              <div v-else class="text-center mt-5">
                You clicked on <span class="text-danger">{{ selectedItem.name }}</span>. <br>
                So now I'm showing that information.
              </div>
            </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>


export default {
  name: 'App',
  created(){
    this.fetchNewAreas()

  },
  mounted(){
    const tab1 = this.$refs['table1'].$el
    tab1.addEventListener('scroll', this.onScroll)
  },
  data(){
    return {
      currentArea: 0,
      selectedItem:null,
      items: []
      // zones: [
      //   {name: 'Default Zone 1', alerts: 0, dues: 0},
      //   {name: 'Default Zone 2', alerts: 0, dues: 0},
      //   {name: 'Default Zone 3', alerts: 0, dues: 0},
      //   {name: 'Default Zone 4', alerts: 0, dues: 0},
      //   {name: 'Default Zone 5', alerts: 0, dues: 0},
      //   {name: 'Default Zone 6', alerts: 0, dues: 0},
      //   {name: 'Default Zone 7', alerts: 0, dues: 0},
      //   {name: 'Default Zone 8', alerts: 0, dues: 0},
      //   {name: 'Default Zone 9', alerts: 0, dues: 0},
      //   {name: 'Default Zone 10', alerts: 0, dues: 0}
      // ],
      // building: [
      //   {name: 'Meter 1', alerts: 0, dues: 0},
      //   {name: 'Meter 2', alerts: 0, dues: 0},
      //   {name: 'Meter 3', alerts: 0, dues: 0},
      //   {name: 'Meter 4', alerts: 0, dues: 0},
      // ]
    }
  },
  methods: {
    clicked(item){
      this.selectedItem = item
    },
    onScroll(event){
      if(event.target.scrollTop + event.target.clientHeight == event.target.scrollHeight){
        this.fetchNewAreas()
        console.log(this.selectedItem)
      }
    },
    fetchNewAreas(){
      for(let i = 1; i < 11; i++){
        this.items.push({
          name: 'Area ' + (this.currentArea + i),
          alerts: Math.floor(Math.random() * 600),
          dues: Math.floor(Math.random() * 300),
        })
      }
      this.currentArea += 10 
    },
  }
}
</script>

<style>
.noScrollBar::-webkit-scrollbar {
  display: none;
}
.b-table > tbody > tr {
  cursor: pointer
}
</style>
