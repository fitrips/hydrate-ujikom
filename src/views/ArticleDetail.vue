<template>

  <div
    class="flex w-full h-16 shadow-sm fixed z-50 bg-white p-5 px-14 justify-between font-pop font-semibold"
  >
    <div><Navbar></Navbar></div>
    <div>Hydrate Hero</div>
  <div class="notification">
<svg fill="#000000" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10,21h4a2,2,0,0,1-4,0ZM3.076,18.383a1,1,0,0,1,.217-1.09L5,15.586V10a7.006,7.006,0,0,1,6-6.92V2a1,1,0,0,1,2,0V3.08A7.006,7.006,0,0,1,19,10v5.586l1.707,1.707A1,1,0,0,1,20,19H4A1,1,0,0,1,3.076,18.383ZM6.414,17H17.586l-.293-.293A1,1,0,0,1,17,16V10A5,5,0,0,0,7,10v6a1,1,0,0,1-.293.707Z"/></svg>
<span v-if="showReminder">Jangan lupa minum air!</span>
</div>
</div>


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
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
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