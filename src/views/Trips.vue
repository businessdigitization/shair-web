<template>
  <v-container fill-height>
    <SearchBox />
    <v-expand-transition>
      <v-row v-show="hasTrips">
        <v-col>
          <v-card>
            <v-card-title>
              Available Trips
            </v-card-title>

            <SearchResult
              v-for="trip in trips"
              :key="trip.id"
              :trip="trip"
              :isLastTrip="isLastTrip(trip)"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-expand-transition>
    <v-row>
      <v-col>
        <v-btn large outlined color="primary" class="float-right">
          <v-icon dark>
            mdi-plus
          </v-icon>
          Add a trip
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchBox from '@/components/trips/SearchBox.vue'
import SearchResult from '@/components/trips/SearchResult.vue'

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Trips',
  computed: {
    hasTrips() {
      return this.trips.length > 0
    },
    ...mapState('trip', ['trips']),
    ...mapGetters('trip', ['isLastTrip'])
  },
  components: {
    SearchBox,
    SearchResult
  }
}
</script>
