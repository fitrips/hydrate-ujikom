import axios from "axios";

const state = {
  userDetail: [],
};

const getters = {
  getUserDetail: (state) => state.userDetail,
};

const actions = {
  async createUserDetail({ commit }, detailData) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const response = await axios.post(
        "http://localhost:3000/api/question",
        detailData,
        config
      );

      const userDetail = response.data.data;

      commit("addDetail", userDetail);
      return userDetail;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async getDetail({ commit }) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const response = await axios.get(
        `http://localhost:3000/api/question`, // Menggunakan endpoint yang sesuai dengan id pengguna
        config
      );

      const userDetail = response.data.data;

      commit("setDetail", userDetail);
      return userDetail;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  
};

const mutations = {
  addDetail: (state, newDetail) => {
    state.userDetail.push(newDetail);
  },
  setDetail: (state, userDetail) => {
    state.userDetail = userDetail;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};