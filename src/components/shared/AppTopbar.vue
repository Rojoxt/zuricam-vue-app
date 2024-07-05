<template>

    <Menubar class="w-full">
      <template #start>
        <img src="../../assets/images/logo.png" alt="Logo" class="h-8">
        <Button icon="pi pi-bars" aria-label="Submit" @click="$emit('toggle-sidebar')"/>
      </template>

      <template #end>
        <div class="flex items-center gap-2">
          <InputText placeholder="Search" type="text" class="w-32 sm:w-auto"/>
          <Avatar image="/images/avatar/amyelsner.png" shape="circle"/>
        </div>
      </template>
    </Menubar>
</template>

<script setup>


</script>


<style scoped>

</style>
