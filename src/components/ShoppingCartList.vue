<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="product in shoppingCart" :key="product.ref">
        <v-card class="mx-auto">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ product.name }}
              </v-list-item-title>
              <v-list-item-subtitle
                >Référence : {{ product.ref }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <p>Prix : {{ product.price }} €</p>
            <p>Quantité - {{ product.quantity }}</p>
            <p>Total : {{ product.price * product.quantity }} €</p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text :disabled="product.quantity < 2"
              @click="decrementQuantity(product)"
              ><v-icon>mdi-minus</v-icon></v-btn
            >
            <v-btn text @click="incrementQuantity(product)"
              ><v-icon>mdi-plus</v-icon></v-btn
            >
            <v-btn text @click="removeFromShoppingCart(product)"
              ><v-icon>mdi-delete</v-icon></v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ShoppingCartList",
  computed: mapState({
    shoppingCart: state => state.shoppingCart.all
  }),
  methods: mapActions("shoppingCart", [
    "incrementQuantity",
    "decrementQuantity",
    "removeFromShoppingCart"
  ]),
  created() {
    this.$store.dispatch("shoppingCart/fetchShoppingCart");
  }
};
</script>
