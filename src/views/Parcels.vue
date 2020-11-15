<template>
  <v-container fill-height>
    <SearchBox />
    <v-expand-transition>
      <v-row v-show="hasParcel">
        <v-col>
          <v-card>
            <v-card-title>
              Available Parcels
            </v-card-title>

            <SearchResult
              v-for="parcel in parcels"
              :key="parcel.id"
              :parcel="parcel"
              :isLastParcel="isLastParcel(parcel)"
              :itemsCategoryNames="itemsCategoryNames(parcel)"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-expand-transition>
  </v-container>
</template>

<script>
import SearchBox from '@/components/parcels/SearchBox.vue'
import SearchResult from '@/components/parcels/SearchResult.vue'

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Parcel',
  computed: {
    hasParcel() {
      return this.parcels.length > 0
    },
    ...mapState('parcel', ['parcels']),
    ...mapGetters('parcel', ['isLastParcel', 'itemsCategoryNames'])
  },
  components: {
    SearchBox,
    SearchResult
  }
}
</script>
