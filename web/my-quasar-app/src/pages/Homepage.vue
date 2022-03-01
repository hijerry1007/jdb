<template>
    <q-page>
        <SectionCarousel />
        <SectionRecommend />
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import SectionCarousel from '../components/SectionCarousel.vue'
import SectionRecommend from '../components/SectionRecommend.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    SectionCarousel,
    SectionRecommend
  }
})
</script>
