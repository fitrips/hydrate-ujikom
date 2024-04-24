import axios from "axios";

const state = {
  artikel: [],
};

const getters = {
  getArtikelData: (state) => state.artikel,
};

const actions = {
  async getArtikel({ commit }) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const response = await axios.get(
        "http://localhost:3000/api/artikel",
        config
      );

      const artikelData = response.data.data;

      commit("setArtikel", artikelData);
      return artikelData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
}
const mutations = {
  setArtikel: (state, artikel) => {
    state.artikel = artikel;
  },    
};

export default {
  state,
  getters,
  actions,
  mutations,
};
