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
import { mapActions, mapMutations, mapState } from "vuex";
import Product from "./Product";

export default {
  name: "ProductsList",
  components: {
    Product,
  },
  computed: {
    ...mapState(['products']),
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(['fetchProducts']),
    ...mapMutations(['addProductToCart']),
  },
}
</script>
