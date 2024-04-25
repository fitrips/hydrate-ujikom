import axios from "axios";

const state = {
  amount: [],
  exceedsLimit: false
};

const getters = {
  getAmountData: (state) => state.amount,
  isExceedingLimit: (state) => state.exceedsLimit
};

const actions = {
    async getAmount({ commit }) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          };
    
          const response = await axios.get(
            "http://localhost:3000/api/amount",
            config
          );
    
          const amountData = response.data.data;
    
          // Menetapkan jumlah air dan kebutuhan air
          const jumlahAir = amountData.amount;
          const kebutuhanAir = amountData.kebutuhan;
    
          // Memeriksa apakah jumlah air melebihi kebutuhan air
          if (jumlahAir > kebutuhanAir) {
            commit("setExceedsLimit", true);
          } else {
            commit("setExceedsLimit", false);
          }
    
          commit("setAmount", amountData);
          return amountData;
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
  async createAmount({ commit }, amountData) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const response = await axios.post(
        "http://localhost:3000/api/amount",
        amountData,
        config
      );

      const newAmount = response.data.data;

      commit("addAmount", newAmount);
      return newAmount;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

}
const mutations = {
  setAmount: (state, amount) => {
    state.amount = amount;
  },
  addAmount: (state, newAmount) => {
    state.amount.push(newAmount);
  },   
  setExceedsLimit: (state, status) => {
    state.exceedsLimit = status; 
  } 
};

export default {
  state,
  getters,
  actions,
  mutations,
};