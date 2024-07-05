<script setup>
import {ref} from "vue";
const visible = { type:Boolean,required:true }
const items= ref([
  {label:'Home', items:[{
    label:'Dashboard', icon:'pi pi-fw pi-home', to:'/'}]},
  {
    label: 'UI Components',
    items: [
      { label: 'Gestión de cámaras', icon: 'pi pi-fw pi-camera', to: '/uikit/formlayout' },
      { label: 'Gestión de usuarios', icon: 'pi pi-fw pi-users', to: '/uikit/input' },
      { label: 'Gestión de unidades', icon: 'pi pi-fw pi-car', to: '/uikit/floatlabel' },
      { label: 'Gestión de incidencias', icon: 'pi pi-fw pi-file', to: '/uikit/invalidstate' },
      { label: 'Gestión', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
      { label: 'Gestión', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },


    ]
  },

])
</script>

<template>
  <div class="p-5 h-full">
    <Menu v-model:visible="visible" :model="items" class="h-full w-80 overflow-y-auto"/>
  </div>

</template>

<style scoped>

</style>
