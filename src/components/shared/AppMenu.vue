<script setup>
import {ref} from "vue";
const visible = { type:Boolean,required:true }
const items= ref([
  {label:'Home', items:[{
    label:'Dashboard', icon:'pi pi-fw pi-home', to:'/'}]},
  {
    label: 'UI Components',
    items: [
      { label: 'Gestión de cámaras', icon: 'pi pi-fw pi-camera', to: {name:'cameras-management'} }, //'/cameras-management'
      { label: 'Gestión de conductores', icon: 'pi pi-fw pi-users', to: {name:'drivers-management'} },
      { label: 'Gestión de usuarios', icon: 'pi pi-fw pi-users', to: '' },
      { label: 'Gestión de unidades', icon: 'pi pi-fw pi-car', to: '/uikit/floatlabel' },
      { label: 'Gestión de incidencias', icon: 'pi pi-fw pi-file', to: '/uikit/invalidstate' },
      { label: 'Gestión', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
      { label: 'Gestión', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },


    ]
  },

])
</script>

<template>
     <Menu v-model:visible="visible" :model="items" class="h-full overflow-y-auto" >
      <template #item="{item,props}">
        <router-link  v-if="item.to.name" v-slot="{ href, navigate }" :to="item.to" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menu>


</template>

<style scoped>

</style>
