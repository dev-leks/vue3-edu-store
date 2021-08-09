<template>
  <div class="container">
    <div class="card my-5 shadow">
      <div class="card-body">
        <div class="row">
          <product
              v-for="product in products"
              :key="product.id"
              :id="product.id"
              :name="product.name"
              :category="product.category"
              :price="product.price"
              :image="product.image"
              :is-available="product.is_available"
              @add-to-cart="addProductToCart(product)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "ProductsList",
  components: {
    Product,
  },
  data: () => ({
    products: [],
  }),
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");
        this.products = await response.json();
      } catch (e) {
        console.error("Fetching error");
      }
    },
    addProductToCart(product) {
      this.$root.addProductToCart(product);
    },
  },
}
</script>
