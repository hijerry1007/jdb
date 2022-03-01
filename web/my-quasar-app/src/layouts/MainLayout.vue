<template>
  <q-layout view="hHh lpR fFf">

    <!-- header -->
    <q-header elevated>
      <q-toolbar class="bg-green-8 glossy text-white shadow-2 rounded-borders">
        <div>
          <q-toolbar-title>
              My First Quasar App
          </q-toolbar-title>
        </div>
        <q-space></q-space>
        <div class="gt-xs">
          <q-tabs>
            <q-route-tab v-for="item in toolbarButtons"
              :key="item.index"
              :label="item.label"
              :to="item.name"
              exact
            >
              <q-badge v-if="item.notification" color="red" floating>{{item.notification}}</q-badge>
            </q-route-tab>
          </q-tabs>
        </div>
        <div class="lt-sm">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <!-- left-drawer -->
    <q-drawer v-if='mini' class="bg-green-8" behavior="desktop" v-model="leftDrawerOpen" side="left" bordered overlay>
      <!-- drawer content -->
      <q-list bordered separator>
        <q-item v-for="item in toolbarButtons" :key="item.index" :to="item.name" clickable v-ripple exact>
          <q-item-section class="text-h6 text-white">{{item.label}}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- content -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- footer -->
    <q-footer elevated class="bg-grey-8 text-white">
      //to do
    </q-footer>

  </q-layout>

</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const $q = useQuasar()
    const leftDrawerOpen = ref(false)
    const mini = computed(() => {
      return $q.screen.lt.sm
    })
    return {
      leftDrawerOpen,
      mini,
      toolbarButtons: [
        { index: 0, label: '首頁', name: '/' },
        { index: 1, label: '公司簡介', name: 'profile' },
        { index: 2, label: '產品專區', name: 'product' },
        { index: 3, label: '最新消息', name: 'news', notification: 2 },
        { index: 4, label: '聯絡我們', name: 'contact' }
      ],
      toggleDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
