<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6">
        <shopping-cart-list />
      </v-col>
      <v-col cols="6">
        <shopping-cart-summary />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShoppingCartList from "@/components/ShoppingCartList";
import ShoppingCartSummary from "@/components/ShoppingCartSummary";
export default {
  name: "HelloWorld",
  components: {
    ShoppingCartList,
    ShoppingCartSummary
  },
  data: () => ({
    //
  })
};
</script>
