<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-card class="d-flex">
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
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AirportSearch from '@/components/trips/AirportSearch'
import DatePicker from '@/components/trips/DatePicker'

export default {
  data: () => ({
    originCode: null,
    destinationCode: null,
    date: null
  }),
  components: { AirportSearch, DatePicker },
  methods: {
    setOrigin(code) {
      this.originCode = code
    },
    setDestination(code) {
      this.destinationCode = code
    },
    setDate(date) {
      this.date = date
    }
  }
}
</script>
<style lang="scss" scoped></style>
