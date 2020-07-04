<template>
  <div id="app">
    <b-container>
      <b-row class="mt-2">
        <b-col>
          <h2 class="text-center">Monster Slayer</h2>
          </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-card style="width: 100%">
          <b-row>
            <b-col>
              <h4 class="text-center">Player One</h4>
              <br>
              <b-progress :value="playerHealth" min ="0" max="100" show-progress animated></b-progress>
            </b-col>
            <b-col>
               <h4 class="text-center">Computer</h4>
               <br>
               <b-progress :value="computerHealth" min ="0" max="100" show-progress animated></b-progress>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
      <b-row>
        <b-card style="width: 100%">
          <b-row v-if="!isStarted">
            <b-col class="text-center">
              <b-button 
                @click="isStarted = true" 
                variant="primary"
                >
                Start Game
              </b-button>
            </b-col>
          </b-row>
          <b-row v-else>
            <b-col class="text-center">
              <b-button class="mr-2" variant="warning" @click="attack">Attack</b-button>
              <b-button class="mr-2" variant="danger" @click="specialAttack">Special Attack</b-button>
              <b-button class="mr-2" variant="success" @click="heal">Heal</b-button>
              <b-button class="mr-2" variant="dark" @click="giveUp">Give Up</b-button>
            </b-col>
          </b-row>
        </b-card>
        <b-card style="width: 100%">
          <b-row>
            <b-col>
              <h4>History</h4>
              <b-list-group>
                <b-list-group-item v-for="move in moves" :key="move[0]">
                  <b-row>
                    <b-col>Damage Done: <b-badge variant="warning"> {{ move[0] }} </b-badge></b-col>
                    <b-col>Damage Taken: <b-badge variant="danger"> {{ move[1] }} </b-badge></b-col>
                    <b-col> Health Gained: <b-badge variant="success"> {{ move[2] }} </b-badge></b-col>
                  </b-row>
                </b-list-group-item>
              </b-list-group>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isStarted: false,
      playerHealth: 100,
      computerHealth: 100,
      moves: []
    }
  },
  methods: {
    attack(){
      let attack = 1 + Math.floor(Math.random() * 21)
      this.computerHealth -= attack
      let damage = this.computerAttack()
      this.moves.unshift([attack, damage, 0])
    },
    specialAttack(){
      let attack = 1 + Math.floor(Math.random() * 26)
      this.computerHealth -= attack
      let damage = this.computerAttack()
      this.moves.unshift([attack, damage, 0])
    },
    heal(){
      if(this.playerHealth < 100){
        let damage = this.computerAttack()
        let healing = damage + Math.floor(Math.random() * 6)
        this.playerHealth += healing
        this.moves.unshift([0, damage, healing])
      }
    },
    giveUp(){
      this.isStarted = false
      this.playerHealth = 100
      this.computerHealth = 100
      this.moves = []
    },
    computerAttack(){
      let damage =  1 + Math.floor(Math.random() * 21)
      this.playerHealth -= damage
      return damage
    }
  },
  watch: {
    playerHealth : function() {
      if(this.playerHealth <= 0) {
        this.giveUp();
        alert("GAME OVER!")
      }
    },
    computerHealth: function() {
      if(this.computerHealth <= 0) {
        this.giveUp()
        alert("YOU WON!")
      }
    }
  }
}
</script>

<style>

</style>
