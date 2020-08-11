import shoppingCartSrv from "@/api-mock/shoppingCartSrv";

export default {
  namespaced: true,
  state: () => ({
    all: []
  }),
  getters: {
    totalPrice: state => {
      return state.all.reduce((prev, current) => {
        return prev + current.quantity * current.price;
      }, 0);
    },
    totalQuantity: state => {
      return state.all.reduce((prev, current) => {
        return prev + current.quantity;
      }, 0);
    }
  },
  mutations: {
    SET_SHOPPING_CART(state, shoppingCart) {
      state.all = shoppingCart;
    },

    INCREMENT_QUANTITY_PRODUCT(state, ref) {
      const product = state.all.find(product => product.ref === ref);
      product.quantity++;
    },

    DECREMENT_QUANTITY_PRODUCT(state, ref) {
      const product = state.all.find(product => product.ref === ref);
      product.quantity--;
    },

    DELETE_PRODUCT(state, ref) {
      const index = state.all.findIndex(product => product.ref === ref);
      state.all.splice(index, 1);
    }
  },
  actions: {
    fetchShoppingCart({ commit }) {
      shoppingCartSrv.getShoppingCart(res => {
        if (!res.ok) {
          console.log("Server error");
        }
        commit("SET_SHOPPING_CART", res.data);
      });
    },

    incrementQuantity({ commit }, { ref }) {
      shoppingCartSrv.incrementProduct(ref, res => {
        if (!res.ok) {
          console.log("Server error");
        }
        commit("INCREMENT_QUANTITY_PRODUCT", ref);
      });
    },

    decrementQuantity({ commit }, { ref }) {
      shoppingCartSrv.decrementProduct(ref, res => {
        if (!res.ok) {
          console.log("Server error");
        }
        commit("DECREMENT_QUANTITY_PRODUCT", ref);
      });
    },

    removeFromShoppingCart({ commit }, { ref }) {
      shoppingCartSrv.removeProduct(ref, res => {
        if (!res.ok) {
          console.log("Server error");
        }
        commit("DELETE_PRODUCT", ref);
      });
    }
  }
};
