<template>
  <l-marker :lat-lng='marker.coordenadas'>
    <l-icon class-name='marker'>
      <ChatAltIcon class='text-white' size='40' />
    </l-icon>
    <l-popup>
      <div class='footer'>
        <p v-for='line in marker.linhasAnalise' :key='line.id' class='line'>
          {{ line.nome }}
        </p>
      </div>
      <div class='content'>
        <div class='header'>
          <h4 class='header-section'>
            <ClockIcon size='12' />
            {{ marker.data }}
          </h4>
          <h4 class='header-section'>
            <UserIcon size='12' />
            {{ marker.entrevistado }}
          </h4>
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class='prose-sm' v-html='marker.trecho'></p>
      </div>
    </l-popup>
  </l-marker>
</template>

<script>
import Vue from 'vue'
import { ChatAltIcon, ClockIcon, UserIcon } from '@vue-hero-icons/solid'

export default Vue.extend({
  name: 'MapMarker',
  components: { ChatAltIcon, ClockIcon, UserIcon },
  props: {
    marker: { type: Object, required: true }
  }
})
</script>

<style lang='postcss'>
.leaflet-marker-icon.marker {
  width: auto !important;
  height: auto !important;
  margin-left: -21px !important;
  margin-top: -21px !important;
  @apply px-[1px] pb-[1px] bg-praxis shadow-xl rounded-lg;
  @apply hover:bg-praxis-400 hover:shadow-2xl active:bg-praxis-600;
}

.leaflet-popup {
  left: -10rem !important;
}

.leaflet-popup-tip-container .leaflet-popup-tip {
  @apply bg-praxis-400;
}

.leaflet-popup-content-wrapper {
  width: 20rem;
  @apply shadow-2xl rounded-sm bg-praxis-400 text-gray-600 overflow-hidden;
}

.leaflet-popup-close-button {
  @apply hidden;
}

.leaflet-popup-content p {
  margin: 0;
}

.leaflet-popup-content {
  width: auto !important;
  line-height: initial;
  @apply m-0;

  & .content {
    @apply m-4 flex flex-col gap-4;
  }

  & .header {
    @apply flex justify-between;
  }

  & .header-section {
    @apply flex gap-2 items-center text-sm;
  }

  & .footer {
    @apply flex gap-2 flex-col bg-yellow-200 m-[-1px];

    & .line {
      @apply px-4 py-2 uppercase font-medium text-gray-800 tracking-wide;
    }
  }
}
</style>
