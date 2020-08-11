<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-row>
            <v-col cols="6">{{ totalQuantity }} produits</v-col>
            <v-col>{{ totalPrice }} €</v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShoppingCartSummary",
  computed: mapGetters("shoppingCart", ["totalPrice", "totalQuantity"]),
  data: () => ({
    //
  })
};
</script>
