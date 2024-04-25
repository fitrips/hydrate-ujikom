import axios from "axios";

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
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      commit("setAuthenticated", false);
      commit("setToken", null);
      commit("setUser", {});

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
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
