<template>
  <div class="modal fade" id="cartModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="cartModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalTitle">
            Shopping Cart ({{ totalAmount }} Items)
          </h5>
          <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div v-if="!cartIsEmpty" class="modal-body p-4">
          <cart-products-list></cart-products-list>
          <cart-billing-form></cart-billing-form>
        </div>
        <div v-else class="modal-body p-4 d-flex justify-content-center">
          <p>
            Cart is empty...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartProductsList from "./CartProductsList";
import CartBillingForm from "./CartBillingForm";

export default {
  name: "CartModal",
  components: { CartBillingForm, CartProductsList },
  computed: {
    cartIsEmpty() {
      return !this.$root.cartProducts.length;
    },
    totalAmount() {
      return this.$root.totalAmount;
    },
  },
}
</script>
