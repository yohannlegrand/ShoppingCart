const shoppingCart = [
  {
    name: "Guitare Takamine Santa Fe",
    ref: "3GH490HG30F9HG",
    quantity: 1,
    price: 1100
  },
  {
    name: "Piano Yamaha P-515",
    ref: "0934BFB3FB30N0N",
    quantity: 1,
    price: 1500
  },
  {
    name: "Clavier M-AUDIO OXYGEN",
    ref: "FOIJE7389BOIN39",
    quantity: 1,
    price: 115
  }
];

export default {
  getShoppingCart(callback) {
    const res = {
      ok: true,
      data: shoppingCart
    };
    setTimeout(() => callback(res), 0);
  },

  incrementProduct(ref, callback) {
    // increment on server side
    // ...
    // ...
    const res = {
      ok: true
    };
    setTimeout(() => callback(res), 0);
  },

  decrementProduct(ref, callback) {
    // decrement on server side
    // ...
    // ...
    const res = {
      ok: true
    };
    setTimeout(() => callback(res), 0);
  },

  removeProduct(ref, callback) {
    // removing on server side
    // ...
    // ...
    const res = {
      ok: true
    };
    setTimeout(() => callback(res), 0);
  }
};
