<template>
  <div>
    <div class="d-flex">
      <v-card-text class="text-center">
        {{ itemsCategoryNames }}
        <br />
      </v-card-text>
      <v-card-text class="text-center">
        <div>
          <v-icon>mdi-account</v-icon>
          {{ parcel.dispatcher.email }}
        </div>
      </v-card-text>
      <v-card-text class="text-center">
        <span class="green--text font-weight-medium"
          >{{ parcel.weight }} KG</span
        >
      </v-card-text>
      <v-card-text class="text-left">
        <span class="green--text font-weight-medium"
          >{{ parcel.pricing.price }} {{ parcel.pricing.currency.code }}</span
        >
        <v-chip
          v-show="parcel.pricing.negotiable"
          class="ma-2"
          color="primary"
          x-small
          pill
          outlined
        >
          Negotiable
        </v-chip>
      </v-card-text>
    </div>
    <v-divider v-show="!isLastParcel"></v-divider>
  </div>
</template>

<script>
export default {
  props: ['parcel', 'isLastParcel', 'itemsCategoryNames']
}
</script>

<style lang="scss" scoped></style>
