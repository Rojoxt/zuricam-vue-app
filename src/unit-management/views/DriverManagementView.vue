<template>


  <div class="card shadow-lg shadow-cyan-500/50 p-6 rounded-lg border-solid border-2 ">

    <Toolbar class="mb-4">
      <template #start>
        <Button label="New" icon="pi pi-plus" severity="success" class="mr-2"  />
        <Button label="Delete" icon="pi pi-trash" severity="danger"  />
      </template>

      <template #end>
        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2" auto />
        <Button label="Export" icon="pi pi-upload" severity="help"  />
      </template>
    </Toolbar>

    <DataTable
        ref="dt"
        v-model:selection="selectedDrivers"
        :value="drivers"
        dataKey="id"
        :paginator="true"
        :rows="5"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
    >
      <template #header>
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <h5 class="m-0">Manage Products</h5>
          <IconField iconPosition="left" class="block mt-2 md:mt-0">
            <InputIcon class="pi pi-search" />
            <InputText class="w-full sm:w-auto" v-model="filters['global'].value" placeholder="Search..." />
          </IconField>
        </div>
      </template>

      <Column selectionMode="multiple" headerStyle="width: 3rem" ></Column>
      <Column field="name" header="Nombre" sortable headerStyle="width:14%; min-w: 5rem"></Column>
      <Column field="direction" header="Dirección" sortable headerStyle="width:25%; min-w: 5rem"></Column>
      <Column field="unit" header="Unidad" sortable headerStyle="width:14%; min-w: 4rem"></Column>
      <Column field="image" header="Imagen" sortable headerStyle="width:25%; min-w: 8rem"></Column>

      <Column headerStyle="min-w:10rem;">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" outlined rounded class="mr-2" />
          <Button icon="pi pi-trash" outlined rounded severity="danger"  />
        </template>
      </Column>
    </DataTable>
  </div>


</template>

<script setup>
import {ref} from "vue";
import { FilterMatchMode } from '@primevue/core/api';

//const cameras = ref()
const selectedDrivers=ref()
const dt = ref(null);
const filters=ref({
  'global':{value:null, matchMode:FilterMatchMode.CONTAINS}
})
const drivers = [
  {name: 'A001', direction: 'Product A', unit: 100, image: 'Product A'},
  {name: 'A002', direction: 'Product B', unit: 200, image: 'Product b'},
  {name: 'A003', direction: 'Product C', unit: 100, image: 'Product c'},
  {name: 'A004', direction: 'Product D', unit: 200, image: 'Product d'},
  {name: 'A005', direction: 'Product E', unit: 100, image: 'Product e'},
  {name: 'A006', direction: 'Product F', unit: 200, image: 'Product f'},
];

</script>

<style scoped>

</style>
