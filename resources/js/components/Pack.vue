<template>
    <v-row justify="center" class="space px-16 pb-5">
        <v-col cols="12" xs="12" sm="6" md="4" v-for="(pack, i) in packs" :key="i">
            <v-card class="mx-auto rounded-xl" max-width="300" color="" flat outlined>
                <div align="center" justify="center">
                    <v-img max-height="300" max-width="300" contain :src="pack.images[0].image"></v-img>
                </div>

                <v-card-title class="">{{ pack.name }}</v-card-title>
                <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
                pack.unit['name']
                }}</v-card-title>
                <v-card-title class="mt-n4">${{ pack.priceafter }}</v-card-title>

                <v-card-actions class="mx-2 mt-n4">
                    <v-btn outlined class="mt-n2 add">
                        <v-icon color="green" @click="decrement(i)"> mdi-minus </v-icon>
                    </v-btn>

                    <strong class="mx-2" v-text="bpm"></strong>
                    <v-btn outlined class="mt-n2 add">
                        <v-icon color="green" @click="increment(i)"> mdi-plus </v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2 mt-n3" fab dark small color="green">
                        <v-icon dark> mdi-shopping </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
  data: () => ({
      bpm: 1,
    //   https://www.elmasriastore.com/product/offer
    // packs: [
    //   { img: "images/p1.png", title: "Medium Box", subtitle: "Tomato, Cabbage, Oil, Cauliflower", price: "$55" },
    //   { img: "images/p2.png", title: "Big Pack", subtitle: "Tomato, Cabbage, Oil, Cauliflower", price: "$55" },
    //   { img: "images/p3.png", title: "Small", subtitle: "Tomato, Cabbage, Oil,Cauliflower ", price: "$55" },
    //   { img: "images/p4.png", title: "Medium Box", subtitle: "Tomato, Cabbage, Oil,Cauliflower", price: "$55" },
    //   { img: "images/p5.png", title: "Medium Box", subtitle: "Tomato, Cabbage, Oil,Cauliflower", price: "$55" },
    //   { img: "images/p6.png", title: "Medium Box", subtitle: "Tomato, Cabbage, Oil,Cauliflower", price: "$55" },
    // ],
  }),
  mounted(){
    this.$store.dispatch('getOffers')
    },
    computed: {
        packs()
        { return this.$store.state.offers }
    },
   methods: {
      decrement () {
        this.bpm--
      },
      increment () {
        this.bpm++
      },

    },
};
</script>

<style>
</style>
