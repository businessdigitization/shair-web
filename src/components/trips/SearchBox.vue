<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-card>
        <div class="d-flex">
          <AirportSearch
            label="From"
            icon="mdi-airplane-takeoff"
            @airport-select="setOrigin"
          />
          <AirportSearch
            label="To"
            icon="mdi-airplane-landing"
            @airport-select="setDestination"
          />
          <DatePicker @date-select="setDate" />
        </div>
        <v-card-text class="d-flex justify-center pb-5">
          <v-btn @click="search" large color="primary">
            <v-icon dark>
              mdi-magnify
            </v-icon>
            Search
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AirportSearch from '@/components/trips/AirportSearch'
import DatePicker from '@/components/trips/DatePicker'

export default {
  data: () => ({
    searchArgs: {
      origin_airport_code: null,
      destination_airport_code: null,
      date: null
    }
  }),
  components: { AirportSearch, DatePicker },
  methods: {
    setOrigin(code) {
      this.searchArgs.origin_airport_code = code
    },
    setDestination(code) {
      this.searchArgs.destination_airport_code = code
    },
    setDate(date) {
      this.searchArgs.date = date
      console.log(this.searchArgs.date)
    },
    search() {
      this.$store.dispatch('searchTrips', this.searchArgs)
    }
  }
}
</script>
<style lang="scss" scoped></style>
