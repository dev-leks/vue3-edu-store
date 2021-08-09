import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import ProductsList from "./components/ProductsList";
import CartButton from "./components/CartButton";

const app = createApp({
  data: () => ({
    cartProducts: [],
  }),
  methods: {
    addProductToCart(product) {
      this.cartProducts.push(product);
    },
  },
});

app.component("products-list", ProductsList);
app.component("cart-button", CartButton);

app.mount("#app");
