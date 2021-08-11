<template>
  <form @submit.prevent="placeOrder" method="post" class="row g-3 mb-3" novalidate>
    <h5>Billing details</h5>
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input v-model="firstName" type="text" :class="{ 'form-control': true, 'is-invalid': firstNameInvalidMsg }"
             id="firstName" placeholder="First Name">
      <div v-if="firstNameInvalidMsg" class="invalid-feedback">
        {{ firstNameInvalidMsg }}
      </div>
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Last Name">
    </div>
    <div class="col-12">
      <label for="city" class="form-label">City</label>
      <input v-model="city" type="text" class="form-control" id="city" placeholder="City">
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input v-model="address" type="text" class="form-control" id="address" placeholder="Address">
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email Address</label>
      <input v-model="email" type="email" class="form-control" id="email" placeholder="Email Address">
    </div>
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input v-model="phone" type="text" class="form-control" id="phone" placeholder="+38(099) 999-99-99">
    </div>
    <div class="col-12 d-flex justify-content-end">
      <button :disabled="isPlaceOrderDisabled" type="submit" class="btn btn-success">
        Place Order
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CartBillingForm",
  data: () => ({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    email: "",
    phone: "",
    firstNameInvalidMsg: "",
  }),
  watch: {
    firstName(newFirstName) {
      if (newFirstName.length > 20) {
        this.firstNameInvalidMsg = "First name must be shorter than 20 characters.";
      } else {
        this.firstNameInvalidMsg = "";
      }
    }
  },
  computed: {
    isPlaceOrderDisabled() {
      return !!this.firstNameInvalidMsg;
    },
  },
  methods: {
    placeOrder() {},
  },
}
</script>
