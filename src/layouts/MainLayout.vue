<template>
  <q-layout view="lHh Lpr lFf">
    <MainHeader @toggleLeftDrawer="toggleLeftDrawer" />
    <MainDrawer v-model="leftDrawerOpen"/>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive :key="$route.fullPath">
          <component :is="Component" />
        </keep-alive>
      </router-view> 
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import MainHeader from '../components/MainHeader.vue';
import MainDrawer from '../components/MainDrawer.vue';


defineOptions({
  name: 'MainLayout'
})

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
<style lang="scss">
.image {
  background-color: $accent ;
}
</style>
