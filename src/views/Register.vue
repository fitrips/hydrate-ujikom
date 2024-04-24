
<template>
  <!-- component -->
  <div
    class="min-h-screen bg-gradient-to-br from-blue-950 via-blue-400 to-blue-100 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-3xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div
        class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
      >
        <form @submit.prevent="performRegister" action="post">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-xl font-semibold">Register</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div
                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <!-- New Name field -->
                <div class="relative group">
                  <input
                    autocomplete="off"
                    id="name"
                    name="name"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 group hover:border-hydrate-0"
                    placeholder="Name"
                    v-model="username"
                  />
                  <label
                    for="name"
                    class="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Name</label
                  >
                </div>
                <!-- Existing email field -->
                <div class="relative group">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 group hover:border-hydrate-0"
                    placeholder="Email address"
                    v-model="email"
                  />
                  <label
                    for="email"
                    class="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Email</label
                  >
                </div>
                <!-- Existing Password field -->
                <div class="relative group">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 group hover:border-hydrate-0"
                    placeholder="Password"
                    v-model="password"
                  />
                  <label
                    for="password"
                    class="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Password</label
                  >
                </div>
                <!-- Submit button -->
                <div class="relative">
                  <button
                    class="bg-hydrate-0 text-blue rounded-full px-4 py-2 w-full"

:style="{
                      background: 'linear-gradient(to right, #3498db, #ADD8E6)',
                      color: 'white',
                      'font-weight': 'bold',
                    }"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["loginError", "isAuthenticated"]),
  },
  methods: {
    ...mapActions(["register"]),

    async performRegister() {
      const credentials = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      const success = await this.register(credentials);

      if (success && this.isAuthenticated) {
        // Redirect to the desired route on successful login
        this.$router.push("/login");
      } else {
        alert("Login Failed");
      }
    },
  },
};
</script>
<style scoped>
/* Component styles go here */
</style>
