<template>
  <div class="col-md-6 col-lg-4 py-3">
    <div class="card py-3">
      <img class="card-img-top" :src="image" :alt="name">
      <div class="card-body">
        <h5 class="card-title">
          {{ name }}
        </h5>
        <p class="card-subtitle mt-2 mb-3">
          {{ category }}
        </p>
        <h5 :class="`fs-3 ${isAvailable ? 'text-success' : 'text-secondary'}`">
          {{ `$${price}` }}
        </h5>
        <p class="mt-3">
          Stock:
          <strong v-if="isAvailable" class="text-success">Available</strong>
          <strong v-else class="text-danger">Sold out</strong>
        </p>
        <button
            :class="`btn w-100 shadow-none ${isAvailable ? 'btn-success' : 'btn-secondary' }`"
            :disabled="!isAvailable"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    name: {
      type: String,
      isRequired: true,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
    },
  },
}
</script>
