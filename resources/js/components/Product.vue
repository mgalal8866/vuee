<template>
    <v-row justify="center" class="space px-16">
        <v-col cols="12" xs="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
            <v-card class="mx-auto rounded-xl" max-width="300" color="" flat outlined>
                <div align="center" justify="center">
                    <v-img max-height="200" max-width="200" contain :src="product.images[0].image"></v-img>
                </div>

                <v-card-title class="">{{ product.name }}</v-card-title>
                <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
                product.unit['name']
                }}</v-card-title>
                <v-card-title class="mt-n4">{{ product.pricebefore }}</v-card-title>

                <v-card-actions class="mx-2 mt-n4">
                    <v-btn outlined class="mt-n2 add">
                        <v-icon color="green" @click="decreaseQ(product.id)"> mdi-minus </v-icon>
                    </v-btn>

                    <strong class="mx-2" v-text="product.quantity"></strong>
                    <v-btn outlined class="mt-n2 add">
                        <v-icon color="green" @click="increaseQ(product.id)"> mdi-plus </v-icon>
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
    setup() {
        function increaseQ(id) {
            this.$store.dispatch("increase", id);
        }
        function decreaseQ(id) {
            this.$store.dispatch("decrease", id);
        }
        return {
            increaseQ,
            decreaseQ
}
    },
    mounted() {
        this.$store.dispatch('getProducts')
    },
    computed: {
        products() { return this.$store.state.products }
    },
    data: () => ({

      bpm: 1,
    // products: [
    //   { img: "images/pr1.png", title: "Cabbage", subtitle: "1kg", price: "$13" },
    //   { img: "images/pr2.png", title: "Perry's Ice Cream", subtitle: "1kg", price: "$23" },
    //   { img: "images/pr3.png", title: "Potato", subtitle: "1kg", price: "$17" },
    //   { img: "images/pr4.png", title: "Bundle Pack", subtitle: "Potato, Papaya, Oil, Cabbage", price: "$40" },
    //   { img: "images/pr5.png", title: "Oreo Biscuit", subtitle: "270GM", price: "$20" },
    //   { img: "images/pr6.png", title: "Papaya", subtitle: "1kg", price: "$10" },
    // ],
  }),
   methods: {
    //   decrement () {
    //     this.bpm--
    //   },
    //   increment () {
    //     this.bpm++
    //   },

    },
};
</script>

<style>
</style>
