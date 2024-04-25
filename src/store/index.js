import { createStore } from "vuex";
import auth from "./modules/auth";
import artikel from "./modules/artikel";
import detail from "./modules/detail";
import amount from "./modules/amount"

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        artikel,
        detail,
        amount,
    },
});

export default store;