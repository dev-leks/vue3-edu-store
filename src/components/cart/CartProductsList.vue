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
        @increment-amount="incrementProductAmount(index)"
        @decrement-amount="decrementProductAmount(index)"
        @remove="removeProductFromCart(index)"
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
import { mapGetters, mapMutations, mapState } from "vuex";
import CartProductItem from "./CartProductItem";

export default {
  name: "CartProductsList",
  components: { CartProductItem },
  computed: {
    ...mapState(['cartProducts']),
    ...mapGetters([
      'totalAmount',
      'totalPrice',
    ]),
  },
  methods: {
    ...mapMutations([
      'incrementProductAmount',
      'decrementProductAmount',
      'removeProductFromCart',
    ]),
  }
}
</script>
