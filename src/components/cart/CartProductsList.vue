<template>
  <table class="table cart-table">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col" class="text-center">Quantity</th>
      <th scope="col" class="text-center">Price</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <cart-product-item
        v-for="(product, index) in cartProducts"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :image="product.image"
        :amount="product.amount"
        @increment-amount="$root.incrementProductAmount(index)"
        @decrement-amount="$root.decrementProductAmount(index)"
        @remove="$root.removeProductFromCart(index)"
    />
    </tbody>
    <tfoot>
    <tr class="fw-bold px-4">
      <td class="text-end">
        Total:
      </td>
      <td class="text-center">{{ totalAmount }}</td>
      <td class="text-end">{{ `$${totalPrice}` }}</td>
    </tr>
    </tfoot>
  </table>
</template>

<script>
import CartProductItem from "./CartProductItem";

export default {
  name: "CartProductsList",
  components: { CartProductItem },
  computed: {
    cartProducts() {
      return this.$root.cartProducts;
    },
    totalAmount() {
      return this.$root.totalAmount;
    },
    totalPrice() {
      return this.cartProducts.reduce((total, { price, amount }) => total + (amount * price), 0);
    }
  },
}
</script>
