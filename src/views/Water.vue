<template>
  <div class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gray-200">
    <!-- Angka besar dengan tulisan ml atau liter -->
    <div class="text-center mt-16 mb-8 relative z-10 flex items-center">
      <p class="text-6xl font-bold">
        <span class="border-b-2 border-blue-500 pb-2 mr-2">{{ displayValue }}</span>
        <span class="text-lg">{{ unit }}</span>
      </p>
    </div>

    <!-- Button dengan simbol plus dan tulisan tambah -->
    <button @click="openEditor" class="relative bg-blue-500 rounded-full p-4 flex items-center mb-16 z-10">
      <!-- Simbol plus -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mr-2"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>

      <!-- Tulisan Tambah -->
      <span class="text-white">Tambah</span>
    </button>

    <!-- Gelombang SVG -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="absolute bottom-0 w-full z-0"
      style="z-index: -1; height: 50%; margin-bottom: -1px;"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,256L12,224C24,192,48,128,72,133.3C96,139,120,213,144,245.3C168,277,192,267,216,250.7C240,235,264,213,288,218.7C312,224,336,256,360,229.3C384,203,408,117,432,117.3C456,117,480,203,504,213.3C528,224,552,160,576,149.3C600,139,624,181,648,202.7C672,224,696,224,720,197.3C744,171,768,117,792,85.3C816,53,840,43,864,74.7C888,107,912,181,936,192C960,203,984,149,1008,138.7C1032,128,1056,160,1080,170.7C1104,181,1128,171,1152,186.7C1176,203,1200,245,1224,229.3C1248,213,1272,139,1296,101.3C1320,64,1344,64,1368,58.7C1392,53,1416,43,1428,37.3L1440,32L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"
      ></path>
    </svg>

    <!-- Pop-up Editor -->
    <div v-if="showEditor" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 p-8 rounded-lg z-50">
      <p class="text-white mb-4">Ayo tambahkan air putih yang Anda minum!</p>
      <!-- Input angka -->
      <input type="number" v-model="inputValue" :max="maxValue" class="border p-2 mb-4" />

      <!-- Pilihan Satuan -->
      <select v-model="unit" class="border p-2 mb-4">
        <option value="ml">ml</option>
        <option value="liter">Liter</option>
      </select>

      <!-- Peringatan Konsumsi Minum -->
      <div v-if="unit === 'liter' && inputValue > maxValue" class="text-red-500 mb-4">
        Konsumsi minum Anda terlalu berlebihan! Maksimal 10 liter.
      </div>

      <!-- Tombol Simpan -->
      <button @click="saveData" class="bg-white text-blue-500 rounded-full p-2">Simpan</button>
    </div>

    <!-- Tombol Hapus -->
    <button @click="drinkWater" v-if="ml > 0" class="fixed bottom-16 right-8 bg-white text-blue-500 rounded-full p-4 z-10">
      <!-- Gelas SVG -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="#0099ff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="6" y1="4" x2="6" y2="14"></line>
        <line x1="6" y1="14" x2="18" y2="14"></line>
        <line x1="18" y1="14" x2="18" y2="4"></line>
        <line x1="18" y1="4" x2="6" y2="4"></line>
        <line x1="3" y1="4" x2="3" y2="16"></line>
        <line x1="21" y1="4" x2="21" y2="16"></line>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "WaterComponent",
  data() {
    return {
      showEditor: false,
      inputValue: 0,
      ml: 0,
      unit: 'ml',
      maxValue: 10, // Angka maksimal untuk liter
    };
  },
  computed: {
    displayValue() {
      return this.unit === 'ml' ? this.ml : this.ml * 1000; // Mengonversi ke liter jika satuan liter dipilih
    },
  },
  methods: {
    openEditor() {
      this.showEditor = true;
    },
    saveData() {
      if (this.unit === 'ml') {
        this.ml += parseInt(this.inputValue, 10);
      } else {
        this.ml += parseInt(this.inputValue, 10) * 1000; // Mengonversi liter ke ml
      }
      this.showEditor = false;
    },
    drinkWater() {
      // Pastikan nilai tidak pernah menjadi negatif
      this.ml = Math.max(0, this.ml - parseInt(this.inputValue, 10));
    },
  },
};
</script>

<style scoped>
/* Styling bisa ditambahkan di sini jika diperlukan */
</style>
