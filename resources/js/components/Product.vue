<template>
  <v-row justify="center" class="space px-16">
    <v-col cols="12" xs="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
      <v-card class="mx-auto rounded-xl" max-width="300" color flat outlined>
        <div align="center" justify="center">
          <v-img max-height="200" max-width="200" contain :src="product.images[0].image"></v-img>
        </div>

        <v-card-title class>{{ product.name }}</v-card-title>
        <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">
          {{
          product.unit['name']
          }}
        </v-card-title>
        <v-card-title class="mt-n4">{{ product.pricebefore }}</v-card-title>

        <v-card-actions class="mx-2 mt-n4">
          <v-btn outlined class="mt-n2 add">
            <v-icon color="green" @click="decreaseQ(product.id)">mdi-minus</v-icon>
          </v-btn>

          <strong class="mx-2" v-text="product.quantity"></strong>
          <v-btn outlined class="mt-n2 add">
            <v-icon color="green" @click="increaseQ(product.id)">mdi-plus</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="mx-2 mt-n3" fab dark small color="green">
            <v-icon dark>mdi-shopping</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination color="green" v-model="pagination.current_page" @input="next" class="my-4" :length="pagination.last_page"></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
    };
  },
  mounted() {
    // this.$store.dispatch('getProductsbycategory')
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
     pagination() {
      return this.$store.state.pagination;
    }
  },
  data: () => ({
    bpm: 1
    // products: [
    //   { img: "images/pr1.png", title: "Cabbage", subtitle: "1kg", price: "$13" },
    // ],
  }),
  methods: {
        next(page) {
            console.log(page);
                this.$store.dispatch('getProductsbycategory',this.products[0].category['category_id'],page)
        }
  }
};
</script>

<style>
</style>
