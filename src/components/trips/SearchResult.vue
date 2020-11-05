<template>
  <div>
    <div class="d-flex">
      <v-card-text class="text-center">
        {{ moment(trip.departure_at).format('MMM Do YY') }}
        <br />
        <div class="caption font-weight-light">
          {{ moment(trip.departure_at).format('LT') }}
        </div>
      </v-card-text>
      <v-card-text class="text-center">
        <div>
          <v-icon>mdi-account</v-icon>
          {{ trip.transporter.email }}
        </div>
      </v-card-text>
      <v-card-text class="text-center">
        <span class="green--text font-weight-medium"
          >{{ trip.pricing.currency.code }}
          {{ trip.pricing.minimum_price }}</span
        >
        <br />
        <span class="caption font-weight-light">Minimum Price</span>
      </v-card-text>
      <v-card-text class="text-left">
        <span class="green--text font-weight-medium"
          >{{ trip.pricing.currency.code }} {{ trip.pricing.unit_price }}</span
        >
        <v-chip
          v-show="trip.pricing.negotiable"
          class="ma-2"
          color="primary"
          x-small
          pill
          outlined
        >
          Negotiable
        </v-chip>
        <div class="caption text-left font-weight-light">Per KG</div>
      </v-card-text>
    </div>
    <v-divider v-show="!isLastTrip"></v-divider>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['trip', 'isLastTrip'],
  methods: {
    moment: function() {
      return moment()
    }
  }
}
</script>

<style lang="scss" scoped></style>
