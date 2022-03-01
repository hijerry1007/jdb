<template>
   <div>
        <q-carousel
        arrows
        infinite
        animated
        v-model="slide"
        height="400px"
        autoplay="true"
        >
        <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
            <div class="absolute-bottom custom-caption">
            <div class="gt-xs text-h2">First stop</div>
            <div class="lt-sm text-h4">First stop</div>
            <div class="text-subtitle1">Mountains</div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
            <div class="absolute-bottom custom-caption">
            <div class="gt-xs text-h2">Second stop</div>
            <div class="lt-sm text-h4">Second stop</div>
            <div class="text-subtitle1">Famous City</div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom custom-caption">
            <div class="gt-xs text-h2">Third stop</div>
            <div class="lt-sm text-h4">Third stop</div>
            <div class="text-subtitle1">Famous Bridge</div>
            </div>
        </q-carousel-slide>
        </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SectionCarousel',
  setup () {
    return {
      slide: ref('first')
    }
  }
})
</script>

<style lang="scss" scoped>
.custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .3);
}
</style>
