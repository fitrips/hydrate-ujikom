<template>
  <div class="card">
    <div class="flex gap-2 justify-content-center">
      <Button
        icon="pi pi-arrow-up"
        @click="visibleBottom = true"
        class="font-bold bg-black text-white w-44 h-10"
        >Setor</Button
      >
    </div>

    <Sidebar
      v-model:visible="visibleBottom"
      header="Tambah Minum"
      position="bottom"
      style="height: 300px"
    >
      <div class="flex flex-col justify-center items-center text-left">
        <div class="">
          <label for="number">Masukan ML Air</label>
          <input
            class="w-44 h-10 rounded-xl block bg-gray-200 pl-4"
            type="number"
            id="number"
            placeholder="ML"
          />
        </div>
      <div class="">
        <Button
          class="mt-7 w-32 h-10 bg-gray-800 text-white rounded-xl flex items-center justify-center"
          >Submit</Button
        >
      </div>
      </div>
    </Sidebar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "primevue/sidebar";

const visibleLeft = ref(false);
const visibleRight = ref(false);
const visibleTop = ref(false);
const visibleBottom = ref(false);
</script>