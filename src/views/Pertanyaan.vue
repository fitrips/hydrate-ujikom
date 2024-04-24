<template>
  <form action="">
    <div class="relative">
      <div class="absolute top-full left-0 w-full flex justify-center mt-4">
        <h6
          class="font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-400"
        >
          {{ progress }}%
        </h6>
      </div>
      <div
        class="relative w-full mt-2 border border-blue-gray-200 rounded-full"
      >
        <div
          class="h-2.5 rounded-full bg-blue-500"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </div>

    <!-- Input berat badan -->
    <!-- Tambahkan event listener input untuk memperbarui nilai progress -->
    <div class="mx-5 mt-8 mb-8">
      <p class="text-xl text-black font-semibold mb-2">
        Masukkan berat badan anda
      </p>
      <div class="w-full mx-auto flex justify-center">
        <div class="relative h-15 w-full">
          <input
            type="number"
            placeholder="Kilogram (KG)"
            min="0"
            step="0.1"
            v-model="berat_badan"
            @input="updateProgress"
            class="peer h-full w-full rounded-[15px] border border-gray-300 border-t-transparent bg-gray-500 bg-opacity-30 px-5 py-2.5 font-sans text-l font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline-none ring-4 ring-transparent transition-all placeholder-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-transparent focus:border-t-transparent focus:outline-none focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
          />
        </div>
      </div>
    </div>

    <!-- Input jenis kelamin -->
    <!-- Tambahkan event listener change untuk memperbarui nilai progress -->
    <div class="mx-5 mt-8 mb-8">
      <p class="text-xl text-black font-medium mb-2">Jenis kelamin</p>
      <div class="w-full mx-auto flex justify-center relative">
        <select
          v-model="jenis_kelamin"
          @change="updateProgress"
          class="peer h-full w-full rounded-[15px] border border-gray-300 border-t-transparent bg-gray-500 bg-opacity-30 px-5 py-2.5 font-sans text-l font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline-none ring-4 ring-transparent transition-all placeholder-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-transparent focus:border-t-transparent focus:outline-none focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 appearance-none pr-8"
        >
          <option disabled selected>Pilih jenis kelamin</option>
          <option>Perempuan</option>
          <option>Laki-laki</option>
        </select>
      </div>
    </div>

    <!-- Input cuaca -->
    <!-- Tambahkan event listener change untuk memperbarui nilai progress -->
    <div class="mx-5 mt-8 mb-8">
      <p class="text-xl text-black font-medium mb-2">Cuaca</p>
      <div class="w-full mx-auto flex justify-center relative">
        <select
          v-model="cuaca"
          @change="updateProgress"
          class="peer h-full w-full rounded-[15px] border border-gray-300 border-t-transparent bg-gray-500 bg-opacity-30 px-5 py-2.5 font-sans text-l font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline-none ring-4 ring-transparent transition-all placeholder-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-transparent focus:border-t-transparent focus:outline-none focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 appearance-none pr-8"
        >
          <option disabled selected>Pilih cuaca</option>
          <option>Panas</option>
          <option>Sedang</option>
          <option>Dingin</option>
        </select>
      </div>
    </div>
    
    <!-- Tombol Submit -->
    <div class="col-span-full flex justify-end">
      <button
        @click.prevent="createUserDetail" 
        :disabled="progress !== 100" 
        class="inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 ml-auto mx-5"
      >
        Selanjutnya &rarr;
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      berat_badan: "",
      jenis_kelamin: "",
      cuaca: "",
      progress: 0, // Menambah properti untuk nilai progress
    };
  },
  methods: {
    updateProgress() {
  // Hitung jumlah input yang sudah terisi
  let filledInputs = 0;
  if (this.berat_badan) filledInputs++;
  if (this.jenis_kelamin) filledInputs++;
  if (this.cuaca) filledInputs++;

  // Hitung nilai progress berdasarkan jumlah input yang sudah terisi
  this.progress = Math.round((filledInputs / 3) * 100); // Bulatkan ke nilai integer terdekat
},
    async createUserDetail() {
      const userDetail = {
        berat_badan: this.berat_badan,
        jenis_kelamin: this.jenis_kelamin,
        cuaca: this.cuaca,
      };
      try {
        await this.$store.dispatch("createUserDetail", userDetail);
        
        alert("Berhasil menyimpan detail pengguna!");
        this.berat_badan = "";
        this.jenis_kelamin = "";
        this.cuaca = "";
        this.progress = 0; // Reset nilai progress setelah berhasil menyimpan detail
        this.$router.push("/");
      } catch (error) {
        console.error(error);
        alert("Gagal menyimpan detail pengguna.");
      }
    },
  },
};
</script>
