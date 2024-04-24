<template>
  <div class="container mx-auto p-4">
    <!-- Banner Pengingat -->
    <div class="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-between mb-4">
      <div>
        <h3 class="text-lg font-semibold">Pengingat</h3>
        <p>Jangan lupa untuk memenuhi saran hidrasi Anda hari ini!</p>
      </div>
      <div>
        <!-- Icon untuk mengaktifkan/menonaktifkan pengingat -->
        <button @click="toggleReminder" class="text-white">
          <svg v-if="reminderActive" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9a7 7 0 00-14 0v5a7 7 0 0014 0V9z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Kolom -->
    <div class="bg-gray-200 p-4 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">Aktifkan Mode Pengingat</h3>
      <p>Mari kita tingkatkan hidrasi harian Anda dengan mengaktifkan mode pengingat. Klik ikon di banner di atas untuk memulai.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reminderActive: false // Status pengingat (aktif/mati)
    };
  },
  methods: {
    toggleReminder() {
      // Fungsi untuk mengaktifkan/menonaktifkan pengingat
      this.reminderActive = !this.reminderActive;
    }
  }
}
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>
    