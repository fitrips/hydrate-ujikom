import axios from "axios";

// Fungsi untuk melakukan logout
async function logout() {
  try {
    // Lakukan panggilan API DELETE ke endpoint logout
    const response = await axios.delete('http://localhost:3000/api/users/logout');

    // Handle respons sesuai kebutuhan
    console.log(response.data); // Misalnya, mencetak respons ke konsol
  } catch (error) {
    // Tangani kesalahan jika panggilan gagal
    console.error('Error during logout:', error);
  }
}

const state = {
  isAuthenticated: false,
  loginError: null,
  token: null,
  getToken: localStorage.getItem("token") || "",
  user: {},
};

const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  getToken: (state) => state.token,
  loginError: (state) => state.loginError,
  isLoggedIn: (state) => !!state.token,
  user: (state) => state.user,
};

const actions = {
  async login({ commit, state }, credentials) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        credentials
      );
  
      const token = response.data.data.token;
      const user = response.data.data;
      const userId = user.id; // Ambil userId dari detail pengguna
  
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userId", userId); // Simpan userId di local storage
  
      commit("setAuthenticated", true);
      commit("setToken", token);
      commit("setUser", user);
      commit("setLoginError", null);
      return true;
    } catch (error) {
      commit("setAuthenticated", false);
      commit("setLoginError", error.response.data.message);
      return false;
    }
  },
  
  async register({ commit }, credentials) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        credentials
      );
      commit("setAuthenticated", true);
      commit("setLoginError", null);
      return true;
    } catch (error) {
      commit("setAuthenticated", false);
      commit("setLoginError", error.response.data.message);
      return false;
    }
  },
  async getUser({ commit }) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const response = await axios.get(
        "http://localhost:3000/api/users/current",
        config
      );

      const user = response.data.data;

      localStorage.setItem("user", JSON.stringify(user));

      commit("setUser", user);
    } catch (error) {
      console.error(error);
    }
  },
  async logout({ commit }) {
    try {
      // Lakukan panggilan API DELETE ke endpoint logout
      const response = await axios.delete('http://localhost:3000/api/users/logout');
  
      console.log(response.data); // Misalnya, mencetak respons ke konsol
  
      // Reset status autentikasi dan data pengguna di state setelah logout berhasil
      commit("setAuthenticated", false);
      commit("setToken", null);
      commit("setUser", {});
  
      // Hapus token dan data pengguna dari local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch (error) {
      // Tangani kesalahan jika panggilan gagal
      console.error('Error during logout:', error);
      throw error; // Dilemparkan untuk menangkapnya di action jika perlu
    }
  }
};

const mutations = {
  setAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  setToken(state, token) {
    state.token = token;
  },
  setLoginError(state, error) {
    state.loginError = error;
  },
  setUser(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
