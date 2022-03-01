<template>
  <div class="row q-pa-md">
    <div class="col">
    </div>
    <div class="col-10 text-h5">
      熱門推薦商品
    </div>
    <div class="col">
    </div>
  </div>
  <div class="row q-pa-md">
    <div class="col">
    </div>
    <div class="col-10 text-h5">
      <div class="row">
        <div class="col-12 col-md q-ma-md" v-for="item in items" :key="item.index">
          <q-card class="my-card" >
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom">
                <div class="text-h6">{{item.title}}</div>
                <div class="text-subtitle2">{{item.desc}}</div>
              </div>
            </q-img>
            <q-card-actions>
              <q-btn flat>立馬購買</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
    <div class="col">
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionRecommend',
  setup () {
    return {
      items: [
        { index: 1, title: '商品1', desc: '商品1敘述', img: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { index: 2, title: '商品2', desc: '商品2敘述', img: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { index: 3, title: '商品3', desc: '商品3敘述', img: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { index: 4, title: '商品4', desc: '商品4敘述', img: 'https://cdn.quasar.dev/img/parallax2.jpg' }
      ]
    }
  }
})
</script>
