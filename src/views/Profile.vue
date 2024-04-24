<template>
<div
    class="flex w-full h-16 shadow-sm fixed z-50 bg-white p-5 px-14 justify-between font-pop font-semibold"
  >
    <div><Navbar></Navbar></div>
    <div>Hydrate Hero</div>
    <div>Notif</div>
  </div>
  <div>
    <!-- Background Banner -->
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-blue-300 shadow-lg"></div>

    <div class="flex justify-center items-center h-screen">
      <div class="max-w-sm">
        <div class="relative rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
          <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">{{ user.username }}</h1>
          <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">Marketing Exec. at Denva Corp</h3>
          <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!</p>
          <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li class="flex items-center py-3 text-sm">
              <span>Email</span>
              <span class="ml-auto"><span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">{{ user.email }}</span></span>
            </li>
            <li class="flex items-center py-3 text-sm">
              <span>Joined On</span>
              <span class="ml-auto">{{ user.created_at }}</span>
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
