<template>
  <v-row>
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
        <v-card-text class="d-flex justify-end pb-5">
          <v-btn @click="search" large color="primary" outlined>
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
import AirportSearch from '@/components/common/AirportSearch'
import DatePicker from '@/components/common/DatePicker'

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
      this.$store.dispatch('trip/search', this.searchArgs)
    }
  }
}
</script>
<style lang="scss" scoped></style>
