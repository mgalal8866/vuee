<template>
    <v-row class="mt-2 mx-3">
        <v-col sm="6">
            <v-card color="blue" dark class="pa-4">JavaScript</v-card>
        </v-col>
        <v-col sm="6">
            <v-card color="green" dark class="pa-6"><h1>
      {{ count }}
    </h1>
    <button class="btn" @click="$store.commit('INCREMENT')">INCREMENT</button>
     <button class="btn" @click="$store.commit('DNCREMENT')">DNCREMENT</button>
    </v-card>
        </v-col>
    </v-row>

</template>

<script>
import { mapState } from 'vuex';
     export default {
    name : 'About',
   computed: {
    ...mapState({
      count: state => state.count
    }),
  }
  }
</script>
<style scoped>
textarea{
    padding: 10px;
}
</style>

