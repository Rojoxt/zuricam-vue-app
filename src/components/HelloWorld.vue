<script setup>
import {ref, onMounted, onBeforeUnmount, watchEffect} from 'vue';
import AppTopbar from "./shared/AppTopbar.vue";
import AppMenu from "./shared/AppMenu.vue";

const isSidebarVisible = ref(true);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;


};
watchEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 991) {
      isSidebarVisible.value = false
    } else
      isSidebarVisible.value = true
  };
  // Llamar a handleResize inicialmente y cada vez que se redimensiona la ventana
  handleResize();
  window.addEventListener('resize', handleResize);

  // Limpiar el listener cuando el componente se desmonta
  return () => {
    window.removeEventListener('resize', handleResize);
  };
});


</script>

<template>

  <div class="h-screen  bg-pink-500 flex flex-col">
    <div style="height:60px" class="bg-red-500 p-1">
      <AppTopbar @toggle-sidebar="toggleSidebar"/>
    </div>

    <div class=" flex bg-blue-500 flex-grow " style="height: calc(100vh - 60px)">
      <AppMenu v-show="isSidebarVisible "/>
      <div class="flex h-full w-full bg-green-500">{{ isSidebarVisible }}</div>
    </div>
  </div>




</template>

<style scoped>
</style>
