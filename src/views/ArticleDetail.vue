<template>
  <!-- Jarak antara Navbar dan header image -->
  <div class="mt-4"></div>
  <!-- Sesuaikan jarak sesuai kebutuhan -->

  <!-- Header image dengan jarak di sisi kiri dan kanan -->
  <div v-if="selectedArtikel">
    <div class="flex flex-col items-start px-8 bg-transparent">
      <img
        :src="selectedArtikel.image_url"
        alt="Header Image"
        class="w-full h-64"
      />
      <!-- Mengatur tinggi gambar menjadi 64px -->
      <p class="font-hint text-gray-400 text-left mt-2">{{ selectedArtikel.created_at }}</p>
      <!-- Teks tanggal dengan font hint dan warna abu transparan -->
    </div>
    <p
      class="pl-8 pr-8 mb-3 mt-10 text-xl text-black-700 dark:text-black-400 font-semibold"
    >
      {{ selectedArtikel.poin }}
    </p>
    <p class="pl-8 pr-8 mb-3 text-lg text-gray-700 dark:text-black-400">
      {{ selectedArtikel.konten }}
    </p>
  </div>
  <div v-else>
    <h1>Memuat artikel</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getArtikelData"]),
    artikel() {
      return this.getArtikelData;
    },
    selectedArtikel() {
      return this.getArtikelById(this.$route.params.articleId);
    },
  },
  mounted() {
    this.$store.dispatch("getArtikel");
  },
  methods: {
    getArtikelById(id) {
      return this.artikel.find((art) => art.id === id);
    },
  },
};
</script>