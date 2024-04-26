
<template>
  <div class="bg-no-repeat bg-cover bg-center relative mt-1">
    <div
      class="absolute bg-gradient-to-br from-blue-950 via-blue-400 to-blue-100 inset-0 z-0"
    ></div>
    <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div
        class="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10"
      >
        <div class="self-start hidden lg:flex flex-col text-white">
          <img src="" class="mb-3" />
          <h1 class="mb-3 font-bold text-5xl">Hi H20 !</h1>
          <p class="pr-3">
            Selamat datang di Hydrate Hero! aplikasi pintar untuk mengingatkanmu
            minum air putih dan memberikan saran air. Yuk, mulai awali hari
            dengan hidrasi optimal.
          </p>
        </div>
      </div>
      <div class="flex justify-center self-center z-10">
        <div class="p-12 bg-white mx-auto rounded-2xl w-100">
          <div class="mb-4">
            <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
            <p class="text-gray-500">Please sign in to your account.</p>
          </div>
          <form @submit.prevent="performLogin" action="post">
          <div class="space-y-5">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide"
                >Email</label
              >
              <input
                class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-hydrate-0"
                type=""
                placeholder="Email@gmail.com"
                v-model="email"
              />
            </div>
            <div class="space-y-2">
              <label
                class="mb-5 text-sm font-medium text-gray-700 tracking-wide"
              >
                Password
              </label>
              <input
                class="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-hydrate-0"
                type="password"
                placeholder="Enter your password"
                v-model="password"
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="h-4 w-4 bg-blue-100 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="text-hydrate-0"> Forgot your password? </a>
              </div>
            </div>
            <div class="text-center mt-2 cursor-pointer" onclick="window.location='/register'">
              <p class="text-hydrate-0 text-gray-600 text-xs">
                 Do you not have an account?
              </p>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center bg-hydrate-0 hover:bg-blue-950 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </div>
          
          </form>
          <div class="pt-5 text-center text-gray-400 text-xs">
            <span>
              Copyright © 2024
              <a
                href="https://codepen.io/uidesignhub"
                rel=""
                target="_blank"
                title="Ajimon"
                class="text-green hover:text-green-500"
                >HYDRATEHERO</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["loginError", "isAuthenticated"]),
  },
  methods: {
    ...mapActions(["login"]),
    async performLogin() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      // Lakukan login dengan credentials
      const success = await this.login(credentials);

      if (success && this.isAuthenticated) {
        // Jika login berhasil, simpan userId ke localStorage
        localStorage.setItem("userId", this.$store.getters["user/userId"]);

        // Redirect ke halaman pertanyaan
        this.$router.push("/pertanyaan");
        alert("Berhasil login");
      } else {
        alert("Email atau password salah");
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
}
.ham7 .top {
  stroke-dasharray: 40 82;
}
.ham7 .middle {
  stroke-dasharray: 40 111;
}
.ham7 .bottom {
  stroke-dasharray: 40 161;
}
.ham7.active .top {
  stroke-dasharray: 17 82;
  stroke-dashoffset: -62px;
}
.ham7.active .middle {
  stroke-dashoffset: 23px;
}
.ham7.active .bottom {
  stroke-dashoffset: -83px;
}
</style>
