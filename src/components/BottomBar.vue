
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
    <form @submit.prevent="createAmount" action="">
      <div class="flex flex-col justify-center items-center text-left">
        <div class="">
          <label for="number">Masukan ML Air</label>
          <input
            class="w-44 h-10 rounded-xl block bg-gray-200 pl-4"
            type="number"
            id="number"
            v-model="amount"
            placeholder="ML"
          />
        </div>
      <div class="">
        <button
          class="mt-7 w-32 h-10 bg-gray-800 text-white rounded-xl flex items-center justify-center"
          >Submit</button
        >
      </div>
      </div>
    </form>
    </Sidebar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      amount : ""
    }
  },
  methods: {
    async createAmount() {
      const amountData = {
        amount: this.amount,
      };
      try {
        const success = await this.$store.dispatch("createAmount", amountData);

        if (success) {
          window.location.reload()
          this.$swal({
            title: "Berhasil Ditambahkan",
            icon: "success",
          });

        }
      } catch (error) {
        this.$swal({
          title: "Tidak berhasil menambah",
          icon: "failed",
        });
        console.error(error);
      }
    },
  }
}
</script>


<script setup>
import { ref } from "vue";
import Sidebar from "primevue/sidebar";

const visibleLeft = ref(false);
const visibleRight = ref(false);
const visibleTop = ref(false);
const visibleBottom = ref(false);
</script>