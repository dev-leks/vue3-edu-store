<template>
  <div class="container">
    <div class="card my-5 shadow">
      <div class="card-body">
        <div class="row">
          <product
              v-for="product in products"
              :key="product.id"
              :name="product.name"
              :category="product.category"
              :price="product.price"
              :image="product.image"
              :is-available="product.is_available"
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
    products: [
      {
        name: "Apple MacBook Pro 13-inch Space Gray Late 2020 (Apple Silicon M1, 16GB RAM, 256GB SSD)",
        category: "Computer & Accessories",
        price: 1499,
        image: "./img/macbook-pro.jpeg",
        is_available: true,
      },
      {
        name: "Apple iMac 21.5 with Retina 4K display 2019",
        category: "Computer & Accessories",
        price: 1299,
        image: "./img/imac.jpeg",
        is_available: false,
      }
    ],
  }),
}
</script>
