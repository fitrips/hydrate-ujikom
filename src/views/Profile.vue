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
  <div>
    <!-- Background Banner -->
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-blue-300 shadow-lg"></div>

    <div class="flex justify-center items-center h-screen">
      <div class="max-w-sm">
        <div class="relative rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
          <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">{{ user.username }}</h1>
          <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">Selamat datang di HydrateHero!</h3>
          <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">Mari mulai perjalanan kita menuju hidrasi yang lebih baik dan kehidupan yang lebih sehat!</p>
          <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li class="flex items-center py-3 text-sm">
              <span>Email</span>
              <span class="ml-auto"><span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">{{ user.email }}</span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["getUser"]),
  },
  created() {
    this.getUser();
  },
};
</script>
